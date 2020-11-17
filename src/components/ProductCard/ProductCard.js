import React, { Component } from 'react';
import './ProductCard.css';

import Card from 'react-bootstrap/Card';

// props: title, urlToImage, url, publisher, publishedAt
export default class ProductCard extends Component {
    render() {
        return (
            <a href={this.props.url}>
                <Card className="my-4 hvr-grow">
                    <div className="m-4">
                        <Card.Img src={this.props.urlToImage} />
                    </div>

                    <Card.Title className="title mx-auto p-3">
                        <h5>{this.props.title}</h5>
                    </Card.Title>

                    <Card.Title className="mx-auto mt-n4">
                        <h4 className="price m-3">R$ {this.props.price},00</h4>
                    </Card.Title>
                </Card>
            </a>
        );
    }
}