import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { cn } from '~/lib/utils';

const FormInputSelect = ({
  data,
  control,
  name,
  label,
  id,
  defaultValue,
  placeholder,
  disabled,
}: {
  data: any[];
  control: any;
  name: string;
  label?: string;
  id: string;
  defaultValue?: any;
  placeholder: string;
  disabled?: boolean;
}) => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
  };

  const [triggerWidth, setTriggerWidth] = useState(0);

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setTriggerWidth(width);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        console.log;
        return (
          <View className="w-full gap-2">
            {label && <Label nativeID={id}>{label}</Label>}
            <Select
              aria-labelledby={id}
              defaultValue={{ value: defaultValue, label: defaultValue }}
              onValueChange={onChange}
              className={cn(disabled && 'opacity-50 pointer-events-none')}>
              <SelectTrigger className="w-full" onLayout={onLayout}>
                <SelectValue
                  className="text-foreground text-sm native:text-lg"
                  placeholder={placeholder}
                />
              </SelectTrigger>

              <SelectContent
                insets={contentInsets}
                style={{
                  width: triggerWidth,
                }}>
                <ScrollView>
                  <SelectGroup>
                    {data?.map((item, i) => {
                      return (
                        <SelectItem
                          key={i}
                          label={item?.value}
                          value={item?.value}
                          disabled={item?.disabled || false}>
                          {item?.value}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </ScrollView>
              </SelectContent>
            </Select>
            {error && <Text className="text-destructive">{error.message}</Text>}
          </View>
        );
      }}
    />
  );
};

export default FormInputSelect;
