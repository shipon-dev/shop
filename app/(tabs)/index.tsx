import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';

export default function TabOneScreen() {
  return (
    <View className="items-center flex-1 justify-center">
      <Text className="text-xl font-bold">Tab One</Text>
      <View className="h-[1px] my-7 w-4/5 bg-gray-200" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
