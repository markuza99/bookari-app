import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import AccomodationCard from '../components/accomodation/AccomodationCard';
import SearchAccomodationH from '../components/accomodation/SearchAccomodationH';

const AccomodationsPage = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [days, setDays] = useState(1);
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const updateResultList = (
    accommodations,
    days,
    numOfGuests,
    startDate,
    endDate
  ) => {
    console.log(accommodations);
    setAccommodations(accommodations);
    setDays(days);
    setNumOfGuests(numOfGuests);
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <Box
      h="100%"
      width="100%"
      margin="auto"
      borderRadius="md"
      bg="white"
      boxShadow="lg"
    >
      <SearchAccomodationH updateResultList={updateResultList} />
      <SimpleGrid columns={5} spacing={2} mt="10%" w="100%">
        {accommodations.map(a => {
          return (
            <AccomodationCard
              key={a.id}
              accommodation={a}
              pricePerDay={a.price / days}
              pricePerGuest={a.price / numOfGuests}
              days={days}
              startDate={startDate}
              endDate={endDate}
              guests={numOfGuests}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default AccomodationsPage;
