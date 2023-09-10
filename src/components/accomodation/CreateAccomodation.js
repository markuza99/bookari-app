import React from 'react';
import { useState } from 'react';
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
import axios from 'axios';
import { httpClient } from '../../http-client/HttpClient';

const CreateAccomodation = () => {
  const toast = useToast();

  const [accommodation, setAccommodation] = useState({
    name: '',
    location: '',
    photographs: [],
    utilities: {
      WIFI: false,
      PARKING: false,
      MINIBAR: false,
      KITCHEN: false,
      TOWELS: false,
      AIR_CONDITIONING: false,
    },
    minGuests: 1,
    maxGuests: 1,
    priceType: 'PRICE_PER_GUEST',
    automaticApprove: false,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setAccommodation({ ...accommodation, [name]: value });
    console.log(accommodation);
  };

  const handlCheckBoxChange = e => {
    const { name, checked } = e.target;
    const newUtilities = { ...accommodation.utilities, [name]: checked };
    setAccommodation({ ...accommodation, utilities: newUtilities });
  };

  const handleSubmit = e => {
    if (accommodation.minGuests > accommodation.maxGuests) {
      toast({
        title: 'Wrong input!',
        description: 'Min guests is bigger than max!',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    if (!accommodation.name || !accommodation.location) {
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

    accommodation.utilities = Object.keys(accommodation.utilities).filter(
      key => accommodation.utilities[key]
    );

    console.log(accommodation.utilities);
    // TODO host id
    httpClient
      .post('/api/accommodation', { ...accommodation, hostId: 'NEKI' })
      .then(response => {
        console.log('Response:', response.data);
        toast({
          title: 'Success',
          description: 'Successfully created accommodation',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });

        setAccommodation({
          name: '',
          location: '',
          photographs: [],
          utilities: {
            WIFI: false,
            PARKING: false,
            MINIBAR: false,
            KITCHEN: false,
            TOWELS: false,
            AIR_CONDITIONING: false,
          },
          minGuests: 1,
          maxGuests: 1,
          priceType: 'PRICE_PER_GUEST',
          automaticApprove: false,
        });
      })
      .catch(err => {
        toast({
          title: 'Error while registering',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      });
  };

  return (
    <VStack
      display="flex"
      flexDirection="column"
      minHeight="100%"
      h="100vh"
      spacing={3}
    >
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Name</FormLabel>
        <Input
          value={accommodation.name}
          onChange={e => {
            handleInputChange(e);
          }}
          name="name"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Location</FormLabel>
        <Input
          value={accommodation.location}
          onChange={e => {
            handleInputChange(e);
          }}
          name="location"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Images</FormLabel>
        <Input type="file" accept="image/jpeg, image/png" />
      </FormControl>
      <Table variant="simple" w="80%">
        <Tbody>
          <Tr>
            <Td>
              <Checkbox
                isChecked={accommodation.utilities.WIFI}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
                name="WIFI"
              >
                Wifi
              </Checkbox>
            </Td>
            <Td>
              <Checkbox
                isChecked={accommodation.utilities.PARKING}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
                name="PARKING"
              >
                Parking
              </Checkbox>
            </Td>
            <Td>
              <Checkbox
                w="100%"
                isChecked={accommodation.utilities.MINIBAR}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
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
                isChecked={accommodation.utilities.KITCHEN}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
                name="KITCHEN"
              >
                Kitchen
              </Checkbox>
            </Td>
            <Td>
              <Checkbox
                w="100%"
                isChecked={accommodation.utilities.TOWELS}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
                name="TOWELS"
              >
                Towels
              </Checkbox>
            </Td>
            <Td>
              <Checkbox
                w="100%"
                isChecked={accommodation.utilities.AIR_CONDITIONING}
                onChange={e => {
                  handlCheckBoxChange(e);
                }}
                name="AIR_CONDITIONING"
              >
                Air Conditioning
              </Checkbox>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Minimum Guests</FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          max={10}
          value={accommodation.minGuests}
          onChange={e => {
            setAccommodation({ ...accommodation, minGuests: parseInt(e) });
          }}
          name="minGuests"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>{' '}
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Maximum Guests</FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          max={10}
          value={accommodation.maxGuests}
          onChange={e => {
            setAccommodation({ ...accommodation, maxGuests: parseInt(e) });
          }}
          name="maxGuests"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>{' '}
      </FormControl>

      <RadioGroup
        onChange={e => {
          setAccommodation({ ...accommodation, priceType: e });
        }}
        value={accommodation.priceType}
      >
        <Stack direction="row">
          <Radio value="PRICE_PER_GUEST">Price per guest</Radio>
          <Radio value="PRICE_OF_PROPERTY">Price per whole property</Radio>
        </Stack>
      </RadioGroup>

      <Checkbox
        isChecked={accommodation.automaticApprove}
        onChange={e => {
          setAccommodation({
            ...accommodation,
            automaticApprove: e.target.checked,
          });
        }}
      >
        Automatically approve booking requests?
      </Checkbox>
      <Button colorScheme="red" onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default CreateAccomodation;
