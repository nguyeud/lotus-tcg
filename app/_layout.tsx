import "@/global.css";

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { NotoSerifDisplay_400Regular, NotoSerifDisplay_500Medium, NotoSerifDisplay_600SemiBold, NotoSerifDisplay_700Bold, NotoSerifDisplay_800ExtraBold } from "@expo-google-fonts/noto-serif-display";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Appearance, Platform } from "react-native";
import { ThemeColor } from "@/lib/theme";
import { useColorScheme } from "@/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: ThemeColor.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: ThemeColor.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const usePlatformSpecificSetup = Platform.select({
  web: useSetWebBackgroundClassName,
  android: useSetAndroidNavigationBar,
  default: noop,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  usePlatformSpecificSetup();
  const { isDarkColorScheme } = useColorScheme();

  const [loaded, error] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    NotoSerifDisplay_400Regular,
    NotoSerifDisplay_500Medium,
    NotoSerifDisplay_600SemiBold,
    NotoSerifDisplay_700Bold,
    NotoSerifDisplay_800ExtraBold,
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? React.useEffect
    : React.useLayoutEffect;

function useSetWebBackgroundClassName() {
  useIsomorphicLayoutEffect(() => {
    // Adds the background color to the html element to prevent white background on overscroll.
    document.documentElement.classList.add("bg-background");
  }, []);
}

function useSetAndroidNavigationBar() {
  React.useLayoutEffect(() => {
    setAndroidNavigationBar(Appearance.getColorScheme() ?? "light");
  }, []);
}

function noop() {}
