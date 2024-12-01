import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemesVariant } from '~/themes/theme-config';

interface ColorStore {
  themeColor: ThemesVariant;
  setThemeColor: (value: string) => void;
  isColorSchemeLoaded: boolean;
  setIsColorSchemeLoaded: (value: boolean) => void;
}

const useMultipleColor = create<ColorStore>()(
  persist(
    (set, get) => ({
      themeColor: 'blue',
      setThemeColor: (value: any) => set({ themeColor: value }),
      isColorSchemeLoaded: false,
      setIsColorSchemeLoaded: (value: any) => set({ isColorSchemeLoaded: value }),
    }),
    {
      name: 'themeColor',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useMultipleColor;
