import React from 'react';
import DefaultThumb from '../media/defaultThumb.png'
import ProductCard from '../ProductCard/ProductCard';
import './Feed.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Feed = (props) => {
    return (
        <Row className="products my-3">
            {props.articles.map((article, index) => (
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

export default Feed;