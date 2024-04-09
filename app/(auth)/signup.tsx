import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';

import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOff } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormInput from '~/appcomponents/forms/formInput';
import { Eye } from '~/components/Icons';
import { Link } from 'expo-router';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormValues = z.infer<typeof formSchema>;

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues: Partial<SignupFormValues> = {
    email: undefined,
    password: undefined,
  };

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: Partial<SignupFormValues>) => {
    console.log(data);
  };

  return (
    <View className="flex-1 bg-primary items-center justify-center px-5">
      <Card className="p-5 w-full max-w-screen-md">
        <View className="gap-5">
          <FormInput
            id="email"
            control={control}
            name={'email'}
            label={'Email'}
            placeholder={'Email'}
          />
          <FormInput
            id="email"
            control={control}
            name={'email'}
            label={'Email'}
            placeholder={'Email'}
            readOnly={true}
          />
          <FormInput
            id="message"
            control={control}
            name={'message'}
            label={'Message'}
            placeholder={'Message'}
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
                className="bg-muted h-full w-14 items-center justify-center relative">
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
              <Text className="text-white font-bold text-center">Submit</Text>
            </Button>
          </View>
          <Text className="text-lg text-muted-foreground">
            Already have an account?{' '}
            <Link href={'/(auth)/signin'} className="text-primary">
              Sign In
            </Link>
          </Text>
        </View>
      </Card>
    </View>
  );
}
