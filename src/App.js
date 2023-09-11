import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Center,
  Heading,
  extendTheme,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import BookariIcon from './components/icons/BookariIcon';
import LoginForm from './components/forms/LoginForm';
import { FiLogIn } from 'react-icons/fi';
import LoginPage from './pages/LoginPage';
import UserModify from './components/user/UserModify';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './components/user/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import ReservationPage from './pages/ReservationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewTablePage from './pages/ReviewTablePage';
import CreateAccomodation from './components/accomodation/CreateAccomodation';
import CreateAccomodationPage from './pages/CreateAccomodationPage';
import SearchAccomodation from './components/accomodation/SearchAccomodation';
import SearchAcoomodationPage from './pages/SearchAcoomodationPage';
import AccomodationCard from './components/accomodation/AccomodationCard';
import AccomodationsPage from './pages/AccomodationsPage';
import AccomodationAvailability from './components/accomodation/AccomodationAvailability';
import DetailViewAccommodationPage from './pages/DetailViewAccommodationPage';
import AccomodationAvailabilityPage from './pages/AccomodationAvailabilityPage';
import Navbar from './components/navbar/Navbar';
import AccomodationHostTable from './components/accomodation/AccomodationHostTable';
import AccomodationsHostPage from './pages/AccomodationsHostPage';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/edit" element={<RegisterPage />} />

          <Route path="/profile" element={<UserProfilePage />} />
          <Route
            path="/reservations-guest"
            element={<ReservationPage role="guest" />}
          />
          <Route
            path="/reservations-host"
            element={<ReservationPage role="host" />}
          />

          <Route path="/review-table" element={<ReviewTablePage />} />
          <Route
            path="/create-accomodation"
            element={<CreateAccomodationPage />}
          />
          <Route
            path="/search-accomodation"
            element={<SearchAcoomodationPage />}
          />
          <Route path="/accomodations" element={<AccomodationsPage />} />
          <Route
            path="/accomodation-availability/:id"
            element={<AccomodationAvailabilityPage />}
          />
          <Route
            path="/accomodations/:id"
            element={<DetailViewAccommodationPage />}
          />
          <Route
            path="/my-accommodations"
            element={<AccomodationsHostPage />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
