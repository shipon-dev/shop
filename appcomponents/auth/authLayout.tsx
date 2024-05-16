import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { Logo } from '~/components/Svg';

const AuthLayout = (props: ViewProps) => {
  return (
    <View className="flex-1 bg-background py-20">
      <View className="flex-1 p-5">
        <View className="flex-row gap-2 items-center mb-8">
          <Logo className="w-12 h-12" />
          <Text className="text-foreground text-4xl font-bold">Aora</Text>
        </View>
        <View className="flex-1">{props.children}</View>
      </View>
    </View>
  );
};

export default AuthLayout;
