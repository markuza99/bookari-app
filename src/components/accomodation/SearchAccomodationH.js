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
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import { httpClient } from '../../http-client/HttpClient';

const SearchAccomodationH = ({ updateResultList }) => {
  const [location, setLocation] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const toast = useToast();

  function calculateDaysBetweenDates(dateString1, dateString2) {
    // Parse the date strings into Date objects
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    // Calculate the time difference in milliseconds
    const timeDifference = date2 - date1;

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const daysDifference = timeDifference / (24 * 60 * 60 * 1000);

    // Return the absolute value of the result to handle negative differences
    return Math.abs(daysDifference);
  }

  const handleSubmit = () => {
    if (!location || !startDate || !endDate) {
      toast({
        title: 'Wrong input!',
        description: 'Fill out all the fields!',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    httpClient
      .get('/api/accommodation/search', {
        params: { location, numOfGuests, startDate, endDate },
      })
      .then(res => {
        const days = calculateDaysBetweenDates(startDate, endDate);
        updateResultList(res.data, days, numOfGuests, startDate, endDate);
      });
  };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="4">
      <Input
        placeholder="Location"
        w="30%"
        value={location}
        onChange={e => {
          setLocation(e.target.value);
        }}
      />
      <Input
        type="date"
        placeholder="From"
        w="30%"
        onChange={e => {
          setStartDate(e.target.value);
        }}
        value={startDate}
      />
      <Input
        type="date"
        placeholder="To"
        w="30%"
        onChange={e => {
          setEndDate(e.target.value);
        }}
        value={endDate}
      />
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
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchAccomodationH;
