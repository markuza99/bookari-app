import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { httpClient } from '../../http-client/HttpClient';

const AccomodationAvailabilityModal = ({
  isOpen,
  onClose,
  type,
  update,
  id,
}) => {
  const [availability, setAvailability] = useState({
    startDate: '',
    endDate: '',
    price: 0,
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setAvailability({ ...availability, [name]: value });
    console.log(availability);

    console.log(type);
  };

  const handleClick = () => {
    if (type == 'Add') {
      httpClient
        .post(`/api/accommodation/create-availability/${id}`, availability)
        .then(res => {
          console.log('DADA');
          onClose();
          update();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      httpClient
        .delete(`/api/accommodation/remove-availability/${id}`, {
          data: availability,
        })
        .then(res => {
          console.log('DADA');
          onClose();
          update();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{type} Accommodation Availability</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex minWidth="max-content" alignItems="center" gap="2" w="100%">
            <FormControl isRequired>
              <FormLabel>Start date</FormLabel>
              <Input
                placeholder="Select start date"
                type="date"
                onChange={e => {
                  handleInputChange(e);
                }}
                name="startDate"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>End date</FormLabel>
              <Input
                placeholder="Select start date"
                type="date"
                onChange={e => {
                  handleInputChange(e);
                }}
                name="endDate"
              />
            </FormControl>
          </Flex>
          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <NumberInput
              min={1}
              max={100000}
              defaultValue={0}
              onChange={e => {
                setAvailability({ ...availability, price: e });
              }}
              name="price"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </ModalBody>

        <ModalFooter textAlign="center">
          <Center>
            <Button colorScheme="red" mr={3} onClick={() => handleClick()}>
              Submit
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AccomodationAvailabilityModal;
