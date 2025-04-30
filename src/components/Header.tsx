import { CircleUserRound, Search, ShoppingBag } from 'lucide-react-native';
import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Image } from './ui/image';
import { Input, InputField } from './ui/input';
import { Link } from './ui/link';
import { Pressable } from './ui/pressable';
import { VStack } from './ui/vstack';

// Set search bar visibility
let defaultSearchBarVisibility: '' | 'hidden' = 'hidden';

type SearchBarVisibilityContextType = {
  searchBarVisibility: '' | 'hidden';
  toggleSearchBarVisibility: () => void;
};

export const SearchBarVisibilityContext =
  createContext<SearchBarVisibilityContextType>({
    searchBarVisibility: 'hidden',
    toggleSearchBarVisibility: () => {},
  });

export const HeaderLogo = () => {
  return (
    <Link>
      <Image
        source={require('@/assets/images/lotus-tcg-logo.png')}
        className="size-14"
        alt="logo"
      />
    </Link>
  );
};

export const Header = () => {
  const [searchBarVisibility, setSearchBarVisibility] = useState<'' | 'hidden'>(
    defaultSearchBarVisibility
  );

  const toggleSearchBarVisibility = async () => {
    setSearchBarVisibility((prev) => (prev === '' ? 'hidden' : ''));
  };

  return (
    <>
      <VStack style={styles.headerContainer} className="gap-4">
        <HStack style={styles.headerStack}>
          <HStack>
            <Pressable onPress={toggleSearchBarVisibility}>
              <Icon as={Search} size="xl" />
            </Pressable>
          </HStack>
          <HStack>
            <HeaderLogo />
          </HStack>
          <HStack style={styles.headerIconStack}>
            <Link>
              <Icon as={CircleUserRound} size="xl" />
            </Link>
            <Link>
              <Icon as={ShoppingBag} size="xl" />
            </Link>
          </HStack>
        </HStack>
        <Box
          style={
            '' === searchBarVisibility
              ? styles.hiddenStack
              : styles.searchBarStack
          }
        >
          <Input size="md">
            <InputField
              type="text"
              placeholder="Search..."
              onFocus={() => {}}
              onBlur={() => {}}
            />
          </Input>
        </Box>
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  hiddenStack: {
    display: 'none',
  },
  headerContainer: {
    paddingTop: 20,
    paddingRight: 36,
    paddingBottom: 20,
    paddingLeft: 36,
    width: `${100}%`,
    minHeight: 20,
  },
  headerStack: {
    width: `${100}%`,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
  },
  headerIconStack: {
    gap: 24,
  },
  searchBarStack: {
    paddingBottom: 8,
    width: `${100}%`,
  },
});
