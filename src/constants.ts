import { UserRole } from 'src/store/authStore.ts';

export const LOCAL_STORAGE_KEYS = {
  auth: 'auth-storage',
  theme: 'theme-storage',
  sidebar: 'sidebar-storage',
};

export const dashboardRoles: UserRole[] = ['admin'];
