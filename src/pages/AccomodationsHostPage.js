import React from 'react';
import AccomodationHostTable from '../components/accomodation/AccomodationHostTable';
import { Box } from '@chakra-ui/react';

const AccomodationsHostPage = () => {
  return (
    <Box width="95%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <AccomodationHostTable />
    </Box>
  );
};

export default AccomodationsHostPage;
