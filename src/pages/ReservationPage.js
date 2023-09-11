import React, { useState, useEffect } from 'react';
import ReservationRequestTable from '../components/reservations/ReservationRequestTable';
import { Box, Text } from '@chakra-ui/react';
import { httpClient } from '../http-client/HttpClient';
import ReservationTable from '../components/reservations/ReservationTable';

const ReservationPage = ({ role }) => {
  const [bookingRequests, setBookingRequests] = useState([]);

  const [bookings, setBookings] = useState([]);

  function refresh() {
    httpClient
      .get(
        `/api/accommodation/booking/request/${role}/${localStorage.getItem(
          'userId'
        )}`,
        {
          params: { status: 'PENDING' },
        }
      )
      .then(res => {
        setBookingRequests(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    httpClient
      .get(
        `/api/accommodation/booking/${role}/${localStorage.getItem('userId')}`
      )
      .then(res => {
        setBookings(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Box width="95%" margin="auto" borderRadius="md" boxShadow="lg">
      <ReservationRequestTable
        role={role}
        data={bookingRequests}
        callback={refresh}
      />
      <ReservationTable role={role} data={bookings} callback={refresh} />
    </Box>
  );
};

export default ReservationPage;
