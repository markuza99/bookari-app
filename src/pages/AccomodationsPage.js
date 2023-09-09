import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import AccomodationCard from '../components/accomodation/AccomodationCard';
import SearchAccomodationH from '../components/accomodation/SearchAccomodationH';

const AccomodationsPage = () => {
  return (
    <Box
      h="100%"
      width="100%"
      margin="auto"
      borderRadius="md"
      bg="white"
      boxShadow="lg"
    >
      <SearchAccomodationH />
      <SimpleGrid columns={5} spacing={2} mt="10%" w="100%">
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
      </SimpleGrid>
    </Box>
  );
};

export default AccomodationsPage;
