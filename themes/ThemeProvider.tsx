import { View, ViewProps } from 'react-native';
import { Theme, cn } from '~/lib/utils';

type ThemeProps = ViewProps;

export function ThemeProvider(props: ThemeProps) {
  const { primaryTheme } = Theme();

  return (
    <View style={primaryTheme} className={cn('flex-1 bg-background', props.className)}>
      {props.children}
    </View>
  );
}
