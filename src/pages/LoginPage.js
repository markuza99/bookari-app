import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BookariIcon from '../components/icons/BookariIcon';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <Flex align="center" justify="center" height="100vh" textAlign="center">
      <Box width="30%" height="50%" borderRadius="md" bg="white" boxShadow="lg">
        <Box>
          <BookariIcon />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
