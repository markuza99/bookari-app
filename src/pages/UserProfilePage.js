import { Box } from '@chakra-ui/react';
import React from 'react';
import UserProfile from '../components/user/UserProfile';

const UserProfilePage = () => {
  return (
    <Box width="60%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <UserProfile></UserProfile>
    </Box>
  );
};

export default UserProfilePage;
