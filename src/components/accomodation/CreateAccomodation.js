import React from 'react';
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
} from '@chakra-ui/react';

const CreateAccomodation = () => {
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
        <Input />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Location</FormLabel>
        <Input />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Images</FormLabel>
        <Input type="file" accept="image/jpeg, image/png" multiple />
      </FormControl>
      <Table variant="simple" w="80%">
        <Tbody>
          <Tr>
            <Td>
              <Checkbox>Wifi</Checkbox>
            </Td>
            <Td>
              <Checkbox>Parking</Checkbox>
            </Td>
            <Td>
              <Checkbox w="100%">Minibar</Checkbox>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Checkbox w="100%">Kitchen</Checkbox>
            </Td>
            <Td>
              <Checkbox w="100%">Towels</Checkbox>
            </Td>
            <Td>
              <Checkbox w="100%">Air Conditioning</Checkbox>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Minimum Guests</FormLabel>
        <NumberInput defaultValue={1} min={1} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>{' '}
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Maximum Guests</FormLabel>
        <NumberInput defaultValue={1} min={1} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>{' '}
      </FormControl>
      <Button colorScheme="red">Submit</Button>
    </VStack>
  );
};

export default CreateAccomodation;
