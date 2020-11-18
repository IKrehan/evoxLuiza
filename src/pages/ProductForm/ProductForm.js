import React, { useState } from 'react';

import axios from 'axios'

import './ProductForm.css';
import Header from '../../components/Header/Header';
import Dropzone from '../../components/Dropzone/Dropzone';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



 const HomePage = (props) => {
    return (
        <>
            <Header />
            <Container className="">
                <h1 className='my-5'>Adicione um produto</h1>

                <Form>
                    <Row>
                    <Col className="p-4 mt-n4" md={4}>
                        <div className='inputBox'>
                            <Dropzone />
                        </div>
                        
                    </Col>

                    <Col md={8}>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control size="lg" type="email" />
                        </Form.Group>

                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Preço do Produto</Form.Label>
                            <Form.Control size="lg" type="int" />
                        </Form.Group>

                        <div className="d-flex justify-content-end">
                            <Button size="lg" className="mt-3" variant="primary" type="submit">
                                <span className="mx-5">Adicionar</span>
                            </Button>
                        </div>
                        
                    </Col>
                        </Row>
                </Form>
            </Container>
        </>
    );
}

export default HomePage;