import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cocktails = ({id, name, image, info, glass}) => {
  return (
    <Article>
        <div className='img-container'>
          <img src={image} alt={name} />
        </div>
        <div className='cocktails-footer'>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">details</Link>
        </div>
    </Article>
  )
}

const Article = styled.article`
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--mainBorderRadius);
  &:hover{
    box-shadow: var(--darkShadow);
  }
  .img-container{
    img{
      height: 20rem;
      object-fit: cover;
      border-top-left-radius: 0.25rem;
      border-top-left-radius: var(--mainBorderRadius);
      border-top-right-radius: 0.25rem;
      border-top-right-radius: var(--mainBorderRadius);
    }
  }
  .cocktails-footer{
    padding: 1.5rem;
    h3, h4, p{
      margin-bottom: 0.3rem;
    }
    h3{
      font-size: 2rem;
    }
    p{
      color: var(--darkGrey);
      margin-bottom: 0.5rem;
    }
  }
`;

export default Cocktails;
