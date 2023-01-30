import React from 'react';
import { useGlobalContext } from '../context';
import Cocktails from './Cocktails';
import styled from 'styled-components';
import Loading from './Loading';

const CocktailsList = () => {
    const {cocktails, loading} =useGlobalContext();

    if(loading){
      return <Loading />
    }

  return (
    <Container>
      <h2>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(item => {
            return  <Cocktails key={item.id} {...item} />
        })}
      </div>
    </Container>
  )
}

const Container = styled.section`
    h2{
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: .3rem;
        letter-spacing: var(--mainSpacing);
        text-align: center;
        margin-bottom: 3.5rem;
        margin-top: 1rem;
    }
    .cocktails-center{
        width: var(--smallWidth);
        margin: 0 auto;
        max-width: var(--fullWidth);
        display: grid;
        grid-row-gap: 2rem;
        row-gap: 2rem;
        grid-column-gap: 2rem;
        -webkit-column-gap: 2rem;
        column-gap: 2rem;
    }
    @media screen and (min-width: 576px){
        .cocktails-center{
            grid-template-columns: repeat(auto-fill,minmax(338.8px,1fr));
        }
    }
`;

export default CocktailsList;
