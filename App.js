import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainBanner from './components/MainBanner/MainBanner';
import Navbars from './components/Navbars';
import LoginForm2 from './components/Login/LoginForm2'
import Form from './components/Login/Form'
import Login from './components/Login/Login'
import List from './components/Search/List'

import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ListofProperties from './components/Search/ListofProperties';
import BookingId from './components/BookingId/BookingId';
import Loop from './components/BookingId/Loop'

import LoadMore from './components/BookingId/LoadMore'

export default function App() {
  return (
    <>   
    {/* <Navbars />
    
      <MainBanner /> */}
        {/* <LoginForm2 /> */}
        {/* <Form /> */}
        {/* <Login /> */}
        {/* <ForgotPassword /> */}
        {/* <List /> */}
{/* 
        <ListofProperties /> */}
       {/* <Loop /> */}
       {/* <LoadMore /> */}
       <BookingId />
    </>
  );
}



