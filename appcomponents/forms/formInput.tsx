import React, { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { cn } from '~/lib/utils';

const FormInput = ({
  control,
  name,
  label,
  id,
  placeholder,
  readOnly = false,
  maxLength,
  ref,
  className,
  secureTextEntry,
  leftIcon,
  rightIcon,
}: {
  control: any;
  name: string;
  label?: string;
  id: string;
  placeholder: string;
  readOnly?: boolean;
  maxLength?: number;
  ref?: any;
  className?: string;
  secureTextEntry?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="w-full gap-2">
          {label && <Label nativeID={id}>{label}</Label>}
          <View
            className={cn(
              'relative flex-row w-full border border-input rounded-md h-10 native:h-12 overflow-hidden',
              className
            )}>
            {leftIcon && leftIcon}
            <Input
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              readOnly={readOnly}
              maxLength={maxLength}
              nativeID={id}
              ref={ref}
              className={cn('border-none flex-1')}
              secureTextEntry={secureTextEntry}
            />
            {rightIcon && rightIcon}
          </View>
          {error && <Text className="text-destructive">{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default FormInput;
