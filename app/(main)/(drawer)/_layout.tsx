import { Stack } from 'expo-router';
import * as React from 'react';

export default function DrawerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
