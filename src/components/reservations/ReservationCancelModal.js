import {
  Button,
  ButtonGroup,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

const ReservationCancelModal = ({ onClose }) => {
  const toast = useToast();

  const onCancel = () => {
    toast({
      title: 'Reservation successfully cancelled.',
      description: 'Reservation has been successfully cancelled',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
    onClose();
  };
  return (
    <ModalContent>
      <ModalHeader textAlign={'center'}>Cancelling reservation</ModalHeader>
      <ModalCloseButton />
      <ModalBody textAlign="center">
        <Text fontSize={'xl'}>
          Are you sure you want to cancel reservation?
        </Text>
      </ModalBody>
      <ModalFooter textAlign="center" alignSelf="center">
        <ButtonGroup spacing={1}>
          <Button colorScheme="red" onClick={() => onCancel()}>
            Yes
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            No
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  );
};

export default ReservationCancelModal;
