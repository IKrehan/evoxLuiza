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
  const [searchValue, setSearchValue] = useState('')

  async function fetchData(url) {
    await axios
      .get(url, {
        "query": searchValue
      })
      .then(function(response) {
        setProducts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData("https://evoxluiza-api.herokuapp.com/product");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .post("https://evoxluiza-api.herokuapp.com/search", {"query": searchValue })
      .then(function(response) {
        setProducts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(products)
  }


  return (
    <>
      <Header />
      <Container className="search mt-n4">
        <form className="searchBar rounded" onSubmit={handleSearch}>
          <InputGroup size="lg">
            <img className="m-3" src={searchIcon} alt="" />
            <FormControl
              className="searchInput my-auto"
              placeholder="Try Guardian"
              value={searchValue}
              onChange={e => {setSearchValue(e.target.value)}}
            />
          </InputGroup>
          <button type="submit" hidden></button>
        </form>

        <UpToButton />
        <Feed isLoaded={true} products={products} />
      </Container>
    </>
  );
};

export default HomePage;
