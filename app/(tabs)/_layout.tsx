import { ThemeToggle } from "@/components/ThemeToggle";
import { Flower } from "@/lib/icons/Flower";
import { House } from "@/lib/icons/House";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect.
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => {
            return (
              <House className="text-foreground" size={20} strokeWidth={1.5} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: () => {
            return (
              <Flower className="text-foreground" size={20} strokeWidth={1.5} />
            );
          },
        }}
      />
    </Tabs>
  );
}
