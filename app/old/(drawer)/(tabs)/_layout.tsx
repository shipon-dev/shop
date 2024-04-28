import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import React from 'react';
import CustomTabBar from '~/appcomponents/navigations/customTabBar';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { Theme } from '~/lib/utils';

export default function _layout() {
  const { activeColor, barColor, tinColor } = Theme();

  return (
    <Tabs
      tabBar={() => <CustomTabBar />}
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: tinColor,
        headerStyle: {
          backgroundColor: barColor.background,
        },
        headerTintColor: barColor.foreground,
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
