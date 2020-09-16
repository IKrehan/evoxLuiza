import React, { Component } from 'react';

import axios from 'axios'

import './Body.css';
import News from './News'

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
        }

        this.handleEvent = this.handleEvent.bind(this);
        this.nextPage = this.nextPage.bind(this)
    }

    componentDidMount() {
        let url = `http://newsapi.org/v2/top-headlines?country=us&q=${this.state.search_value}&sortBy=${this.state.sortBy}&pageSize=${this.state.pageSize.toString()}&page=${this.state.page.toString()}&apiKey=83c78226acad413893294f74e8011e96`
        axios.get(url)
            .then(response => {
                this.setState({ 
                    articles: response.data.articles,
                    isLoaded: true 
                });
            })
    }

    handleEvent = (e) => {
        const value = e.target.value;
        this.setState({
          search_value: value,
        });

        this.componentDidMount()
    }


    nextPage() {
        this.setState({ page: this.state.page+1 });

        let url = `http://newsapi.org/v2/top-headlines?country=us&q=${this.state.search_value}&sortBy=${this.state.sortBy}&pageSize=${this.state.pageSize}&page=${this.state.page.toString()}&apiKey=83c78226acad413893294f74e8011e96`
        axios.get(url)
            .then(response => {
                this.setState({
                    articles: this.state.articles.concat((response.data.articles).filter((item) => this.state.articles.indexOf(item) < 0)),
                    isLoaded: true 
                });
            })
        
    }


    render() {
        return (
            <div className="search">
                <Container>
                    <div className="searchBar">
                        <InputGroup size="lg">
                            <FormControl className="searchInput" placeholder="Try Guardian" onChange={this.handleEvent} />
                        </InputGroup>
                    </div>

                    <News isLoaded={this.state.isLoaded} articles={this.state.articles} />
                    <button type="button" onClick={this.nextPage}>Next</button>
                </Container>
                
            </div>
            
        );
    }
}