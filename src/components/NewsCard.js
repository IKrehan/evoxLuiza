import React, { Component } from 'react';
import './NewsCard.css';

import Moment from 'react-moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// props: title, urlToImage, url, publisher, publishedAt
export default class NewsCard extends Component {
    render() {
        return (
            <Card className="my-3">
                <Row>
                    <Col md={3} className="m-4">
                        <Card.Img src={this.props.urlToImage} />
                    </Col>

                    <Col md={6} className="my-auto"> 
                        <Card.Title className="title">
                            <a href={this.props.url}>{this.props.title}</a>
                        </Card.Title>
                        
                        <h5><span class="badge publisher">{this.props.publisher}</span></h5>
                                                
                    </Col>

                    <Col md={2} className="date m-auto">
                        
                        <Card.Text>
                            <Moment format="DD/MM/YYYY" date={this.props.publishedAt} />
                        </Card.Text>
                    </Col>

                </Row>
            </Card>
            
        );
    }
}