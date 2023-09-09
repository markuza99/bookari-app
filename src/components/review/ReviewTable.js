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
import ReactStars from 'react-rating-stars-component';

const ReviewTable = () => {
  return (
    <TableContainer my="10%">
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Reviewer</Th>
            <Th>Reviewee</Th>
            <Th>Review Made On</Th>
            <Th>Review</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>GUEST</Td>
            <Td>HOST</Td>
            <Td>29-01-2020</Td>
            <Td>
              <ReactStars value={2} edit={false} />
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReviewTable;
