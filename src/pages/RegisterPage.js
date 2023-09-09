import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import UserModify from '../components/user/UserModify';
import BookariIcon from '../components/icons/BookariIcon';

const RegisterPage = () => {
  return (
    <Box width="60%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <Box>
        <Box textAlign="center">
          <BookariIcon />
        </Box>
        <Box></Box>
        <UserModify isEdit={false} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
