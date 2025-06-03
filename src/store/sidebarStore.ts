import { LOCAL_STORAGE_KEYS } from 'src/constants.ts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ISidebarStore {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<ISidebarStore>()(
  persist(
    (set, get) => ({
      state: 'expanded',
      open: true,
      setOpen: (open) => set({ open, state: open ? 'expanded' : 'collapsed' }),
      toggleSidebar: () => {
        const { open } = get();
        set({ open: !open, state: !open ? 'expanded' : 'collapsed' });
      },
    }),
    {
      name: LOCAL_STORAGE_KEYS.sidebar,
      partialize: (state) => ({ open: state.open, state: state.state }),
    }
  )
);
