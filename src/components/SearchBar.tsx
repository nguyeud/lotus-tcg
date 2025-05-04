import React, { useState } from 'react';

import { Search } from './icons/Search';
import { containerStyleSheet, iconStyle } from './styles';
import { Input, InputField, InputIcon, InputSlot } from './ui/input';

export const SearchBar = () => {
  const componentId = 'search-bar-container';

  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <Input id={componentId} style={containerStyleSheet.flexContainer}>
      <InputSlot
        id={`${componentId}-input-slot`}
        style={containerStyleSheet.inputIconContainer}
      >
        <InputIcon as={() => Search({ width: iconStyle.button.size })} />
      </InputSlot>
      <InputField
        id={`${componentId}-input-field`}
        type="text"
        placeholder="Search..."
        onChangeText={(input) => {
          setSearchInput(input);
        }}
        onKeyPress={(input) => {
          if (input.key === 'Enter') {
            console.log('Search input:', searchInput);
          }
        }}
        selectTextOnFocus={true}
      />
    </Input>
  );
};
