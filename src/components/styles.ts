import { StyleSheet } from 'react-native';

export const appButtonStyle = {
  border: 'border border-outline-300',
};

export const appIconStyle = {
  common: {
    size: 24,
  },
  button: {
    size: 20,
  },
  menu: {
    size: 18,
    style: {
      paddingRight: 16,
    },
  },
};

export const appModalStyle = StyleSheet.create({
  content: {
    maxWidth: `${90}%`,
    position: 'absolute',
    top: 120,
  },
});

export const appTextStyle = {
  header: 'text-md',
  subheader: 'text-sm font-light',
  text: 'text-md font-light',
  label: 'text-sm',
};

export const appResponsiveStyle = {
  layout: 'w-full sm:w-4/5 max-w-5xl',
  grid: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  gridItem: 'col-span-1',
  hStack: 'flex-col sm:flex-row',
  vStack: 'flex-row sm:flex-col',
  imageSquare: 'aspect-square flex-1 h-full w-full rounded-lg',
};

export const appContainerStyle = StyleSheet.create({
  centerAlignItems: {
    alignItems: 'center',
  },
  centerContent: {
    justifyContent: 'center',
  },
  spaceBetweenContent: {
    justifyContent: 'space-between',
  },
  flexContainer: {
    flex: 1,
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
