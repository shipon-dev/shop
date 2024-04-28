import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Logo, PathLine } from '~/components/Svg';
import { Button } from '~/components/ui/button';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ height: '100%' }} className="bg-background">
      <View className="min-h-screen flex-1 bg-background flex flex-col justify-center items-center gap-10">
        <View className="flex-row gap-2 items-center">
          <Logo className="w-12 h-12" />
          <Text className="text-foreground text-4xl font-bold">Aora</Text>
        </View>
        <View className="w-full flex justify-center items-center h-80 px-4">
          <Image
            source={require('~/assets/images/cards.png')}
            className="w-full h-96"
            resizeMode="contain"
          />
        </View>
        <Text className="text-foreground font-bold text-4xl text-center max-w-96">
          Discover Endless Possibilities with{' '}
          <View className="relative">
            <Text className="text-primary font-bold text-4xl top-1">
              Aora
              <View className="">
                <PathLine className="absolute -left-20 -bottom-5 text-primary h-10 w-24" />
              </View>
            </Text>
          </View>
        </Text>

        <Text className="text-accent-foreground text-center text-lg max-w-96">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <Button size={'lg'} onPress={() => router.push('/(auth)/signup')}>
          <Text className="text-white font-semibold text-xl">Continue with Email</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Home;
