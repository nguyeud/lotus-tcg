import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetweenContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noSpacingContainer: {
    margin: 0,
    padding: 0,
  },
  fullWidthContainer: {
    width: `${100}%`,
  },
  largeWidthContainer: {
    width: `${80}%`,
  },
  smallWidthContainer: {
    width: `${90}%`,
  },
  buttonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
  },
  iconContainer: {
    gap: 18,
  },
  inputIconContainer: {
    paddingLeft: 12,
  },
});
