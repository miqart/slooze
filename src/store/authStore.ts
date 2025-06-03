import apiClient from 'src/api/client.ts';
import { getErrorMessage } from 'src/api/utils.ts';
import { LOCAL_STORAGE_KEYS } from 'src/constants.ts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'user' | 'moderator';

interface ILoginResponse {
  accessToken: string;
  email: string;
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}
type IUserResponse = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: UserRole;
} | null;

interface IAuthStore {
  isAuthenticated: boolean | undefined;
  isLoginPending: boolean;
  isLogoutPending: boolean;
  error: string | null;
  user: IUserResponse;
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setUser: (user: IUserResponse) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setLoggedOutState: () => void;
  getUser: () => Promise<IUserResponse>;
}

const loggedOutState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: undefined,
      isLoginPending: false,
      isLogoutPending: false,
      error: null,
      accessToken: null,
      refreshToken: null,
      user: null,
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setUser: (user) => set({ user }),
      login: async (username: string, password: string) => {
        set({ isLoginPending: true, error: null });
        try {
          const res = await apiClient.post<ILoginResponse>('/auth/login', {
            username,
            password,
          });

          set({
            isAuthenticated: true,
            isLoginPending: false,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          });
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          console.log(errorMessage);
          set({
            ...loggedOutState,
            error: errorMessage,
          });
        } finally {
          set({ isLoginPending: false });
        }
      },
      getUser: async () => {
        try {
          const res = await apiClient.get('/auth/me');
          const { id, username, firstName, lastName, email, image, role } =
            res.data;

          const user = {
            id,
            username,
            firstName,
            lastName,
            email,
            image,
            role,
          };

          set({ user, isAuthenticated: true });

          return user;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          console.log(errorMessage);
          set({ ...loggedOutState });
          return null;
        }
      },
      setLoggedOutState: () => {
        set({ ...loggedOutState });
      },
      logout: async () => {
        try {
          set({ isLogoutPending: true });

          await apiClient.post('/auth/logout');
          set({
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
          });
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          console.log(errorMessage);
          set({ ...loggedOutState });
        } finally {
          set({ isLogoutPending: false });
        }
      },
    }),
    {
      name: LOCAL_STORAGE_KEYS.auth,
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
);
