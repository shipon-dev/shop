import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Search, User } from '~/components/Icons';
import { Card } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { useRouter } from 'expo-router';

const profile = () => {
  const AVATAR_URI = 'https://avatars.githubusercontent.com/u/85027552?v=4';
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="items-center gap-5 py-5">
        <Card className="w-full max-w-sm p-6 rounded-2xl border items-center justify-center gap-5">
          <Avatar alt="profile" className="w-28 h-28 rounded-full bg-muted border-2 border-primary">
            <AvatarImage
              resizeMode="contain"
              source={{ uri: AVATAR_URI }}
              className="rounded-none"
            />
            <AvatarFallback className="rounded-none">
              <User className="w-8 h-8 text-primary" />
            </AvatarFallback>
          </Avatar>
          <Text className="text-foreground text-3xl font-semibold px-5 text-center">Shipon</Text>
          <View className="w-full flex-row items-center justify-center gap-10 px-5">
            <View className="">
              <Text className="text-foreground text-center text-2xl font-semibold">10</Text>
              <Text className="text-muted-foreground text-center text-xl">Posts</Text>
            </View>
            <View className="">
              <Text className="text-foreground text-center text-2xl font-semibold">2.8k</Text>
              <Text className="text-muted-foreground text-center text-xl">Views</Text>
            </View>
          </View>
          <View className="gap-5">
            <Search className="w-28 h-28 text-primary mx-auto" />
            <View className="gap-2">
              <Text className="text-muted-foreground text-center">No Videos Found</Text>
              <Text className="text-foreground font-bold text-xl text-center">
                No videos found for this profile
              </Text>
            </View>
            <Button
              size={'lg'}
              onPress={() => {
                router.back();
              }}>
              <Text className="text-white font-semibold text-lg">Back to Explore</Text>
            </Button>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default profile;
