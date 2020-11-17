import React, { Component } from 'react';
import './Header.css';
import EvoxLogo from '../media/logo.svg'

import Container from 'react-bootstrap/Container';


export default class Header extends Component {
    render() {
        return (
            <header>
                <Container className='py-5'>
                    <img src={EvoxLogo} alt="Evox Logo"/>
                </Container>
            </header>
        );
    }
}