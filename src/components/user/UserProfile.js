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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegUserCircle, FaTrash, FaUserCog } from 'react-icons/fa';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { httpClient } from '../../http-client/HttpClient';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const handleOnDelete = () => {
    if (user.id) {
      httpClient
        .delete(`api/users/${user.id}`)
        .then(res => {
          localStorage.clear();
          onClose();
          navigate('/login');
          toast({
            title: 'User Deleted',
            description: `User with id ${user.id} successfully deleted`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
          });
        })
        .catch(err => {
          localStorage.clear();
          navigate('/login');
        });
    }
  };
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
              {user.username}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Full Name
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.firstName + ' ' + user.lastName}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Residence
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.residence}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Role
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.role}
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
              <Button
                colorScheme="green"
                leftIcon={<Icon as={FaUserCog} />}
                onClick={() => {
                  navigate('/edit');
                }}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                leftIcon={<Icon as={FaTrash} />}
                onClick={() => onOpen()}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Center>
        </Stack>
      </CardBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader textAlign={'center'}>Deleting user</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Text fontSize={'xl'}>
              Are you sure you want to delete account?
            </Text>
          </ModalBody>
          <ModalFooter textAlign="center" alignSelf="center">
            <ButtonGroup spacing={1}>
              <Button colorScheme="red" onClick={() => handleOnDelete()}>
                Yes
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                No
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default UserProfile;
