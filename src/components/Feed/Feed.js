import React, { Component } from 'react';
import DefaultThumb from '../media/defaultThumb.png'
import ProductCard from '../ProductCard/ProductCard';
import './Feed.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Feed extends Component {
    render() {
        return (
            <Row className="products my-3">
                {this.props.articles.map((article, index) => (
                    (article.urlToImage)
                        ?
                        <Col md={3}>
                            <ProductCard 
                                key={index}
                                title={article.title} 
                                urlToImage={article.urlToImage} 
                                url={article.url}
                                price={article.price}
                            />
                        </Col>

                        :
                        <Col md={3}>
                            <ProductCard 
                                key={index}
                                title={article.title} 
                                urlToImage={DefaultThumb}
                                url={article.url}
                                price={article.price}
                            />
                        </Col>
                ))}
            </Row>
            
        );   
    }
}
