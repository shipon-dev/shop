import React, { useRef } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import Post from '~/appcomponents/main/home/post';
import { Search } from '~/components/Icons';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

const Saved = () => {
  const inputRef = useRef<any | null>(null);

  const inputPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
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
                <Text className="font-semibold text-2xl text-foreground">Saved Videos</Text>
              </View>
            </View>
            <View className="p-5">
              <Pressable
                onPress={inputPress}
                className={cn(
                  'relative flex-row w-full border border-input rounded-xl h-16 native:h-16 overflow-hidden items-center bg-accent'
                )}>
                <Input
                  className={cn(
                    'border-none border-0 flex-1 web:focus-visible:ring-0 bg-transparent overflow-hidden'
                  )}
                  placeholder="Search your saved videos"
                  ref={inputRef}
                />
                <Pressable
                  onPress={inputPress}
                  className="h-full w-14 items-center justify-center relative">
                  <View>
                    <Search className="text-primary w-6 h-6" />
                  </View>
                </Pressable>
              </Pressable>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default Saved;
