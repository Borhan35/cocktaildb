import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <section>
      <Container>
        <h1>Oops! It's A Dead End</h1>
        <Link to='/' className="btn btn-primary" href="/">back home</Link>
      </Container>
    </section>
  )
}

const Container = styled.div`
    text-align: center;
    text-transform: capitalize;
`;

export default NotFound;
