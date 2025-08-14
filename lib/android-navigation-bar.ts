import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { ThemeColor } from "@/lib/theme";

export async function setAndroidNavigationBar(theme: "light" | "dark") {
  if (Platform.OS !== "android") return;
  await NavigationBar.setButtonStyleAsync(theme === "dark" ? "light" : "dark");
  await NavigationBar.setBackgroundColorAsync(
    theme === "dark" ? ThemeColor.dark.background : ThemeColor.light.background,
  );
}
