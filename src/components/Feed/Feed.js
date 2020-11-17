import React, { Component } from 'react';
import DefaultThumb from '../media/defaultThumb.png'
import NewsCard from '../NewsCard/NewsCard';
import './Feed.css'


export default class Feed extends Component {
    render() {
        if (this.props.isLoaded) {
            return (
                <div className="news mt-5">
                    {this.props.articles.map((article, index) => (
                        (article.urlToImage)
                            ?
                            <NewsCard 
                            key={index}
                            title={article.title} 
                            urlToImage={article.urlToImage} 
                            url={article.url}
                            publishedAt={article.publishedAt}
                            publisher={article.source.name}
                            />

                            :
                            <NewsCard 
                            key={article.id}
                            title={article.title} 
                            urlToImage={DefaultThumb}
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
                     <div className="loader mx-auto"></div> 
                </div>  
            );
        }
        
    }
}