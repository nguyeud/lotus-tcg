import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  centerAlignItems: {
    alignItems: 'center',
  },
  centerContent: {
    justifyContent: 'center',
  },
  spaceBetweenContent: {
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
    borderRadius: 4,
  },
  iconContainer: {
    gap: 18,
  },
  inputIconContainer: {
    paddingLeft: 12,
  },
  gridContainer: {
    padding: 12,
    columnGap: 12,
    rowGap: 12,
  },
  cardContainer: {
    padding: 4,
    gap: 4,
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
});
