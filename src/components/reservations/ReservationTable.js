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

const ReservationTable = ({ role, data, callback }) => {
  const {
    isOpen: isOpenCancel,
    onOpen: onOpenCancel,
    onClose: onCloseCancel,
  } = useDisclosure();
  const {
    isOpen: isOpenReview,
    onOpen: onOpenReview,
    onClose: onCloseReview,
  } = useDisclosure();

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
              {role === 'user' ? (
                <>
                  <Th>Cancel Reservation</Th>
                  <Th>Review Accomodation</Th>
                  <Th>Review Host</Th>
                </>
              ) : (
                <></>
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

                  {role === 'user' ? (
                    <>
                      <Td>
                        <Button colorScheme="red" onClick={onOpenCancel}>
                          Cancel
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="yellow"
                          color="white"
                          onClick={onOpenReview}
                        >
                          Review
                        </Button>
                      </Td>
                      <Td>
                        <Button colorScheme="yellow" color="white">
                          Review
                        </Button>
                      </Td>
                    </>
                  ) : (
                    <></>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpenCancel} onClose={onCloseCancel}>
        <ModalOverlay />
        <ReservationCancelModal onClose={onCloseCancel} />
      </Modal>
      <Modal isOpen={isOpenReview} onClose={onCloseReview}>
        <ModalOverlay />
        <ReviewModal onClose={onCloseReview} />
      </Modal>
    </>
  );
};

export default ReservationTable;
