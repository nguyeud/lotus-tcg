import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "nativewind";
import { ThemeColorScheme } from "@/components/ThemeToggle";

export default function ContactTab() {
  const { colorScheme } = useColorScheme();

  const logo = (colorScheme: ThemeColorScheme) => {
    if (colorScheme === "dark") {
      return (
        <AvatarImage
          style={style.logo}
          source={require("../../assets/images/logo-dark.png")}
        />
      );
    }
    return (
      <AvatarImage
        style={style.logo}
        source={require("../../assets/images/logo.png")}
      />
    );
  };

  return (
    <View style={style.container} className="gap-4 p-6">
      <Card className="w-full max-w-md p-6 rounded-lg">
        <CardHeader style={style.container}>
          <Avatar alt="Logo of the Lotus x TCG app" className="w-24 h-24">
            {logo(colorScheme)}
            <AvatarFallback>
              <Text>Logo</Text>
            </AvatarFallback>
          </Avatar>
        </CardHeader>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 24,
    height: 24,
  },
});
