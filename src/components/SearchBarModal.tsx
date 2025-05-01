import React from 'react';
import { StyleSheet } from 'react-native';

import { SlidersHorizontal } from './icons/SlidersHorizontal';
import { SearchBar } from './SearchBar';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Modal, ModalBackdrop, ModalBody, ModalContent } from './ui/modal';
import { Pressable } from './ui/pressable';
import { commonStyles } from './ui/styles';

interface SearchBarModalProps {
  readonly showModal: boolean;
  readonly closeModal: () => void;
}

export const SearchBarModal = ({ ...props }: SearchBarModalProps) => {
  return (
    <Modal
      id="search-bar-modal"
      isOpen={props.showModal}
      onClose={() => {
        props.closeModal();
      }}
    >
      <ModalBackdrop id="search-bar-modal-backdrop" />
      <ModalContent
        id="search-bar-modal-content"
        size="full"
        style={{
          ...styles.modalContentContainer,
          ...commonStyles.centerContent,
        }}
      >
        <ModalBody
          id="search-bar-modal-body"
          style={{
            ...commonStyles.fullWidthContainer,
            ...commonStyles.noSpacingContainer,
          }}
        >
          <HStack
            id="search-bar-modal-body-stack"
            style={commonStyles.iconContainer}
          >
            <SearchBar />
            <Pressable
              id="search-bar-modal-body-search-pressable"
              style={commonStyles.buttonContainer}
              className="border-outline-300"
            >
              <Icon as={() => SlidersHorizontal({ width: 20 })} />
            </Pressable>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    position: 'absolute',
    top: 120,
    maxWidth: `${90}%`,
    justifyContent: 'space-between',
  },
});
