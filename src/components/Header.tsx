import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HeaderLogo } from './HeaderLogo';
import { CircleUserRound } from './icons/CircleUserRound';
import { Search } from './icons/Search';
import { ShoppingBag } from './icons/ShoppingBag';
import { SearchBarModal } from './SearchBarModal';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Link } from './ui/link';
import { Pressable } from './ui/pressable';
import { commonStyles } from './ui/styles';

export const Header = () => {
  const [showSearchBarModal, setShowSearchBarModal] = useState<true | false>(
    false
  );

  const closeSearchBarModal = () => {
    setShowSearchBarModal(false);
  };

  return (
    <Box
      id="header-container"
      style={{
        // ...commonStyles.fullWidthContainer,
        ...commonStyles.centerContent,
      }}
      className="md:4/5 w-full"
    >
      <HStack
        id="header-container-stack"
        style={{
          ...styles.container,
          ...commonStyles.spaceBetweenContent,
        }}
        className="w-full"
      >
        <HStack id="header-container-left-stack">
          <Pressable
            id="header-container-search-pressable"
            onPress={() => {
              setShowSearchBarModal(true);
            }}
          >
            <Icon as={() => Search({ width: 24 })} />
          </Pressable>
        </HStack>
        <HStack>
          <HeaderLogo />
        </HStack>
        <HStack
          id="header-container-right-stack"
          style={commonStyles.iconContainer}
        >
          <Link id="header-container-account-link">
            <Icon as={() => CircleUserRound({ width: 24 })} />
          </Link>
          <Link id="header-container-cart-link">
            <Icon as={() => ShoppingBag({ width: 24 })} />
          </Link>
        </HStack>
      </HStack>
      <SearchBarModal
        showModal={showSearchBarModal}
        closeModal={closeSearchBarModal}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 20,
    paddingLeft: 24,
  },
});
