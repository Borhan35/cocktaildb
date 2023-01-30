import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?
      </p>
    </Section>
  )
}

const Section = styled.section`
    width: var(--smallWidth);
    max-width: var(--maxWidth);
    margin: 0 auto;
    h1{
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        text-align: center;
        margin-bottom: 3.5rem;
        margin-top: 1rem;
    }
    p{
        line-height: 2rem;
        font-weight: 400;
        letter-spacing: 2px;
    }
`;

export default About;
