import { Box } from '@chakra-ui/react';
import React from 'react';
import BookariIcon from '../components/icons/BookariIcon';
import CreateAccomodation from '../components/accomodation/CreateAccomodation';

const CreateAccomodationPage = () => {
  return (
    <Box width="60%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <Box>
        <Box textAlign="center">
          <BookariIcon />
        </Box>
        <CreateAccomodation />
      </Box>
    </Box>
  );
};

export default CreateAccomodationPage;
