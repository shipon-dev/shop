import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, View } from 'react-native';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import useMultipleColor from '~/lib/hooks/useMultipleColor';
import { useColorScheme } from '~/lib/useColorScheme';
import { cn } from '~/lib/utils';

export const ThemeSwitcher = () => {
  const { themeColor, setThemeColor } = useMultipleColor();
  const { colorScheme, setColorScheme } = useColorScheme();
  const themeMode = [
    {
      label: 'Light',
      bg: 'bg-white',
      border: 'border-white',
      text: 'text-black',
      onPress: () => {
        setColorScheme('light');
        setAndroidNavigationBar(colorScheme);
        AsyncStorage.setItem('mode', colorScheme);
      },
    },
    {
      label: 'Dark',
      bg: 'bg-black',
      border: 'border-black',
      text: 'text-white',
      onPress: () => {
        setColorScheme('dark');
        setAndroidNavigationBar(colorScheme);
        AsyncStorage.setItem('mode', colorScheme);
      },
    },
    {
      label: 'System',
      bg: 'bg-primary',
      border: 'border-primary',
      text: 'text-background',
      onPress: () => {
        setColorScheme('system');
        setAndroidNavigationBar(colorScheme);
        AsyncStorage.setItem('mode', colorScheme);
      },
    },
  ];

  const themesColor = [
    {
      label: 'Blue',
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      onPress: () => setThemeColor('blue'),
    },
    {
      label: 'Orange',
      bg: 'bg-orange-500',
      border: 'border-orange-500',
      onPress: () => setThemeColor('orange'),
    },
    {
      label: 'Red',
      bg: 'bg-red-500',
      border: 'border-red-500',
      onPress: () => setThemeColor('red'),
    },
    {
      label: 'Rose',
      bg: 'bg-rose-500',
      border: 'border-rose-500',
      onPress: () => setThemeColor('rose'),
    },
    {
      label: 'Violet',
      bg: 'bg-violet-500',
      border: 'border-violet-500',
      onPress: () => setThemeColor('violet'),
    },
    {
      label: 'Yellow',
      bg: 'bg-yellow-500',
      border: 'border-yellow-500',
      onPress: () => setThemeColor('yellow'),
    },
  ];

  return (
    <View className="flex-1 bg-background gap-5">
      <View className="flex-row flex-wrap justify-start">
        {themeMode?.map((item, i) => {
          return (
            <View key={i} className="p-2 w-1/3 sm:w-1/4 aspect-square">
              <Pressable
                onPress={item?.onPress}
                className={cn(
                  'items-center justify-center h-full w-full rounded-md border-4',
                  item?.border,
                  item?.bg,
                  item?.label.toLowerCase() === colorScheme && 'border-4 border-red-500'
                )}>
                <Text className={cn('text-lg font-semibold text-black', item?.text)}>
                  {item?.label}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>

      <View className="flex-row flex-wrap justify-start">
        {themesColor?.map((item, i) => {
          return (
            <View key={i} className="p-2 w-1/3 sm:w-1/4 aspect-square">
              <Pressable
                onPress={item?.onPress}
                className={cn(
                  'items-center justify-center h-full w-full rounded-md border-4',
                  item?.border,
                  item?.bg,
                  item?.label.toLowerCase() === themeColor && 'border-foreground'
                )}>
                <Text className="text-lg font-semibold text-white">{item?.label}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};
