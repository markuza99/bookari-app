import React, { useEffect, useState } from 'react';
import { httpClient } from '../../http-client/HttpClient';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ReviewGuestTable = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    httpClient
      .get('/api/reviews/reviewer/' + localStorage.getItem('userId'))
      .then(res => {
        setReviews(res.data);
      });
  }, []);

  return (
    <TableContainer my="10%">
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Reviewee</Th>
            <Th>Reviewee Type</Th>
            <Th>Rating</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reviews.map(review => {
            return (
              <Tr>
                <Td>{review.revieweeId}</Td>
                <Td>{review.revieweeType}</Td>
                <Td>{review.rating}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      httpClient
                        .delete('/api/reviews/' + review.id)
                        .then(res => {
                          console.log(res);
                          httpClient
                            .get(
                              '/api/reviews/reviewer/' +
                                localStorage.getItem('userId')
                            )
                            .then(res => {
                              setReviews(res.data);
                            });
                        });
                    }}
                  >
                    Delete
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

export default ReviewGuestTable;
