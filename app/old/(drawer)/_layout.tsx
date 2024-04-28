import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '~/appcomponents/navigations/customDrawer';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { Theme } from '~/lib/utils';

export default function RootLayout() {
  const { barColor } = Theme();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: barColor.background,
        },
        headerTintColor: barColor.foreground,
        drawerStyle: {
          backgroundColor: barColor.background,
        },
        drawerLabelStyle: {
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600',
        },
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerShown: true,
        }}
      />
    </Drawer>
  );
}
