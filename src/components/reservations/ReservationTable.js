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

const ReservationTable = ({ role }) => {
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
              <Th>Date From</Th>
              <Th>Date To</Th>
              <Th>Number Of Guests</Th>
              <Th>Price</Th>
              {role === 'GUEST' ? (
                <>
                  <Th>Cancel Reservation</Th>
                  <Th>Review Accomodation</Th>
                  <Th>Review Host</Th>
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
            <Tr>
              <Td>USERNAME</Td>
              <Td>2022-10-10</Td>
              <Td>2022-10-13</Td>
              <Td>5</Td>
              <Td>5000 USD</Td>
              {role === 'GUEST' ? (
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
                <>
                  <Td>5</Td>
                  <Td>
                    <Button colorScheme="red" color="white">
                      Deny
                    </Button>
                  </Td>
                  <Td>
                    <Button colorScheme="green" color="white">
                      Approve
                    </Button>
                  </Td>
                </>
              )}
            </Tr>
            <Tr>
              <Td>USERNAME</Td>
              <Td>2022-10-10</Td>
              <Td>2022-10-13</Td>
              <Td>5</Td>
              <Td>5000 USD</Td>
              {role === 'GUEST' ? (
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
                <>
                  <Td>5</Td>

                  <Td>
                    <Button colorScheme="red" color="white">
                      Deny
                    </Button>
                  </Td>
                  <Td>
                    <Button colorScheme="green" color="white">
                      Approve
                    </Button>
                  </Td>
                </>
              )}
            </Tr>
            <Tr>
              <Td>USERNAME</Td>
              <Td>2022-10-10</Td>
              <Td>2022-10-13</Td>
              <Td>5</Td>
              <Td>5000 USD</Td>
              {role === 'GUEST' ? (
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
                <>
                  <Td>5</Td>

                  <Td>
                    <Button colorScheme="red" color="white">
                      Deny
                    </Button>
                  </Td>
                  <Td>
                    <Button colorScheme="green" color="white">
                      Approve
                    </Button>
                  </Td>
                </>
              )}
            </Tr>
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
