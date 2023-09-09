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
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ReviewModal = ({ onClose, reviewer, reviewee }) => {
  return (
    <ModalContent>
      <ModalHeader textAlign={'center'}>Review</ModalHeader>
      <ModalCloseButton />
      <ModalBody textAlign="center">
        <Text disabled>Reviewer: {reviewer}</Text>
        <Text disabled>Reviewee: {reviewer}</Text>
        <Box w="32.5%" mx="auto">
          <ReactStars size={30} value={0} edit={true} />
        </Box>
      </ModalBody>
      <ModalFooter textAlign="center" alignSelf="center">
        <ButtonGroup spacing={1}>
          <Button colorScheme="blue" onClick={onClose}>
            Confirm Review
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  );
};

export default ReviewModal;
