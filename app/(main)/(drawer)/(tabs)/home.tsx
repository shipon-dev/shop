import React, { useRef } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Post from '~/appcomponents/main/home/post';
import { Trending } from '~/appcomponents/main/home/trending';
import { Search } from '~/components/Icons';
import { Logo } from '~/components/Svg';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

const Home = () => {
  const inputRef = useRef<any | null>(null);

  const inputPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const trendingData = [{}, {}, {}, {}, {}];
  const postData = [
    {
      title: 'This is a title',
      subTitle: 'This is a description',
      img: '/',
      postImage: '/',
    },
    {
      title: 'This is a title',
      subTitle: 'This is a description',
      img: '/',
      postImage: '/',
    },
    {
      title: 'This is a title',
      subTitle: 'This is a description',
      img: '/',
      postImage: '/',
    },
  ];
  return (
    <View className="bg-background">
      <FlatList
        data={postData}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View>
            <View className="flex flex-row justify-between items-center px-5">
              <View className="py-5">
                <Text className="font-medium text-xl text-foreground">Welcome Back</Text>
                <Text className="font-semibold text-2xl text-foreground">Shipon</Text>
              </View>
              <View>
                <Logo className="w-12 h-12" />
              </View>
            </View>
            <View className="p-5">
              <View
                className={cn(
                  'relative flex-row w-full border border-input rounded-xl h-16 native:h-16 overflow-hidden items-center bg-accent'
                )}>
                <Input
                  className={cn(
                    'border-none border-0 flex-1 web:focus-visible:ring-0 bg-transparent overflow-hidden'
                  )}
                  placeholder="Search for a video topic"
                  ref={inputRef}
                />
                <Pressable
                  onPress={inputPress}
                  className="h-full w-14 items-center justify-center relative">
                  <View>
                    <Search className="text-primary w-6 h-6" />
                  </View>
                </Pressable>
              </View>
            </View>
            <View>
              <Text className="text-lg text-muted-foreground font-medium p-5">Latest Videos</Text>
              <Trending data={trendingData} />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default Home;
