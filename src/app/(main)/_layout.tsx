import 'react-native-reanimated';

import { Tabs } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components/Header';
import { NavigationMenu } from '@/components/NavigationMenu';
import { useTheme } from '@/components/ThemeProvider';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function MainLayout() {
  console.log('====> MainLayout');

  const { theme } = useTheme();

  return (
    <GluestackUIProvider mode={theme}>
      <SafeAreaView>
        <Header />
        <NavigationMenu />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

// export default function MainDrawerLayout() {
//   console.log('====> MainLayout');

//   const { theme } = useTheme();

  // return (
  //   <GluestackUIProvider mode={theme}>
  //     <SafeAreaView>
  //       <Header />
//         <Drawer>
//           <Drawer.Screen
//             name="index"
//             options={{
//               drawerLabel: 'Home',
//               title: 'Home',
//             }}
//           />
//           <Drawer.Screen
//             name="inventory"
//             options={{
//               drawerLabel: 'Inventory',
//               title: 'Inventory',
//             }}
//           />
//         </Drawer>
//         <NavigationMenu />
//       </SafeAreaView>
//       <NavigationMenu />
//     </GluestackUIProvider>
//   );
// }

// export default function MainTabLayout() {
//   console.log('====> MainLayout');

//   const { theme } = useTheme();

//   return (
//     <GluestackUIProvider mode={theme}>
//       <SafeAreaView>
//         <Header />
//         <Tabs
//           screenOptions={{
//             headerShown: false,
//             // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//             // tabBarButton: HapticTab,
//             // tabBarBackground: TabBarBackground,
//             // tabBarStyle: Platform.select({
//             //   ios: {
//             //     // Use a transparent background on iOS to show the blur effect
//             //     position: 'absolute',
//             //   },
//             //   default: {},
//             // }),
//           }}
//         >
//           <Tabs.Screen
//             name="index"
//             options={{
//               title: 'Home',
//               tabBarIcon: ({ color }) => (
//                 <IconSymbol size={28} name="house.fill" color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="inventory"
//             options={{
//               title: 'Inventory',
//               tabBarIcon: ({ color }) => (
//                 <IconSymbol size={28} name="paperplane.fill" color={color} />
//               ),
//             }}
//           />
//         </Tabs>
//         <NavigationMenu />
//       </SafeAreaView>
//       <NavigationMenu />
//     </GluestackUIProvider>
//   );
// }
