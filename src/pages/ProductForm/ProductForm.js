import React, { useState } from 'react';

import axios from 'axios'

import './ProductForm.css';
import Header from '../components/Header/Header';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


 const HomePage = (props) => {

        const [articles, setArticles] = useState(0)


    return (
        <>
            <Header />
            <Container className="">
                
            </Container>
        </>
    );
}

export default HomePage;