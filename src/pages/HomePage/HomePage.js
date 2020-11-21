import React, { useState, useEffect } from "react";

import axios from "axios";

import "./HomePage.css";
import searchIcon from "../../components/media/searchIcon.svg";
import Feed from "../../components/Feed/Feed";
import UpToButton from "../../components/UpToButton/UpToButton";
import Header from "../../components/Header/Header";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const HomePage = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:5000/product")
        .then(function(response) {
        setProducts(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    fetchData();
  }, []);


  return (
    <>
      <Header />
      <Container className="search mt-n4">
        <div className="searchBar rounded">
          <InputGroup size="lg">
            <img className="m-3" src={searchIcon} alt="" />
            <FormControl
              className="searchInput my-auto"
              placeholder="Try Guardian"
              onChange={null}
            />
          </InputGroup>
        </div>

        <UpToButton />
        <Feed isLoaded={true} products={products} />
      </Container>
    </>
  );
};

export default HomePage;
