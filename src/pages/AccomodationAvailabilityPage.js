import React, { useEffect, useState } from 'react';
import AccomodationAvailability from '../components/accomodation/AccomodationAvailability';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import AccomodationAvailabilityModal from '../components/accomodation/AccomodationAvailabilityModal';
import { httpClient } from '../http-client/HttpClient';
import { useParams } from 'react-router-dom';

const AccomodationAvailabilityPage = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState({
    name: '',
    priceType: '',
  });
  const [availability, setAvailability] = useState([]);
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  useEffect(() => {
    httpClient
      .get(`/api/accommodation/${id}`)
      .then(res => {
        setAccommodation(res.data);
        getAvailable();
      })
      .catch(err => {
        console.log('DASDSA');
      });
  }, []);

  const getAvailable = () => {
    httpClient.get(`/api/accommodation/availability/${id}`).then(res => {
      setAvailability(res.data);
    });
  };
  return (
    <>
      <Box
        width="95%"
        margin="auto"
        borderRadius="md"
        bg="white"
        boxShadow="lg"
        my="1%"
        p="2%"
      >
        <Heading textAlign="center">{accommodation.name}</Heading>
        <Heading textAlign="center">
          Price is {accommodation.priceType.replaceAll('_', ' ').toLowerCase()}
        </Heading>
        <Heading textAlign="center">
          <Heading textAlign="center">
            <ButtonGroup gap={4}>
              <Button colorScheme="red" onClick={onOpenAdd}>
                Add new availability
              </Button>
              <Button colorScheme="red" onClick={onOpenDelete}>
                Delete availability
              </Button>
            </ButtonGroup>
          </Heading>
        </Heading>
      </Box>

      <Box
        width="95%"
        margin="auto"
        borderRadius="md"
        bg="white"
        boxShadow="lg"
      >
        <AccomodationAvailability availability={availability} />
      </Box>

      <AccomodationAvailabilityModal
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        type="Delete"
        update={getAvailable}
        id={id}
      />
      <AccomodationAvailabilityModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        type="Add"
        update={getAvailable}
        id={id}
      />
    </>
  );
};

export default AccomodationAvailabilityPage;
