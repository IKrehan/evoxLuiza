import React, { Component } from 'react';
import './Header.css';
import EvoxLogo from '../media/logo.svg'

import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 const Header = () => {
    return (
        <header>
            <Container className='py-5'>
                <Row>
                    <Col md={6}>
                        <img src={EvoxLogo} alt="Evox Logo"/>
                    </Col>
                    
                    <Col md={6} className="d-flex justify-content-end">
                        <Nav activeKey="/">
                            <Nav.Item>
                                <Nav.Link href="/">
                                    <span className="navlink active">Listagem</span>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="add">
                                    <span className="navlink">Adicionar Produto</span>
                                    </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                
            </Container>
        </header>
    );
}

export default Header;