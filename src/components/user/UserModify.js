import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  StackDivider,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { httpClient } from '../../http-client/HttpClient';
import { BE_URL, USERS } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

const UserModify = ({ isEdit }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    residence: '',
    role: '',
  });

  const onClickHandle = () => {
    if (user.password !== user.confirmPassword) {
      toast({
        title: 'Process Stopped',
        description: 'Passwords do not match',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    if (isEdit) {
      httpClient
        .put(`${BE_URL + USERS}/id`, user)
        .then(res => {
          console.log(res.data);
          navigate('/profile');
        })
        .catch(err => {
          toast({
            title: 'Error while editing',
            description: err.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
          });
        });
    } else {
      const data = {
        grant_type: 'password',
        client_id: 'booking-auth',
        username: 'test',
        password: 'test',
      };
      const formData = queryString.stringify(data);
      axios
        .post(
          'http://keycloak:8080/realms/booking-realm/protocol/openid-connect/token',
          formData,
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then(response => {
          console.log('Response:', response.data);
          localStorage.setItem('token', response.data.access_token);
          httpClient
            .post(`/api/users`, user)
            .then(res => {
              console.log(res.data);
              navigate('/login');
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
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  // TODO: If editing user, fill with values
  //   useEffect(() => {
  //     if (isEdit) {
  //       httpClient.get(BE_URL + USERS / 'USERID').then(res => {
  //         setUser(res.data);
  //       });
  //     }
  //   }, []);

  const isDisabled = () => {
    return (
      !user.username ||
      !user.password ||
      !user.confirmPassword ||
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.residence ||
      !user.role
    );
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <VStack
      display="flex"
      flexDirection="column"
      minHeight="100%"
      h="100vh"
      spacing={3}
    >
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Username</FormLabel>
        <Input
          value={user.username}
          onChange={e => {
            handleInputChange(e);
          }}
          name="username"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={user.password}
          onChange={e => {
            handleInputChange(e);
          }}
          name="password"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Confirm password</FormLabel>
        <Input
          type="password"
          value={user.confirmPassword}
          onChange={e => {
            handleInputChange(e);
          }}
          name="confirmPassword"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Name</FormLabel>
        <Input
          value={user.firstName}
          onChange={e => {
            handleInputChange(e);
          }}
          name="firstName"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Surname</FormLabel>
        <Input
          value={user.lastName}
          onChange={e => {
            handleInputChange(e);
          }}
          name="lastName"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={user.email}
          onChange={e => {
            handleInputChange(e);
          }}
          name="email"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Residence</FormLabel>
        <Input
          value={user.residence}
          onChange={e => {
            handleInputChange(e);
          }}
          name="residence"
        />
      </FormControl>
      <FormControl isRequired w="80%" mx="auto">
        <FormLabel>Role</FormLabel>
        <Select
          placeholder="Select role"
          value={user.role}
          onChange={e => {
            handleInputChange(e);
          }}
          name="role"
        >
          <option value="GUEST">Guest</option>
          <option value="HOST">Host</option>
        </Select>
      </FormControl>
      <Button
        colorScheme="red"
        isDisabled={
          !user.username ||
          !user.password ||
          !user.confirmPassword ||
          !user.firstName ||
          !user.lastName ||
          !user.email ||
          !user.residence ||
          !user.role
        }
        onClick={() => onClickHandle()}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default UserModify;
