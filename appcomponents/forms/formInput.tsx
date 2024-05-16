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
  multiline,
  defaultValue,
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
  multiline?: boolean;
  defaultValue?: string;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="w-full gap-2">
          {label && (
            <Label className="font-semibold text-foreground" nativeID={id}>
              {label}
            </Label>
          )}
          <View
            className={cn(
              'relative flex-row w-full border border-input rounded-md h-10 native:h-12 overflow-hidden',
              className,
              multiline && 'min-h-28 h-28 native:h-28'
            )}>
            {leftIcon && leftIcon}
            <Input
              aria-labelledby={id}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              readOnly={readOnly}
              maxLength={maxLength}
              nativeID={id}
              ref={ref}
              className={cn(
                'border-none border-0 flex-1 web:focus-visible:ring-0',
                multiline && 'min-h-28 h-28 native:h-28',
                readOnly && 'bg-muted text-foreground/50'
              )}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
              defaultValue={defaultValue}
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
