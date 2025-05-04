import React from 'react';

import { SlidersHorizontal } from './icons/SlidersHorizontal';
import { SearchBar } from './SearchBar';
import {
  buttonStyle,
  containerStyleSheet,
  iconStyle,
  modalStyle,
} from './styles';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';
import { Modal, ModalBackdrop, ModalBody, ModalContent } from './ui/modal';
import { Pressable } from './ui/pressable';

interface SearchBarModalProps {
  readonly showModal: boolean;
  readonly closeModal: () => void;
}

export const SearchBarModal = ({ ...props }: SearchBarModalProps) => {
  const componentId = 'search-bar-modal';

  return (
    <Modal
      id={componentId}
      isOpen={props.showModal}
      onClose={() => {
        props.closeModal();
      }}
    >
      <ModalBackdrop id={`${componentId}-backdrop`} />
      <ModalContent
        id={`${componentId}-content`}
        size="full"
        style={{
          ...modalStyle.content,
          ...containerStyleSheet.centerAlignItems,
          ...containerStyleSheet.spaceBetweenContent,
        }}
      >
        <ModalBody
          id={`${componentId}-body`}
          style={{
            ...containerStyleSheet.fullWidthContainer,
            ...containerStyleSheet.noSpacingContainer,
          }}
        >
          <HStack
            id={`${componentId}-body-stack`}
            style={containerStyleSheet.iconContainer}
          >
            <SearchBar />
            <Pressable
              id={`${componentId}-body-search-pressable`}
              style={containerStyleSheet.buttonContainer}
              className={buttonStyle.border}
            >
              <Icon
                as={() => SlidersHorizontal({ width: iconStyle.button.size })}
              />
            </Pressable>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
