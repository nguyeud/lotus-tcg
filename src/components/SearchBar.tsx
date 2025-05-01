import { Search } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from './ui/box';
import { Input, InputField, InputIcon, InputSlot } from './ui/input';

export const SearchBar = () => {
  return (
    <Box style={styles.container}>
      <Input size="md">
        <InputSlot style={styles.inputContainer}>
          <InputIcon as={Search} />
        </InputSlot>
        <InputField
          type="text"
          placeholder="Search..."
          autoFocus={true}
          selectTextOnFocus={true}
        />
      </Input>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: `${100}%`,
  },
  inputContainer: {
    paddingLeft: 12,
  },
});
