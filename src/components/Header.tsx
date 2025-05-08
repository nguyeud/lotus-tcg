import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HeaderLogo } from './HeaderLogo';
import { Search } from './icons/Search';
import { ShoppingBag } from './icons/ShoppingBag';
import { SearchBarModal } from './SearchBarModal';
import { appContainerStyle, appIconStyle, appResponsiveStyle } from './styles';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Link } from './ui/link';
import { Pressable } from './ui/pressable';

export const Header = () => {
  const componentId = 'header-container';

  const [showSearchBarModal, setShowSearchBarModal] = useState<true | false>(
    false
  );

  const closeSearchBarModal = () => {
    setShowSearchBarModal(false);
  };

  return (
    <Box
      id={componentId}
      style={{
        ...appContainerStyle.centerAlignItems,
        ...appContainerStyle.centerContent,
      }}
    >
      <HStack
        id={`${componentId}-main-stack`}
        style={{
          ...styles.container,
          ...appContainerStyle.centerAlignItems,
          ...appContainerStyle.spaceBetweenContent,
        }}
        className={appResponsiveStyle.layout}
      >
        <HStack id={`${componentId}-left-stack`}>
          <Pressable
            id={`${componentId}-search-pressable`}
            onPress={() => {
              setShowSearchBarModal(true);
            }}
          >
            <Icon as={() => Search({ width: appIconStyle.common.size })} />
          </Pressable>
        </HStack>
        <HStack id={`${componentId}-middle-stack`}>
          <HeaderLogo />
        </HStack>
        <HStack
          id={`${componentId}-right-stack`}
          style={appContainerStyle.iconContainer}
        >
          <Link id={`${componentId}-cart-link`}>
            <Icon as={() => ShoppingBag({ width: appIconStyle.common.size })} />
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
    paddingTop: 14,
    paddingRight: 24,
    paddingBottom: 14,
    paddingLeft: 24,
  },
});
