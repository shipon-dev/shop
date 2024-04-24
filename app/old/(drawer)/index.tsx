import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Animation, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '~/appcomponents/slider/slider';
import { Avatar, AvatarImage } from '~/components/ui/avatar';

export default function Welcome() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex-1 bg-primary">
          <View className="w-full h-1/2 mx-auto absolute bottom-0 gap-5">
            <Animation.View entering={FadeInDown}>
              <View className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <Avatar alt="FS" className="relative rounded-none w-full h-96 ">
                  <AvatarImage
                    source={require('~/assets/images/man.png')}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </Avatar>
              </View>
            </Animation.View>
            <Animation.View
              entering={FadeInUp}
              className="px-5 py-20 h-full bg-background rounded-t-[5.5rem]">
              <Slider />
            </Animation.View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
