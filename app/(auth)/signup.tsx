import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Button } from '~/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import AuthLayout from '~/appcomponents/auth/authLayout';
import FormInput from '~/appcomponents/forms/formInput';
import FormInputSelect from '~/appcomponents/forms/formInputSelect';
import { Eye, EyeOff } from '~/components/Icons';

const data = [
  {
    value: 'Admin',
  },
  {
    value: 'User',
  },
  {
    value: 'Staff',
  },
];

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  description: z.string(),
  role: z
    .string()
    .or(z.object({ value: z.string() }))
    .transform((val) => {
      // If the value is an object, extract the 'value' property
      if (typeof val === 'object' && val !== null) {
        return val.value || '';
      }
      // Otherwise, return the value as is
      return val;
    })
    .default(data[1].value),
});

type SignupFormValues = z.infer<typeof formSchema>;

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues: Partial<SignupFormValues> = {
    username: undefined,
    email: undefined,
    password: undefined,
    description: undefined,
    role: undefined,
  };

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: Partial<SignupFormValues>) => {
    console.log(data);
  };

  return (
    <ScrollView className="bg-background">
      <AuthLayout>
        <View className="flex-1 bg-background gap-5">
          <Text className="text-foreground text-2xl font-bold pt-5">Sign up</Text>
          <View className="py-5 w-full max-w-screen-md">
            <View className="gap-5">
              <FormInput
                id="username"
                control={control}
                name={'username'}
                label={'Username'}
                placeholder={'Username'}
              />
              <FormInput
                id="email"
                control={control}
                name={'email'}
                label={'Email'}
                placeholder={'Email'}
              />

              <FormInputSelect
                id="role"
                control={control}
                name={'role'}
                label={'Role'}
                placeholder={'Select Role'}
                data={data}
                defaultValue={data[1].value}
              />

              <FormInput
                id="description"
                control={control}
                name={'description'}
                label={'Description'}
                placeholder={'Description'}
                multiline={true}
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
                <Button onPress={handleSubmit(onSubmit)} className="">
                  <Text className="text-white font-bold text-center">Sign Up</Text>
                </Button>
              </View>
              <Text className="text-lg text-muted-foreground text-center">
                Already have an account?{' '}
                <Link href={'/(auth)/signin'} className="text-primary">
                  Sign In
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </AuthLayout>
    </ScrollView>
  );
}
