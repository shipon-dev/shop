import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { AlertDialogScreen } from '~/appcomponents/alertDialogScreen';
import { Info } from '~/components/Icons';
import { AlertDialogAction, AlertDialogCancel } from '~/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import useProfile from '~/lib/hooks/useProfile';
import { ThemeSwitcher } from '~/themes/ThemeSwitcher';

export default function index() {
  const [progress, setProgress] = useState(78);
  const { isOpen, setIsOpen } = useProfile();

  useEffect(() => {
    setIsOpen(false);
  }, []);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  const GITHUB_AVATAR_URI = 'https://avatars.githubusercontent.com/u/85027552?v=4';
  return (
    <ScrollView className="flex-1 bg-background">
      <AlertDialogScreen
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Are sure you want to logout"
        subtitle="You will be logged out from the app"
        action={
          <>
            <AlertDialogCancel>
              <Text>No</Text>
            </AlertDialogCancel>
            <AlertDialogAction
              onPress={() => {
                console.log('logout');
              }}>
              <Text>Yes</Text>
            </AlertDialogAction>
          </>
        }
      />
      <View className="flex flex-1 items-center justify-center gap-5 py-5">
        <Card className="w-full max-w-sm p-6 rounded-2xl border">
          <CardHeader className="items-center">
            <Avatar alt="Shipon" className="w-24 h-24">
              <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
              <AvatarFallback>
                <Text>S</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />
            <CardTitle className="pb-2 text-center">Md. Shipon Molla</CardTitle>
            <View className="flex-row items-center">
              <CardDescription className="text-base font-semibold">Developer</CardDescription>
              <Tooltip delayDuration={150}>
                <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                  <Info size={14} strokeWidth={2.5} className="w-4 h-4 text-foreground/70" />
                </TooltipTrigger>
                <TooltipContent className="py-2 px-4 shadow">
                  <Text className="native:text-lg">Freelancer</Text>
                </TooltipContent>
              </Tooltip>
            </View>
          </CardHeader>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-sm text-muted-foreground">Productivity:</Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="w-11 items-center">
                  <Text className="text-sm font-bold">{progress}%</Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress value={progress} className="h-2" indicatorClassName="bg-primary" />
            <View />
            <Button className="shadow shadow-foreground/5" onPress={updateProgressValue}>
              <Text className="text-white">Update</Text>
            </Button>
          </CardFooter>
        </Card>
      </View>
      <View>
        <ThemeSwitcher />
      </View>
    </ScrollView>
  );
}
