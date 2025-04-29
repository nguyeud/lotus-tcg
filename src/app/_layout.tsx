import 'react-native-reanimated';
import './global.css';

import {
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
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Fab, FabIcon } from '@/components/ui/fab';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { MoonIcon, SunIcon } from '@/components/ui/icon';

let defaultTheme: 'dark' | 'light' = 'light';

type ThemeContextType = {
  colorMode?: 'dark' | 'light';
  toggleColorMode?: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: 'light',
  toggleColorMode: () => {},
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const [colorMode, setColorMode] = React.useState<'dark' | 'light'>(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode={colorMode}>
        <ThemeProvider value={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={toggleColorMode}
          >
            <FabIcon as={colorMode === 'light' ? MoonIcon : SunIcon} />
          </Fab>
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
