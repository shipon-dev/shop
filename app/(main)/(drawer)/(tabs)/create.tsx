import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import FormInput from '~/appcomponents/forms/formInput';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '~/components/ui/button';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
});

type CreateFormValues = z.infer<typeof formSchema>;

const Create = () => {
  const defaultValues: Partial<CreateFormValues> = {
    username: undefined,
  };

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: Partial<CreateFormValues>) => {
    console.log(data);
  };

  return (
    <ScrollView className="bg-background">
      <View className="p-5">
        <Text className="font-semibold text-2xl text-foreground">Upload Video</Text>
      </View>
      <View className="p-5 gap-5">
        <FormInput
          id="videoTitle"
          control={control}
          name={'videoTitle'}
          label={'Video Title'}
          placeholder={'Give your video a catchy title...'}
        />
        <FormInput id="username" control={control} name={'uploadVideo'} label={'Upload Video'} />
        <FormInput
          id="thumbnailImage"
          control={control}
          name={'thumbnailImage'}
          label={'Thumbnail Image'}
        />
        <FormInput
          id="aiPrompt"
          control={control}
          name={'aiPrompt'}
          label={'AI Prompt'}
          placeholder={'The AI prompt of your video....'}
        />

        <View className="w-full gap-2">
          <Button onPress={handleSubmit(onSubmit)} className="">
            <Text className="text-white font-bold text-center">Submit & Publish</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Create;
