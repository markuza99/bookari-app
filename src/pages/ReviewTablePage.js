import { Box } from '@chakra-ui/react';
import React from 'react';
import ReviewTable from '../components/review/ReviewTable';

const ReviewTablePage = () => {
  return (
    <Box width="95%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      <ReviewTable />
    </Box>
  );
};

export default ReviewTablePage;
