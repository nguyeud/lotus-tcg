import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HeaderLogo } from './HeaderLogo';
import { CircleUserRound } from './icons/CircleUserRound';
import { Search } from './icons/Search';
import { SearchBarModal } from './SearchBarModal';
import { commonStyles } from './styles';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Link } from './ui/link';
import { Pressable } from './ui/pressable';

export const Header = () => {
  const responsiveContainerStyle = 'w-full sm:w-4/5 max-w-5xl';
  const iconSize = 24;

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
        ...commonStyles.centerAlignItems,
        ...commonStyles.centerContent,
      }}
    >
      <HStack
        id="header-container-stack"
        style={{
          ...styles.container,
          ...commonStyles.centerAlignItems,
          ...commonStyles.spaceBetweenContent,
        }}
        className={responsiveContainerStyle}
      >
        <HStack id="header-container-left-stack">
          <Pressable
            id="header-container-search-pressable"
            onPress={() => {
              setShowSearchBarModal(true);
            }}
          >
            <Icon as={() => Search({ width: iconSize })} />
          </Pressable>
        </HStack>
        <HStack id="header-container-middle-stack">
          <HeaderLogo />
        </HStack>
        <HStack
          id="header-container-right-stack"
          style={commonStyles.iconContainer}
        >
          <Link id="header-container-account-link">
            <Icon as={() => CircleUserRound({ width: iconSize })} />
          </Link>
          {/* <Link id="header-container-cart-link">
            <Icon as={() => ShoppingBag({ width: iconSize })} />
          </Link> */}
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
    paddingTop: 14,
    paddingRight: 24,
    paddingBottom: 14,
    paddingLeft: 24,
  },
});
