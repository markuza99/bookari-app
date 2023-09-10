import React, { useState } from 'react';
import ReservationTable from '../components/reservations/ReservationTable';
import { Box } from '@chakra-ui/react';

const ReservationPage = ({ role }) => {
  const [bookingRequests, setBookingRequests] = useState([]);

  const [bookings, setBookings] = useState([]);

  return (
    <Box width="95%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <ReservationTable role={role} />
      <ReservationTable role={role} />
    </Box>
  );
};

export default ReservationPage;
