import '~/global.css';

import { SplashScreen, Stack } from 'expo-router';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PortalHost } from '~/components/primitives/portal';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { Theme } from '~/lib/utils';
import { ThemeProvider } from '~/themes/ThemeProvider';

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
    <SafeAreaView
      style={{
        backgroundColor: barColor.background,
        height: '100%',
      }}>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: useClientOnlyValue(false, true),
            headerStyle: {
              backgroundColor: barColor.background,
            },
            headerTintColor: barColor.foreground,
          }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <PortalHost />
      </ThemeProvider>
    </SafeAreaView>
  );
}
