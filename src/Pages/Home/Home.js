import React from 'react';
import Header from '../../Components/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';

function Home () {
  return (
      <>
    <Container className='my-5'  
>
        <Header/>
        <Footer/>
    </Container>
    </>
  );
}

export default Home;