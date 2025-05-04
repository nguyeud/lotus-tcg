import 'react-native-reanimated';
import './global.css';

import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Header } from '@/components/Header';
import { NavigationMenu } from '@/components/NavigationMenu';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

// Set theme
let defaultTheme: 'dark' | 'light' = 'light';

export type ThemeContextType = {
  colorMode?: 'dark' | 'light';
  toggleColorMode?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorMode: 'light',
  toggleColorMode: () => {},
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>(defaultTheme);
  const colorModeRef = useRef(colorMode);

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    colorModeRef.current = colorMode;
  };

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode={colorModeRef.current}>
        <ThemeProvider
          value={colorModeRef.current === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Header />
          <NavigationMenu
            colorMode={colorModeRef.current}
            toggleColorMode={toggleColorMode}
          />
          <Stack>
            {/* Tabs using the Expo router */}
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
