import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegUserCircle, FaTrash, FaUserCog } from 'react-icons/fa';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

const UserProfile = () => {
  return (
    <Card>
      <CardHeader textAlign="center">
        <Heading size="4xl">
          <Icon as={FaRegUserCircle} />
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Username
            </Heading>
            <Text pt="2" fontSize="sm">
              USERNAME
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Full Name
            </Heading>
            <Text pt="2" fontSize="sm">
              FIRSTNAME SURNAME
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              EMAIL
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Residence
            </Heading>
            <Text pt="2" fontSize="sm">
              RESIDENCE
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Role
            </Heading>
            <Text pt="2" fontSize="sm">
              ROLE
            </Text>
          </Box>
          <Box w="80%" mx="auto">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>
                    <Checkbox>
                      Notify me when users send a reservation requests
                    </Checkbox>
                  </Td>
                  <Td>
                    {' '}
                    <Checkbox>
                      Notify me when users cancel a reservation
                    </Checkbox>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox w="100%">Notify me when users review me</Checkbox>
                  </Td>
                  <Td>
                    <Checkbox w="100%">Notify me when users review me</Checkbox>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Center>
            <ButtonGroup gap={4}>
              <Button colorScheme="green" leftIcon={<Icon as={FaUserCog} />}>
                Edit
              </Button>
              <Button colorScheme="red" leftIcon={<Icon as={FaTrash} />}>
                Delete
              </Button>
            </ButtonGroup>
          </Center>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserProfile;
