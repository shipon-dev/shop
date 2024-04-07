import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Text } from "~/components/ui/text";

export default function ThemeMood() {
  const [open, setOpen] = React.useState(false);

  return (
    <View>
      <DropdownMenu
        open={open}
        onOpenChange={(newVal) => {
          setOpen(newVal);
        }}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Text>Open</Text>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 native:w-72">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            nulla maxime architecto odio ad unde doloribus necessitatibus ab
            eius illo?
          </Text>
        </DropdownMenuContent>
      </DropdownMenu>
    </View>
  );
}
