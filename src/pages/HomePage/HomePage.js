import React, { useState } from 'react';

import axios from 'axios'

import './HomePage.css';
import searchIcon from '../../components/media/searchIcon.svg';
import Feed from '../../components/Feed/Feed';
import UpToButton from '../../components/UpToButton/UpToButton';
import Header from '../../components/Header/Header';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


 const HomePage = (props) => {

        const [articles, setArticles] = useState([
                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },

                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },

                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },

                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },

                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },
                
                {
                    title: "Cadeira Gamer Charles v.1234",
                    urlToImage: "https://images.tcdn.com.br/img/img_prod/581679/cadeira_gamer_eaglex_pro_amarelo_1213_2_20191010105539.jpg",
                    url: "",
                    price: 300,
                },
            ])


    return (
        <>
            <Header />
            <Container className="search mt-n4">
                <div className="searchBar rounded">
                    <InputGroup size="lg">
                        <img className="m-3" src={searchIcon} alt=""/>
                        <FormControl className="searchInput my-auto" placeholder="Try Guardian" onChange={null} />
                    </InputGroup>
                </div>

                <UpToButton />
                <Feed isLoaded={true} articles={articles} />
            </Container>
        </>
    );
}

export default HomePage;