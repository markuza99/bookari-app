import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  StackDivider,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
  useToast,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import ReviewTable from '../review/ReviewTable';
import { httpClient } from '../../http-client/HttpClient';

const DetailViewAccomodation = ({
  accomodationId,
  price,
  pricePerGuest,
  pricePerDay,
  days,
  startDate,
  endDate,
  guests,
}) => {
  const toast = useToast();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    httpClient
      .get(`/api/accommodation/${accomodationId}`)
      .then(res => {
        setAccommodation(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleReserve = () => {
    httpClient
      .post('/api/accommodation/booking', {
        startDate: startDate,
        endDate: endDate,
        userId: localStorage.getItem('userId'),
        numOfGuests: guests,
        accomodationId: accomodationId,
      })
      .then(res => {
        console.log(res.data);

        toast({
          title: 'Success',
          description: 'Successfully created booking request',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      });
  };

  return (
    accommodation && (
      <VStack
        display="flex"
        flexDirection="column"
        minHeight="100%"
        h="100vh"
        spacing={3}
      >
        <Text>Name: {accommodation.name}</Text>
        <Text>Location: {accommodation.location}</Text>
        <Table variant="simple" w="80%">
          <Tbody>
            <Tr>
              <Td>
                <Checkbox
                  isChecked={accommodation.utilities.includes('WIFI')}
                  name="WIFI"
                >
                  Wifi
                </Checkbox>
              </Td>
              <Td>
                <Checkbox
                  isChecked={accommodation.utilities.includes('PARKING')}
                  name="PARKING"
                >
                  Parking
                </Checkbox>
              </Td>
              <Td>
                <Checkbox
                  w="100%"
                  isChecked={accommodation.utilities.includes('MINIBAR')}
                  name="MINIBAR"
                >
                  Minibar
                </Checkbox>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox
                  w="100%"
                  isChecked={accommodation.utilities.includes('KITCHEN')}
                  name="KITCHEN"
                >
                  Kitchen
                </Checkbox>
              </Td>
              <Td>
                <Checkbox
                  w="100%"
                  isChecked={accommodation.utilities.includes('TOWELS')}
                  name="TOWELS"
                >
                  Towels
                </Checkbox>
              </Td>
              <Td>
                <Checkbox
                  w="100%"
                  isChecked={accommodation.utilities.includes(
                    'AIR_CONDITIONING'
                  )}
                  name="AIR_CONDITIONING"
                >
                  Air Conditioning
                </Checkbox>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <ReviewTable
          canDelete={false}
          revieweeId={accommodation.id}
          type={'Accommodation'}
        />
        <ReviewTable
          canDelete={false}
          revieweeId={accommodation.hostId}
          type={'Host'}
        />

        <Text>
          Date range: {startDate} - {endDate}
        </Text>

        <Text>
          Total price: {price} for {days} days
        </Text>
        <Text>Price per day: {pricePerDay}</Text>
        <Text>Price per guest: {pricePerGuest}</Text>
        <Button colorScheme="red" onClick={handleReserve}>
          Reserve
        </Button>
      </VStack>
    )
  );
};

export default DetailViewAccomodation;
