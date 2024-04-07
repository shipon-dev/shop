import { DrawerContentScrollView } from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Bell, Home, Info, LogOut, User } from "~/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { CardDescription, CardTitle } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

export default function CustomDrawer(props: any) {
  const path = usePathname();
  const router = useRouter();

  const Name = "Md. Shipon Molla";
  const GITHUB_AVATAR_URI =
    "https://avatars.githubusercontent.com/u/85027552?v=4";

  const menu = [
    {
      icon: Home,
      title: "Home",
      link: "/",
    },
    {
      icon: User,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: Bell,
      title: "Notifications",
      link: "/notifications",
    },
  ];

  return (
    <>
      <View className="flex-1 ">
        <DrawerContentScrollView>
          <View className="flex flex-row gap-5 items-center justify-start border-b-2 border-muted mx-2 pb-5 mb-5">
            <Avatar alt="Shipon" className="w-20 h-20">
              <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
              <AvatarFallback>
                <Text className="text-foreground text-3xl">
                  {Name.charAt(0)}
                </Text>
              </AvatarFallback>
            </Avatar>
            <View>
              <CardTitle
                numberOfLines={1}
                className="line-clamp-1 text-center pr-24">
                {Name}
              </CardTitle>
              <View className="flex-row items-center">
                <CardDescription
                  numberOfLines={1}
                  className="text-base font-semibold">
                  Developer
                </CardDescription>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                    <Info
                      size={14}
                      strokeWidth={2.5}
                      className="w-4 h-4 text-foreground/70"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="py-2 px-4 shadow">
                    <Text className="native:text-lg text-foreground">
                      Freelancer
                    </Text>
                  </TooltipContent>
                </Tooltip>
              </View>
            </View>
          </View>

          <View className="flex flex-col mx-1 flex-grow-0 flex-shrink-0 flex-initial">
            {menu?.map((item: any, i: number) => {
              const isActive = item?.link === path;
              return (
                <TouchableOpacity
                  key={i}
                  className={cn(
                    "p-3 flex flex-row items-center rounded-md mx-2 my-1",
                    isActive && "bg-primary"
                  )}
                  onPress={() => {
                    router.navigate(item?.link);
                  }}>
                  <View className="w-10 flex">
                    <item.icon
                      className={cn(
                        "w-6 h-6 text-foreground",
                        isActive && "text-white"
                      )}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    className={cn(
                      "text-xl font-medium pr-10 text-foreground",
                      isActive && "text-white"
                    )}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </DrawerContentScrollView>
        <View className="pb-10 mx-2">
          <TouchableOpacity
            className="p-3 flex flex-row items-center rounded-md"
            onPress={() => {}}>
            <View className="w-10 flex">
              <LogOut className={cn("w-6 h-6 text-foreground")} />
            </View>
            <Text
              numberOfLines={1}
              className={cn("text-xl font-medium text-foreground pr-10")}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
