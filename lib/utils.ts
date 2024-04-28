import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useColorScheme } from './useColorScheme';
import useMultipleColor from './hooks/useMultipleColor';
import { BarColor, Themes, TintColor } from '~/themes/theme-config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// themes
export const Theme = () => {
  const { isDarkColorScheme } = useColorScheme();
  const { themeColor } = useMultipleColor();
  const isDark = isDarkColorScheme ? 'dark' : 'light';
  const currentTheme = Themes.find((theme) => theme.name === themeColor);
  const primaryTheme = currentTheme?.cssVars[isDarkColorScheme ? 'dark' : 'light'];
  const activeColor = `hsl(${currentTheme?.activeColor[isDark]})`;
  const barColor = BarColor[isDark];
  const tinColor = TintColor[isDark];
  return { activeColor, isDark, currentTheme, primaryTheme, barColor, tinColor };
};
