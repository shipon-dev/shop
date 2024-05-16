import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

export const Trending = ({ data }: any) => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          className="relative justify-center items-center mr-5"
          activeOpacity={0.7}
          onPress={() => {}}>
          <View className="w-52 h-72 bg-accent my-5 rounded-3xl"></View>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
