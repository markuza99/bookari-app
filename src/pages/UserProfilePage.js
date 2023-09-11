import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserProfile from '../components/user/UserProfile';
import { httpClient } from '../http-client/HttpClient';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    httpClient
      .get('api/users/user-info')
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(err => {
        localStorage.clear();
        navigate('/login');
        console.log('err');
      });
  }, []);

  return (
    <Box width="60%" margin="auto" borderRadius="md" bg="white" boxShadow="lg">
      {user != null && <UserProfile user={user}></UserProfile>}
    </Box>
  );
};

export default UserProfilePage;
