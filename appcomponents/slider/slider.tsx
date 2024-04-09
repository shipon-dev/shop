import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Slider() {
  const router = useRouter();

  const controler = {
    loop: true,
    autoplay: true,
    dot: <View className="w-2 h-2 bg-primary/50 m-2 rounded-full" />,
    activeDot: <View className="w-4 h-2 bg-primary m-2 rounded-full" />,
  };

  return (
    <Swiper {...controler}>
      <View className="flex-1 gap-5">
        <Text className="text-5xl font-extrabold text-center text-black capitalize leading-tight">
          The <Text className="text-primary">fastest</Text> in deliver{' '}
          <Text className="text-primary">food</Text>
        </Text>
        <Text className="text-2xl font-medium text-center text-black leading-snug">
          Our jobs is to filling your tummy with delicious food and fast delivery
        </Text>
        <Pressable
          onPress={() => {
            router.navigate('/signin');
          }}
          className="bg-primary p-5 rounded-md w-52 mx-auto">
          <Text className="text-white font-bold text-2xl text-center">Get Started</Text>
        </Pressable>
      </View>
      <View className="flex-1 gap-5">
        <Text className="text-5xl font-extrabold text-center text-black capitalize leading-tight">
          2 The <Text className="text-primary">fastest</Text> in deliver{' '}
          <Text className="text-primary">food</Text>
        </Text>
        <Text className="text-2xl font-medium text-center text-black leading-snug">
          Our jobs is to filling your tummy with delicious food and fast delivery
        </Text>
        <Pressable
          onPress={() => {
            router.navigate('/signin');
          }}
          className="bg-primary p-5 rounded-md w-52 mx-auto">
          <Text className="text-white font-bold text-2xl text-center">Get Started</Text>
        </Pressable>
      </View>
      <View className="flex-1 gap-5">
        <Text className="text-5xl font-extrabold text-center text-black capitalize leading-tight">
          3 The <Text className="text-primary">fastest</Text> in deliver{' '}
          <Text className="text-primary">food</Text>
        </Text>
        <Text className="text-2xl font-medium text-center text-black leading-snug">
          Our jobs is to filling your tummy with delicious food and fast delivery
        </Text>
        <Pressable
          onPress={() => {
            router.navigate('/signin');
          }}
          className="bg-primary p-5 rounded-md w-52 mx-auto">
          <Text className="text-white font-bold text-2xl text-center">Get Started</Text>
        </Pressable>
      </View>
    </Swiper>
  );
}
