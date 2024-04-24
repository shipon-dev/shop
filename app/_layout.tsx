import '~/global.css';

import { SplashScreen, Stack } from 'expo-router';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PortalHost } from '~/components/primitives/portal';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { useColorScheme } from '~/lib/useColorScheme';
import { ThemeProvider } from '~/themes/ThemeProvider';
import { BarColor } from '~/themes/theme-config';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync();
  const { isDarkColorScheme } = useColorScheme();

  const IsDark = isDarkColorScheme ? 'dark' : 'light';
  const Color = BarColor[IsDark];

  return (
    <SafeAreaView
      style={{
        backgroundColor: Color.background,
        height: '100%',
      }}>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: useClientOnlyValue(false, true),
            headerStyle: {
              backgroundColor: Color.background,
            },
            headerTintColor: Color.foreground,
          }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <PortalHost />
      </ThemeProvider>
    </SafeAreaView>
  );
}
