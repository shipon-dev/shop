import { View, Text, Image } from 'react-native';
import React from 'react';
import { MoreVertical, User } from '~/components/Icons';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Logo } from '~/components/Svg';

export default function Post({ data }: any) {
  return (
    <View className="p-5 gap-5">
      <View className="flex-row justify-between gap-5">
        <View>
          <Avatar alt="post" className="w-16 h-16 rounded-md bg-muted border-2 border-primary">
            <AvatarImage
              resizeMode="contain"
              source={{ uri: data?.img }}
              className="rounded-none"
            />
            <AvatarFallback className="rounded-none">
              <User className="w-8 h-8 text-primary" />
            </AvatarFallback>
          </Avatar>
        </View>
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text className="text-xl font-semibold text-foreground line-clamp-1 w-full">
              {data?.title}
            </Text>
            <Text className="text-lg text-muted-foreground font-medium">{data?.subTitle}</Text>
          </View>
          <View className="w-10 h-10 rounded-full bg-accent items-center justify-center">
            <MoreVertical className="w-5 h-5 text-foreground" />
          </View>
        </View>
      </View>
      <View className="aspect-video bg-accent rounded-xl">
        {data?.postImage ? (
          <Image
            source={{ uri: data?.postImage }}
            className="rounded-xl w-full h-full"
            resizeMode="contain"
          />
        ) : (
          <View className="flex-1 flex items-center justify-center">
            <Logo className="w-12 h-12" />
          </View>
        )}
      </View>
    </View>
  );
}
