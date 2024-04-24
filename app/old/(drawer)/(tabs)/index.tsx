import * as React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";

export default function Screen() {
  const box: any = [];
  return (
    <View className="bg-background flex-1">
      <ScrollView>
        <View>
          <View className="flex flex-row items-center gap-5 py-5">
            <View className="w-2 h-10 bg-primary" />
            <Text className="text-2xl font-semibold">
              Lorem ipsum dolor sit
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View className="flex flex-row gap-5">
              {box.length > 0
                ? box?.map((item: any, i: number) => {
                    return (
                      <View key={i}>
                        <Avatar
                          alt=""
                          className="w-32 h-32 aspect-square rounded-xl bg-muted">
                          <AvatarImage source={{ uri: "/" }} />
                          <AvatarFallback className="rounded-xl">
                            <Text>{i + 1}</Text>
                          </AvatarFallback>
                        </Avatar>
                      </View>
                    );
                  })
                : Array.from({ length: 10 }).map((_, i) => {
                    return (
                      <Skeleton key={i} className="h-32 w-32 rounded-xl" />
                    );
                  })}
            </View>
          </ScrollView>
        </View>
        <View>
          <View className="flex flex-row items-center gap-5 py-5">
            <View className="w-2 h-10 bg-primary" />
            <Text className="text-2xl font-semibold">
              Lorem ipsum dolor sit
            </Text>
          </View>
          <View className="flex flex-row gap-5 w-full">
            {box.length > 0
              ? box?.map((item: any, i: number) => {
                  return (
                    <View key={i} className="w-96 aspect-video bg-muted">
                      <Text>{i + 1}</Text>
                    </View>
                  );
                })
              : Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <Skeleton
                      key={i}
                      className="w-96 rounded-xl aspect-video"
                    />
                  );
                })}
          </View>
        </View>
        <View>
          <View className="flex flex-row items-center gap-5 py-5">
            <View className="w-2 h-10 bg-primary" />
            <Text className="text-2xl font-semibold">
              Lorem ipsum dolor sit
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View className="flex flex-row gap-5">
              {box.length > 0
                ? box?.map((item: any, i: number) => {
                    return (
                      <View key={i}>
                        <Avatar
                          alt=""
                          className="w-32 h-32 aspect-square bg-muted">
                          <AvatarImage source={{ uri: "/" }} />
                          <AvatarFallback className="">
                            <Text>{i + 1}</Text>
                          </AvatarFallback>
                        </Avatar>
                      </View>
                    );
                  })
                : Array.from({ length: 10 }).map((_, i) => {
                    return (
                      <Skeleton key={i} className="h-32 w-32 rounded-full" />
                    );
                  })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
