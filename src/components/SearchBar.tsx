import React, { useState } from 'react';

import { Search } from './icons/Search';
import { Input, InputField, InputIcon, InputSlot } from './ui/input';
import { commonStyles } from './ui/styles';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <Input id="search-bar-container" className="flex-1">
      <InputSlot
        id="search-bar-container-icon"
        style={commonStyles.inputIconContainer}
      >
        <InputIcon as={() => Search({ width: 20 })} />
      </InputSlot>
      <InputField
        id="search-bar-container-input"
        type="text"
        placeholder="Search..."
        onChangeText={(input) => {
          setSearchInput(input);
        }}
        onKeyPress={(input) => {
          if (input.key === 'Enter') {
            console.log(searchInput);
          }
        }}
        selectTextOnFocus={true}
      />
    </Input>
  );
};
