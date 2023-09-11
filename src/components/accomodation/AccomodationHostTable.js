import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { httpClient } from '../../http-client/HttpClient';
import { useNavigate } from 'react-router-dom';

const AccomodationHostTable = () => {
  const [accommodations, setAccommodations] = useState([]);
  const naviage = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('userId')) {
      httpClient
        .get('/api/accommodation/host/' + localStorage.getItem('userId'))
        .then(res => {
          setAccommodations(res.data);
        });
    }
  }, []);

  return (
    <TableContainer my="10%">
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Automatic approve</Th>
            <Th>Location</Th>
            <Th>Max guests</Th>
            <Th>Min guests</Th>
            <Th>Availability</Th>
          </Tr>
        </Thead>
        <Tbody>
          {accommodations.map(accommodation => {
            return (
              <Tr>
                <Td>{accommodation.name}</Td>
                <Td>{accommodation.automaticApprove ? 'Yes' : 'No'}</Td>
                <Td>{accommodation.location}</Td>
                <Td>{accommodation.maxGuests}</Td>
                <Td>{accommodation.minGuests}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      naviage(`/accomodation-availability/${accommodation.id}`);
                    }}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AccomodationHostTable;
