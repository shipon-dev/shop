import { StatusBar } from "expo-status-bar";
import { View, ViewProps } from "react-native";
import useMultipleColor from "~/lib/hooks/useMultipleColor";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";
import { Themes } from "~/themes/theme-config";

type ThemeProps = ViewProps;

export function ThemeProvider(props: ThemeProps) {
  const { isDarkColorScheme } = useColorScheme();
  const { themeColor } = useMultipleColor();

  const currentTheme = Themes.find((theme) => theme.name === themeColor)
    ?.cssVars[isDarkColorScheme ? "dark" : "light"];
  return (
    <View
      style={currentTheme}
      className={cn("flex-1 bg-background", props.className)}>
      <StatusBar />
      {props.children}
    </View>
  );
}
