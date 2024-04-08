import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import * as AvatarPrimitive from '~/components/primitives/avatar';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import Slider from '~/appcomponents/slider/slider';

export default function Welcome() {
  return (
    <View className="flex-1 bg-primary">
      <View className="w-full h-1/2 mx-auto absolute bottom-0 gap-5">
        <View className="absolute -top-1/2 left-1/2 -translate-x-1/2">
          <Avatar alt="FS" className="relative -top-28 rounded-none w-full h-96 ">
            <AvatarImage
              source={require('~/assets/images/man.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </Avatar>
        </View>
        <View className="px-5 py-20 h-full bg-white rounded-t-[5.5rem]">
          <Slider />
        </View>
      </View>
    </View>
  );
}
