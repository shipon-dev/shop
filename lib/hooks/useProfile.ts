import { create } from 'zustand';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const useProfile = create<Props>()((set, get) => ({
  isOpen: false,
  setIsOpen: (value: any) => set({ isOpen: value }),
}));

export default useProfile;
