import '~/global.css';

import { SplashScreen, Stack } from 'expo-router';
import * as React from 'react';
import { PortalHost } from '~/components/primitives/portal';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { useColorScheme } from '~/lib/useColorScheme';
import { ThemeProvider } from '~/themes/ThemeProvider';
import { BarColor } from '~/themes/theme-config';
import { Theme } from '~/lib/utils';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync();
  const { barColor } = Theme();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: useClientOnlyValue(false, true),
          headerStyle: {
            backgroundColor: barColor.background,
          },
          headerTintColor: barColor.foreground,
        }}>
        <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
