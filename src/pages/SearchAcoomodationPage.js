import React from 'react';
import SearchAccomodation from '../components/accomodation/SearchAccomodation';
import { Box, Flex } from '@chakra-ui/react';
import BookariIcon from '../components/icons/BookariIcon';

const SearchAcoomodationPage = () => {
  return (
    <Flex align="center" justify="center" height="100vh" textAlign="center">
      <Box width="30%" height="50%" borderRadius="md" bg="white" boxShadow="lg">
        <Box w="90%" mx="auto">
          <BookariIcon />
          <SearchAccomodation />;
        </Box>
      </Box>
    </Flex>
  );
};

export default SearchAcoomodationPage;
