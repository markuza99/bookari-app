import {
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchAccomodationH = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="4">
      <Input placeholder="Location" w="30%" />
      <Input type="date" placeholder="From" w="30%" />
      <Input type="date" placeholder="To" w="30%" />
      <NumberInput min={1} max={10}>
        <NumberInputField placeholder="Number of guests" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        colorScheme="red"
        leftIcon={<Icon as={FiSearch} />}
        //   onClick={() => navigate('/register')}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchAccomodationH;
