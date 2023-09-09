import { Text } from '@chakra-ui/react';
import React from 'react';

const BookariIcon = () => {
  return (
    <Text fontSize="3xl" fontWeight="bold" mt="30px">
      B o o k a r i{' '}
      <Text as="span" color="red.500" fontFamily="heading">
        . c o m
      </Text>
    </Text>
  );
};

export default BookariIcon;
