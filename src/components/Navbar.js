import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import styled, {css} from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <div className='nav-center'>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined } to='/'>
                <img src={logo} className='logo' alt="Cocktails Logo" />
            </NavLink>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
            </ul>
        </div>
    </Nav>
  )
}


const Flex = css`
    display: flex;
    align-items: center;
`;


const Nav = styled.nav`
    ${Flex}
    background: #fff;
    background: var(--mainWhite);
    height: 5rem;
    border-bottom: 2px solid var(--primaryColor);
    box-shadow: var(--lightShadow);
    .nav-center{
        ${Flex}
        justify-content: space-between;
        width: var(--smallWidth);
        margin: 0 auto;
        max-width: var(--fullWidth);
        .logo{
            width: 12rem;
        }
        ul{
            ${Flex}
            li{
                a{
                    text-transform: capitalize;
                    display: inline-block;
                    font-weight: 700;
                    margin-right: 0.5rem;
                    font-weight: 400;
                    letter-spacing: 2px;
                    font-size: 1.2rem;
                    padding: 0.25rem 0.5rem;
                    transition: var(--mainTransition);
                    &:hover{
                        color: var(--primaryColor);
                    }
                }
            }
        }
    }
`;

export default Navbar;
