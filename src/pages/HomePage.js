import React, { Component } from 'react';

import axios from 'axios'

import './HomePage.css';
import searchIcon from '../components/media/searchIcon.svg';
import Feed from '../components/Feed/Feed';
import UpToButton from '../components/UpToButton/UpToButton';
import Header from '../components/Header/Header';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default class Body extends Component {

    //title, urlToImage, url, price
    constructor(props) {
        super();
        this.state = {
            articles: [
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
            ],
        }
    }


    render() {
        return (
            <>
                <Header />
                <Container className="search mt-n4">
                    <div className="searchBar rounded">
                        <InputGroup size="lg">
                            <img className="m-3" src={searchIcon} alt=""/>
                            <FormControl className="searchInput my-auto" placeholder="Try Guardian" onChange={this.handleEvent} />
                        </InputGroup>
                    </div>

                    <UpToButton />
                    <Feed isLoaded={this.state.isLoaded} articles={this.state.articles} />
                </Container>
            </>
        );
    }
}