import React, { useState } from 'react';

import { Search } from './icons/Search';
import { appContainerStyle, appIconStyle } from './styles';
import { Input, InputField, InputIcon, InputSlot } from './ui/input';

export const SearchBar = () => {
  const componentId = 'search-bar-container';

  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <Input id={componentId} style={appContainerStyle.flexContainer}>
      <InputSlot
        id={`${componentId}-input-slot`}
        style={appContainerStyle.inputIconContainer}
      >
        <InputIcon as={() => Search({ width: appIconStyle.button.size })} />
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
