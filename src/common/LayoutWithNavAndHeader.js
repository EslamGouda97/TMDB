import React from 'react';
import AppNavBar from '../Components/NavBar/NavBar'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function LayoutWithNavAndHeader () {
  return (
      <>
      <AppNavBar/>

    <Container className='my-5'>
        <Outlet/>
    </Container>
     
    </>
  );
}

export default LayoutWithNavAndHeader; 