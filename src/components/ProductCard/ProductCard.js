import React from "react";
import "./ProductCard.css";

import Card from "react-bootstrap/Card";

// props: title, url_image, url, publisher, publishedAt
const ProductCard = (props) => {
  return (
    <a href={process.env.PUBLIC_URL + "/produto/" + props.id}>
      <Card className="my-4 hvr-card">
        <div className="m-4">
          <Card.Img src={props.url_image} />
        </div>

        <Card.Title className="title mx-auto p-3">
          <h5>{props.name.length >= 35 ? props.name.substring(0, 35) + '...' : props.name}</h5>
        </Card.Title>

        <Card.Title className="mx-auto mt-n4">
          <h4 className="price m-3">
            R$ {props.price.toFixed(2).replace(".", ",")}
          </h4>
        </Card.Title>
      </Card>
    </a>
  );
};

export default ProductCard;
