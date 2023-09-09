import React from 'react';
import ReservationTable from '../components/reservations/ReservationTable';
import { Box } from '@chakra-ui/react';

const ReservationPage = ({ role }) => {
  return (
    <Box width="95%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <ReservationTable role={role} />
    </Box>
  );
};

export default ReservationPage;
