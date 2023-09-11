import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Input,
  Spacer,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrNotification } from 'react-icons/gr';

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      mb="1%"
      width="100%"
      height="75px"
      borderRadius="md"
      bg="white"
      boxShadow="lg"
      minWidth="max-content"
      alignItems="center"
      gap="2"
    >
      <Box p="2">
        <Heading
          size="md"
          onClick={() => {
            navigate('/accomodations');
          }}
        >
          Search
        </Heading>
      </Box>
      <Spacer />
      {localStorage.getItem('token') && (
        <>
          <Box p="2">
            <Heading
              size="md"
              onClick={() => {
                navigate('/profile');
              }}
            >
              Profile
            </Heading>
          </Box>
          <Spacer />
        </>
      )}
      {localStorage.getItem('token') && (
        <>
          <Box p="2">
            <Heading
              size="md"
              onClick={() => {
                navigate(
                  `/reservations-${localStorage.getItem('role').toLowerCase()}`
                );
              }}
            >
              Reservations
            </Heading>
          </Box>
          <Spacer />
        </>
      )}
      {localStorage.getItem('role') === 'GUEST' && (
        <>
          <Box p="2">
            <Heading
              size="md"
              onClick={() => {
                navigate(`/review-table`);
              }}
            >
              Reviews
            </Heading>
          </Box>
          <Spacer />
        </>
      )}

      {localStorage.getItem('role') === 'HOST' && (
        <>
          <Box p="2">
            <Heading
              size="md"
              onClick={() => {
                navigate(`/my-accommodations`);
              }}
            >
              My Accommodations
            </Heading>
          </Box>
          <Spacer />
        </>
      )}
      {localStorage.getItem('role') === 'HOST' && (
        <>
          <Box p="2">
            <Heading
              size="md"
              onClick={() => {
                navigate(`/create-accomodation`);
              }}
            >
              Create Accommodation
            </Heading>
          </Box>
          <Spacer />
        </>
      )}

      {localStorage.getItem('token') ? (
        <>
          <Button
            colorScheme="red"
            onClick={() => {
              localStorage.clear();
              navigate('/login');
            }}
          >
            Sign Out
          </Button>
          <Button
            variant="ghost"
            leftIcon={<Icon as={GrNotification} />}
            onClick={onOpen}
          ></Button>
        </>
      ) : (
        <ButtonGroup gap="2">
          <Button
            colorScheme="red"
            onClick={() => {
              navigate('/register');
            }}
          >
            Sign Up
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log in
          </Button>
        </ButtonGroup>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notification</DrawerHeader>

          <DrawerBody>
            <VStack gap={2} w="100%">
              <Box w="100%" h="100px" bgColor="green.300" color="white">
                WRITE HERE
              </Box>
              <Box w="100%" h="100px" bgColor="green.300" color="white">
                WRITE HERE
              </Box>
              <Box w="100%" h="100px" bgColor="green.300" color="white">
                WRITE HERE
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
