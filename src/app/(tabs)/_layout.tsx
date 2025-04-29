import { Drawer } from 'expo-router/drawer';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';

import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { HapticTab } from '@/components/HapticTab';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const navigationStyle = 'drawer';
  if ('drawer' === navigationStyle) {
    return (
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Explore',
            title: 'Explore',
          }}
        />
      </Drawer>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
