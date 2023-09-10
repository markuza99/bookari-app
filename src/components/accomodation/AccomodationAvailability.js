import {
  Button,
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

const AccomodationAvailability = ({ availability }) => {
  return (
    <>
      <TableContainer my="10%" overflow="auto" h="20%">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {availability.map(available => {
              return (
                <Tr>
                  <Td>{available.date}</Td>
                  <Td>{available.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccomodationAvailability;
