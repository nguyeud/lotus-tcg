import React from 'react';

import { SlidersHorizontal } from './icons/SlidersHorizontal';
import { SearchBar } from './SearchBar';
import {
  appButtonStyle,
  appContainerStyle,
  appIconStyle,
  appModalStyle,
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
          ...appModalStyle.content,
          ...appContainerStyle.centerAlignItems,
          ...appContainerStyle.spaceBetweenContent,
        }}
      >
        <ModalBody
          id={`${componentId}-body`}
          style={{
            ...appContainerStyle.fullWidthContainer,
            ...appContainerStyle.noSpacingContainer,
          }}
        >
          <HStack
            id={`${componentId}-body-stack`}
            style={appContainerStyle.iconContainer}
          >
            <SearchBar />
            <Pressable
              id={`${componentId}-body-search-pressable`}
              style={appContainerStyle.buttonContainer}
              className={appButtonStyle.border}
            >
              <Icon
                as={() =>
                  SlidersHorizontal({ width: appIconStyle.button.size })
                }
              />
            </Pressable>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
