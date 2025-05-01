import { CircleUserRound, Search, ShoppingBag } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { SearchBarModal } from './SearchBarModal';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Image } from './ui/image';
import { Link } from './ui/link';
import { Pressable } from './ui/pressable';
import { VStack } from './ui/vstack';

export const HeaderLogo = () => {
  const assetFile = '@/assets/images/lotus-tcg-logo.png';

  return (
    <Pressable>
      <Image
        source={require(assetFile)}
        alt="Lotus TCG logo"
        className="h-12 w-16"
      />
    </Pressable>
  );
};

export const Header = () => {
  const [showSearchBarModal, setShowSearchBarModal] = useState<true | false>(
    false
  );

  const closeSearchBarModal = () => {
    setShowSearchBarModal(false);
  };

  return (
    <>
      <VStack style={styles.container}>
        <HStack style={styles.headerContainer}>
          <HStack>
            <Pressable
              onPress={() => {
                setShowSearchBarModal(true);
              }}
            >
              <Icon size="xl" as={Search} />
            </Pressable>
          </HStack>
          <HStack>
            <HeaderLogo />
          </HStack>
          <HStack style={styles.iconContainer}>
            <Link>
              <Icon size="xl" as={CircleUserRound} />
            </Link>
            <Link>
              <Icon size="xl" as={ShoppingBag} />
            </Link>
          </HStack>
        </HStack>
      </VStack>
      <SearchBarModal
        showModal={showSearchBarModal}
        closeModal={closeSearchBarModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 36,
    paddingBottom: 20,
    paddingLeft: 36,
    width: `${100}%`,
  },
  headerContainer: {
    width: `${100}%`,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    gap: 24,
  },
});
