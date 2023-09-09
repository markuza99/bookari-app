import { Box, Button, ButtonGroup, Icon, Input, Link } from '@chakra-ui/react';
import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../http-client/HttpClient';
import { BE_URL, USERS } from '../../constants/routes';

const LoginForm = () => {
  const navigate = useNavigate();

  // TODO: Add jwt token + role in localStorage
  const login = () => {
    httpClient
      .post(BE_URL + USERS)
      .then(res => {
        localStorage.setItem(res.jwt);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Box w="80%" mx="auto" my="10%">
      <Input placeholder="Username" size="lg" my="3%" variant="flushed" />
      <Input
        placeholder="Password"
        size="lg"
        my="3%"
        variant="flushed"
        type="password"
      />
      <ButtonGroup gap={4}>
        <Button
          colorScheme="red"
          leftIcon={<Icon as={FiLogIn} />}
          onClick={() => login()}
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
