import React, { Component } from 'react';

import axios from 'axios'

import './Body.css';
import searchIcon from './media/searchIcon.svg'
import News from './News'
import UpToButton from './UpToButton'

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default class Body extends Component {

    constructor(props) {
        super();
        this.state = {
            isLoaded: false,
            articles: [],
            search_value: "",
            sortBy: "publishedAt",
            pageSize: 5,
            page: 1,
            scrolling: false,
        }

        this.handleEvent = this.handleEvent.bind(this);
        this.nextPage = this.nextPage.bind(this)
    }

    componentDidMount() {
        let url = `http://newsapi.org/v2/top-headlines?country=br&q=${this.state.search_value}&sortBy=${this.state.sortBy}&pageSize=${this.state.pageSize.toString()}&page=${this.state.page.toString()}&apiKey=83c78226acad413893294f74e8011e96`
        axios.get(url)
            .then(response => {
                this.setState({ 
                    articles: this.state.articles.concat((response.data.articles).filter((item) => this.state.articles.indexOf(item) < 0)),
                    isLoaded: true,
                    scrolling: false,
                });
            })

        window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    handleScroll = (e) => {
        const {scrolling, pageSize, page} = this.state

        if (scrolling) return

        if (pageSize <= page) return

        const lastNews = document.querySelector('.news .card:last-child')
        const lastNewsOffset = lastNews.offsetTop + lastNews.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight
        let bottomOffset = 20

        if (pageOffset > lastNewsOffset - bottomOffset) this.nextPage()

    }


    handleEvent = (e) => {
        const value = e.target.value;
        this.setState({
          search_value: value,
          articles: [],
        });

        this.componentDidMount()
    }


    nextPage() {
        this.setState({ page: this.state.page+1, scrolling: true });

        this.componentDidMount()    
    }


    render() {
        return (
                <Container className="search mt-n4">
                    <div className="searchBar rounded">
                        <InputGroup size="lg">
                            <img className="m-3" src={searchIcon} alt=""/>
                            <FormControl className="searchInput my-auto" placeholder="Try Guardian" onChange={this.handleEvent} />
                        </InputGroup>
                    </div>

                    <UpToButton />
                    <News isLoaded={this.state.isLoaded} articles={this.state.articles} />
                </Container>
        );
    }
}