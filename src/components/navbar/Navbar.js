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
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrNotification } from 'react-icons/gr';
import { httpClient } from '../../http-client/HttpClient';

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let timer;

    // This effect runs when the component mounts
    timer = setInterval(() => {
      getItems();
    }, 1000);

    // This effect runs when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  const getItems = () => {
    if (localStorage.getItem('userId')) {
      httpClient
        .get(`/api/notification/${localStorage.getItem('userId')}`)
        .then(res => {
          const newNotifications = res.data;
          setNotifications(newNotifications);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

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
              {notifications.map(a => {
                return (
                  <Box w="100%" h="100px" bgColor="green.300" color="white">
                    <Text>{a.message}</Text>
                    <Text>Notification type; {a.notificationType}</Text>
                  </Box>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
