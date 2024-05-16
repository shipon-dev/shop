import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Button } from '~/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormInput from '~/appcomponents/forms/formInput';
import { Eye, EyeOff } from '~/components/Icons';
import AuthLayout from '~/appcomponents/auth/authLayout';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SigninFormValues = z.infer<typeof formSchema>;

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues: Partial<SigninFormValues> = {
    email: undefined,
    password: undefined,
  };

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: Partial<SigninFormValues>) => {
    try {
      setIsLoading(true);
      console.log(data);
      router.push('/(main)/(drawer)/(tabs)/home');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }} className="bg-background flex-1">
      <AuthLayout>
        <View className="flex-1 bg-background gap-5">
          <Text className="text-foreground text-2xl font-bold pt-5">Sign in</Text>
          <View className="py-5 w-full max-w-screen-md">
            <View className="gap-5">
              <FormInput
                id="email"
                control={control}
                name={'email'}
                label={'Email'}
                placeholder={'Email'}
              />
              <FormInput
                id="password"
                control={control}
                name={'password'}
                label={'Password'}
                placeholder={'Password'}
                rightIcon={
                  <Pressable
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="h-full w-14 items-center justify-center relative">
                    <View>
                      {!showPassword ? (
                        <Eye className="text-primary w-6 h-6" />
                      ) : (
                        <EyeOff className="text-primary w-6 h-6" />
                      )}
                    </View>
                  </Pressable>
                }
                secureTextEntry={!showPassword}
              />
              <View className="w-full gap-2">
                <Button onPress={handleSubmit(onSubmit)}>
                  <Text className="text-white font-bold text-center">Log In</Text>
                </Button>
              </View>
              <Text className="text-lg text-muted-foreground text-center">
                Don't have an account?{' '}
                <Link href={'/(main)/(drawer)/(tabs)/home'} className="text-primary">
                  Sign Up
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </AuthLayout>
    </ScrollView>
  );
}
