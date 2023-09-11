import {
  Box,
  Button,
  ButtonGroup,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { httpClient } from '../../http-client/HttpClient';

const ReviewModal = ({ onClose, reviewer, reviewee, revieweeType }) => {
  const [rating, setRating] = useState(0);
  return (
    <ModalContent>
      <ModalHeader textAlign={'center'}>Review</ModalHeader>
      <ModalCloseButton />
      <ModalBody textAlign="center">
        <Text disabled>Reviewer: {reviewer}</Text>
        <Text disabled>Reviewee: {reviewee}</Text>
        <Box w="32.5%" mx="auto">
          <ReactStars
            size={30}
            value={rating}
            edit={true}
            onChange={e => {
              setRating(e);
            }}
          />
        </Box>
      </ModalBody>
      <ModalFooter textAlign="center" alignSelf="center">
        <ButtonGroup spacing={1}>
          <Button
            colorScheme="blue"
            onClick={() => {
              httpClient
                .post('/api/reviews', {
                  revieweeId: reviewee,
                  reviewerId: reviewer,
                  revieweeType: revieweeType,
                  rating: rating,
                })
                .then(res => {
                  console.log(res.data);
                  console.log('DSADSADSA');
                });
            }}
          >
            Confirm Review
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  );
};

export default ReviewModal;
