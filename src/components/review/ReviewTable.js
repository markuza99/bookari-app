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
import { httpClient } from '../../http-client/HttpClient';

const ReviewTable = ({ canDelete, revieweeId, type }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    httpClient
      .get(`/api/reviews/${revieweeId}`)
      .then(res => {
        setReviews(res.data.reviews);
        setAverageRating(res.data.averageRating);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer my="10%">
      <Table variant="striped" colorScheme="blackAlpha">
        <TableCaption>
          {type} average rating: {averageRating}.{' '}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Reviewer</Th>
            <Th>Review</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reviews.map(a => {
            return (
              <Tr>
                <Td>{a.reviewerId}</Td>
                <Td>
                  <ReactStars value={a.rating} edit={false} />
                </Td>
                {canDelete && (
                  <Td>
                    <Button colorScheme="red">Delete</Button>
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReviewTable;
