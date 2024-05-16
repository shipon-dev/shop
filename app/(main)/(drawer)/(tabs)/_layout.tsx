import React, { useState } from 'react';
import { useClientOnlyValue } from '~/components/useClientOnlyValue';
import { Theme, cn } from '~/lib/utils';
import { Tabs } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { BookMarked, Home, PlusCircle, User, LogOut } from '~/components/Icons';
import { Platform, Text, View } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';
import useProfile from '~/lib/hooks/useProfile';

export const BottomTabIcon = ({ focused, name, Icon }: any) => {
  return (
    <View className="gap-1 items-center justify-center">
      <Icon className={cn('w-8 h-8 text-foreground', focused && 'text-primary')} />
      <Text className={cn('text-foreground text-sm font-semibold', focused && 'text-primary')}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { activeColor, barColor, tinColor } = Theme();
  const { setIsOpen } = useProfile();
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: tinColor,
        tabBarStyle: {
          backgroundColor: barColor.background,
          borderTopWidth: 0,
          paddingBottom: 0,
        },
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: barColor.background,
        },
        headerStatusBarHeight: 0,
        headerTintColor: barColor.foreground,
        headerLeft: ({ tintColor }) => <DrawerToggleButton tintColor={tintColor} />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon focused={focused} Icon={Home} name={'Home'} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon focused={focused} Icon={PlusCircle} name={'Create'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon focused={focused} Icon={User} name={'Profile'} />
          ),
          headerRight: ({ ...rest }) => (
            <PlatformPressable
              {...rest}
              accessible
              accessibilityRole="button"
              android_ripple={{ borderless: true }}
              onPress={() => {
                setIsOpen(true);
              }}
              className="mx-3"
              hitSlop={Platform.select({
                ios: undefined,
                default: { top: 16, right: 16, bottom: 16, left: 16 },
              })}>
              <LogOut className="text-red-500 h-6 w-6 m-1" />
            </PlatformPressable>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon focused={focused} Icon={BookMarked} name={'Saved'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
