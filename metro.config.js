/* eslint-env node */
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(wrapWithReanimatedMetroConfig(config), {
  input: './src/app/global.css',
});
