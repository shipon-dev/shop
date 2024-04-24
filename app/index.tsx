import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { PathLine } from '~/components/Svg';
import useMultipleColor from '~/lib/hooks/useMultipleColor';
import { useColorScheme } from '~/lib/useColorScheme';
import { Themes } from '~/themes/theme-config';

const Home = () => {
  const { isDarkColorScheme } = useColorScheme();
  const { themeColor } = useMultipleColor();

  const IsDark = isDarkColorScheme ? 'dark' : 'light';
  const CurrentTheme = Themes.find((theme) => theme.name === themeColor);
  const ActiveColor = `hsl(${CurrentTheme?.activeColor[IsDark]})`;
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="">
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={require('~/assets/images/cards.png')}
            className="w-full h-96"
            resizeMode="contain"
          />
        </View>
        <View className="">
          <View>
            <Text className="text-foreground font-bold text-4xl text-center">
              Discover Endless Possibilities with{' '}
              <View className="relative">
                <Text className="text-foreground font-bold text-4xl">
                  Aora
                  <View className="">
                    <PathLine className="absolute -left-20 -bottom-7 text-primary h-10 w-32" />
                  </View>
                </Text>
              </View>
            </Text>
            {/* <Link
              href={'/old/(drawer)/(tabs)/profile'}
              className="text-foreground text-3xl bg-primary text-center p-5">
              Profile
            </Link> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
