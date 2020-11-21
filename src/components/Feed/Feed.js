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
        product.url_image ? (
          <Col md={3}>
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              url_image={product.url_image}
              url={product.url}
              price={product.price}
            />
          </Col>
        ) : (
          <Col md={3}>
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              url_image={DefaultThumb}
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
