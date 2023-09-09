import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Input,
  Link,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../http-client/HttpClient';
import { BE_URL, USERS } from '../../constants/routes';
import queryString from 'query-string';

const LoginForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // TODO: Add jwt token + role in localStorage
  const login = () => {
    httpClient
      .post('http://localhost:8081/api/users/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data);
        navigate('/profile');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Box w="80%" mx="auto" my="10%">
      <Input
        placeholder="Username"
        size="lg"
        my="3%"
        variant="flushed"
        onChange={e => {
          handleInputChange(e);
        }}
        name="username"
      />
      <Input
        placeholder="Password"
        size="lg"
        my="3%"
        variant="flushed"
        type="password"
        onChange={e => {
          handleInputChange(e);
        }}
        name="password"
      />
      <ButtonGroup gap={4}>
        <Button
          colorScheme="red"
          leftIcon={<Icon as={FiLogIn} />}
          onClick={() => login()}
          isDisabled={!credentials.username || !credentials.password}
        >
          Sign in
        </Button>
        <Button
          colorScheme="red"
          variant="outline"
          leftIcon={<Icon as={FiUserPlus} />}
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LoginForm;
