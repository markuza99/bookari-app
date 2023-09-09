import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const AccomodationAvailability = () => {
  return (
    <>
      <Heading>Accomodation ACCOMODATION</Heading>
      <Heading>Price is per Guest/For Entire Accommodation</Heading>
      <TableContainer my="10%">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Date From</Th>
              <Th>Date To</Th>
              <Th>Price</Th>
              <Th>Update</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>USERNAME</Td>
              <Td>2022-10-10</Td>
              <Td>2022-10-13</Td>
              <Td>5</Td>
              <Td>5000 USD</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccomodationAvailability;
