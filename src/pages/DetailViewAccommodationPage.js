import { Box } from '@chakra-ui/react';
import React from 'react';
import BookariIcon from '../components/icons/BookariIcon';
import DetailViewAccomodation from '../components/accomodation/DetailViewAccomodation';
import { useParams, useLocation } from 'react-router-dom';
const DetailViewAccommodationPage = () => {
  const accomodationId = useParams().id;
  const location = useLocation();

  const price = location.state.price;
  const pricePerDay = location.state.pricePerDay;
  const pricePerGuest = location.state.pricePerGuest;
  const days = location.state.days;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;
  const guests = location.state.guests;
  return (
    <Box width="60%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <Box>
        <Box textAlign="center">
          <BookariIcon />
        </Box>
        <DetailViewAccomodation
          accomodationId={accomodationId}
          price={price}
          pricePerDay={pricePerDay}
          pricePerGuest={pricePerGuest}
          days={days}
          startDate={startDate}
          endDate={endDate}
          guests={guests}
        />
      </Box>
    </Box>
  );
};

export default DetailViewAccommodationPage;
