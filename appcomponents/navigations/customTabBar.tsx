import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { cn } from "~/lib/utils";
import { Home, User } from "~/components/Icons";
import { usePathname, useRouter } from "expo-router";

export default function CustomTabBar() {
  const path = usePathname();
  const router = useRouter();

  const bottomNav = [
    {
      icon: Home,
      link: "/",
    },
    {
      icon: User,
      link: "/profile",
    },
  ];

  return (
    <View className="flex-row bg-background p-5 relative h-24 flex items-center justify-center border-t border-muted">
      {bottomNav?.map((item: any, index: number) => {
        const isActive = item?.link === path;

        const onPress = () => {
          router.navigate(item?.link);
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            onPress={onPress}
            className="flex-1 items-center justify-center gap-2">
            <View className={cn("p-3", isActive && "bg-primary rounded-full")}>
              <item.icon
                className={cn(
                  "w-8 h-8 text-gray-500",
                  isActive && "text-white"
                )}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
