import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Home, User } from '~/components/Icons';
import { cn } from '~/lib/utils';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  const bottomNav = [
    {
      icon: Home,
      link: '/home',
    },
    {
      icon: User,
      link: '/profile',
    },
  ];

  return (
    <View className="flex-row bg-background p-5 relative h-24 flex items-center justify-center border-t border-muted">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex items-center">
            {options.tabBarIcon && options.tabBarIcon}
            <Text className={cn(isFocused ? 'text-primary' : 'text-foreground')}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
