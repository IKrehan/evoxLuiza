import React from "react";
import DefaultThumb from "../media/defaultThumb.png";
import ProductCard from "../ProductCard/ProductCard";
import "./Feed.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Feed = (props) => {
  return (
    <Row className="products my-3">
      {props.products.map((product, index) =>
        product.urlToImage ? (
          <Col md={3}>
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              urlToImage={product.urlToImage}
              url={product.url}
              price={product.price}
            />
          </Col>
        ) : (
          <Col md={3}>
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              urlToImage={DefaultThumb}
              url={product.url}
              price={product.price}
            />
          </Col>
        )
      )}
    </Row>
  );
};

export default Feed;
