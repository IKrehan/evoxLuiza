import React, { Component } from 'react';
import './Header.css';

import Container from 'react-bootstrap/Container';


export default class Header extends Component {
    render() {
        return (
            <header>
                <Container className='py-5'>
                    <h1>
                        <b>evox</b> News
                    </h1>
                </Container>
            </header>
        );
    }
}