import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import React from 'react';
import CustomTabBar from '~/appcomponents/navigations/customTabBar';
import { Home, User } from '~/components/Icons';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import useMultipleColor from '~/lib/hooks/useMultipleColor';
import { useColorScheme } from '~/lib/useColorScheme';
import { cn } from '~/lib/utils';
import { BarColor, Themes, TintColor } from '~/themes/theme-config';

export default function _layout() {
  const { isDarkColorScheme } = useColorScheme();
  const { themeColor } = useMultipleColor();

  const IsDark = isDarkColorScheme ? 'dark' : 'light';
  const CurrentTheme = Themes.find((theme) => theme.name === themeColor);
  const ActiveColor = `hsl(${CurrentTheme?.activeColor[IsDark]})`;
  const TabBarInactiveTintColor = TintColor[IsDark];
  const Color = BarColor[IsDark];

  return (
    <Tabs
      tabBar={() => <CustomTabBar />}
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: ActiveColor,
        tabBarInactiveTintColor: TabBarInactiveTintColor,
        headerStyle: {
          backgroundColor: Color.background,
        },
        headerTintColor: Color.foreground,
        headerLeft: ({ tintColor }) => <DrawerToggleButton tintColor={tintColor} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
