import { Badge, Box, Image, Icon, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// TODO: sliku ubaciti
const AccomodationCard = ({
  accommodation,
  pricePerDay,
  pricePerGuest,
  days,
  startDate,
  endDate,
  guests,
}) => {
  let navigate = useNavigate();
  const handleReserve = () => {
    console.log(accommodation.id);
    navigate(`/accomodations/${accommodation.id}`, {
      state: {
        price: accommodation.price,
        pricePerDay,
        pricePerGuest,
        days,
        startDate,
        endDate,
        guests,
      },
    });
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={'https://bit.ly/2Z4KKcF'} alt={'https://bit.ly/2Z4KKcF'} />

      <Box p="6">
        <Box display="flex" alignItems="baseline"></Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
        >
          {accommodation.name}
        </Box>

        <Box>
          Total price: {accommodation.price.toFixed(2)}
          <Box as="span" color="gray.600" fontSize="sm">
            €
          </Box>
        </Box>

        <Box>
          Price per day: {pricePerDay.toFixed(2)}
          <Box as="span" color="gray.600" fontSize="sm">
            €
          </Box>
        </Box>

        <Box>
          Price per guest: {pricePerGuest.toFixed(2)}
          <Box as="span" color="gray.600" fontSize="sm">
            €
          </Box>
        </Box>

        <Box>
          <Button colorScheme="blue" onClick={handleReserve}>
            Reserve
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AccomodationCard;
