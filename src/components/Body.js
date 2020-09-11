import React, { Component } from 'react';
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
            articles: null,
            search_value: "",
            page: 1,
        }

        this.handleEvent = this.handleEvent.bind(this);
        this.nextPage = this.nextPage.bind(this)
    }

    async componentDidMount() {
        let url = `http://newsapi.org/v2/top-headlines?country=us&q=${this.state.search_value}&sortBy=publishedAt&pageSize=5&page=${this.state.page.toString()}&apiKey=83c78226acad413893294f74e8011e96`;

        const response = await fetch(url);
        const data = await response.json();
        this.setState({ articles: data.articles, isLoaded: true });
    }

    handleEvent = (e) => {
        const value = e.target.value;
        this.setState({
          search_value: value,
        });

        this.componentDidMount()
    }


    nextPage() {
        this.setState({
            page: this.state.page + 1,
        });
        console.log(this.state.page)
        this.componentDidMount()
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