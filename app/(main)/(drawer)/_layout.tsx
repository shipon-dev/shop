import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import * as React from 'react';
import CustomDrawer from '~/appcomponents/navigations/customDrawer';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { Theme } from '~/lib/utils';

export default function DrawerLayout() {
  const { tinColor } = Theme();
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        headerLeft: () => <DrawerToggleButton tintColor={tinColor} />,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerStatusBarHeight: 0,
          title: 'Settings',
        }}
      />
    </Drawer>
  );
}
