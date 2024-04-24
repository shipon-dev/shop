import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '~/appcomponents/navigations/customDrawer';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { useColorScheme } from '~/lib/useColorScheme';
import { BarColor } from '~/themes/theme-config';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  const IsDark = isDarkColorScheme ? 'dark' : 'light';
  const Color = BarColor[IsDark];

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: Color.background,
        },
        headerTintColor: Color.foreground,
        drawerStyle: {
          backgroundColor: Color.background,
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
