import {
  Button,
  Flex,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchAccomodation = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Location" />
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Input type="date" placeholder="From" />
        <Input type="date" placeholder="To" />
      </Flex>
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
    </VStack>
  );
};

export default SearchAccomodation;
