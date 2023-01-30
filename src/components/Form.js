import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Form = () => {
    const {setSearchTerm} = useGlobalContext();
    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onChangeHandler = () => {
        setSearchTerm(inputRef.current.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <Section>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">search your favorite cocktail</label>
            <input type="text" name="name" id="name" ref={inputRef} onChange={onChangeHandler} ></input>
        </form>
    </Section>
  )
}

const Section = styled.section`
    margin-top: 1rem;
    padding-bottom: 0;
    form{
        width: var(--smallWidth);
        margin: 0 auto;
        max-width: 40rem;
        background: var(--mainWhite);
        padding: 2rem 2.5rem;
        text-transform: capitalize;
        border-radius: var(--mainBorderRadius);
        box-shadow: var(--lightShadow);
        label{
            display: block;
            margin-bottom: 1.25rem;
            font-weight: 700;
            letter-spacing: .25rem;
            color: #476a2e;
            color: var(--primaryColor);
        }
        input{
            width: 100%;
            border: transparent;
            background: var(--mainBackground);
            border-radius: var(--mainBorderRadius);
            padding: 0.5rem;
            font-size: 1.2rem;
        }
    }
    
`;

export default Form;
