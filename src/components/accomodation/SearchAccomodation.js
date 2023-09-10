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
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchAccomodation = () => {
  const [location, setLocation] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <VStack spacing={4} align="stretch">
      <Input
        placeholder="Location"
        value={location}
        onChange={e => {
          setLocation(e.target.value);
        }}
      />
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Input
          type="date"
          placeholder="From"
          onChange={e => {
            setStartDate(e.target.value);
          }}
          value={startDate}
        />
        <Input
          type="date"
          placeholder="To"
          onChange={e => {
            setEndDate(e.target.value);
          }}
          value={endDate}
        />
      </Flex>
      <NumberInput
        min={1}
        max={10}
        placeholder="Number of guests"
        value={numOfGuests}
        onChange={e => {
          setNumOfGuests(parseInt(e));
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        colorScheme="red"
        leftIcon={<Icon as={FiSearch} />}
        // onClick={() => navigate('/register')}
      >
        Search
      </Button>
    </VStack>
  );
};

export default SearchAccomodation;
