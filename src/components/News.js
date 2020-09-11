import React, { Component } from 'react';
import "./News.css";
import NewsCard from './NewsCard';

import Container from 'react-bootstrap/Container';


export default class News extends Component {

    state = {
        isLoaded: false,
        articles: null
    }

    async componentDidMount() {
        let search_value = "tech";
        let page_value = "1"    ;
        let url = `http://newsapi.org/v2/top-headlines?country=us&q=${search_value}&sortBy=publishedAt&pageSize=5&page=${page_value}&apiKey=83c78226acad413893294f74e8011e96`;

        const response = await fetch(url);
        const data = await response.json();
        this.setState({ articles: data.articles, isLoaded: true });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="news mt-5">
                    {this.state.articles.map(article => (
                        <NewsCard 
                        title={article.title} 
                        urlToImage={article.urlToImage} 
                        url={article.url}
                        publishedAt={article.publishedAt}
                        publisher={article.source.name}
                    />
                    ))}
                </div>
                
            );
        }
        else {
            return (
                <div className="news mt-5">
                     <div class="loader mx-auto"></div> 
                </div>  
            );
        }
        
    }
}