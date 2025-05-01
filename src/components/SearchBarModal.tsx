import React from 'react';
import { StyleSheet } from 'react-native';

import { SearchBar } from './SearchBar';
import { Center } from './ui/center';
import { HStack } from './ui/hstack';
import { Modal, ModalBackdrop, ModalBody, ModalContent } from './ui/modal';

interface SearchBarModalProps {
  readonly showModal: boolean;
  readonly closeModal: () => void;
}

export const SearchBarModal = ({ ...props }: SearchBarModalProps) => {
  return (
    <Modal
      isOpen={props.showModal}
      onClose={() => {
        props.closeModal();
      }}
    >
      <ModalBackdrop />
      <ModalContent size="full" style={styles.modalContentContainer}>
        <ModalBody className="m-0 p-0">
          <HStack>
            <SearchBar />
            <Center />
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
  },
});
