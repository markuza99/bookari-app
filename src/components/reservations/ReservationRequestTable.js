import {
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReservationCancelModal from './ReservationCancelModal';
import ReviewModal from './ReviewModal';
import { httpClient } from '../../http-client/HttpClient';

const ReservationRequestTable = ({ role, data, callback }) => {
  const handleCancelRequest = id => {
    httpClient.delete(`/api/accommodation/booking/request/${id}`).then(res => {
      console.log(res.data);
      callback();
    });
  };

  const handleApproveRequest = id => {
    httpClient
      .put(`/api/accommodation/booking/request/${id}/approve`)
      .then(res => {
        console.log(res.data);
        callback();
      });
  };

  const handleDenyRequest = id => {
    httpClient
      .put(`/api/accommodation/booking/request/${id}/reject`)
      .then(res => {
        console.log(res.data);
        callback();
      });
  };

  return (
    <>
      <TableContainer my="10%">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Reservation Made By</Th>
              <Th>Accommodation</Th>
              <Th>Date From</Th>
              <Th>Date To</Th>
              <Th>Number Of Guests</Th>
              <Th>Price</Th>
              <Th>Status</Th>

              {role === 'guest' ? (
                <>
                  <Th>Cancel Request</Th>
                </>
              ) : (
                <>
                  <Th>No. of cancellations</Th>
                  <Th>Deny Reservation</Th>
                  <Th>Approve Reservation</Th>
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {data.map(elem => {
              return (
                <Tr>
                  <Td>{elem.userId}</Td>
                  <Td>{elem.accomodationId}</Td>
                  <Td>{elem.startDate}</Td>
                  <Td>{elem.endDate}</Td>
                  <Td>{elem.numOfGuests}</Td>
                  <Td>{elem.price}</Td>
                  <Td>{elem.status}</Td>

                  {role === 'guest' ? (
                    <>
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={() => handleCancelRequest(elem.id)}
                        >
                          Cancel
                        </Button>
                      </Td>
                    </>
                  ) : (
                    <>
                      <Td>5</Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          color="white"
                          onClick={() => handleDenyRequest(elem.id)}
                        >
                          Deny
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="green"
                          color="white"
                          onClick={() => {
                            handleApproveRequest(elem.id);
                          }}
                        >
                          Approve
                        </Button>
                      </Td>
                    </>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReservationRequestTable;
