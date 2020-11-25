import React, { useState, useEffect, useCallback } from "react";
import { useParams, withRouter  } from 'react-router-dom';

import axios from "axios";

import "./ProductForm.css";
import Header from "../../components/Header/Header";
import Dropzone from "../../components/Dropzone/Dropzone";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";



const ProductForm = (props) => {
  const [readOnly, setReadOnly] = useState(false)
  const [show, setShow] = useState(false);

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImage, setProductImage] = useState('')


  let { id } = useParams();
  let idIsNumber = Number(id) === parseInt(id, 10);

  const completeFields = async (product_id) => {
    await axios.get("https://evoxluiza-api.herokuapp.com/product/" + product_id)
        .then(function(response) {
          setProductName(response.data.name);
          setProductPrice(response.data.price);
          setProductImage(response.data.url_image);
        })
        .catch(function(error) {
          console.log(error);
        });
  };
  

  useEffect(() =>{
      if (idIsNumber) {
        setReadOnly(true);
        completeFields(id);
      } else if (id !== "add") {
      props.history.push('/produto/add');
    }
  }, [id, idIsNumber, props.history]);


  const onDrop = useCallback(async (acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/krehan/image/upload";

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "jscvjo53");

    const response = await axios.post(url, formData)
    setProductImage(response.data.secure_url);
  }, []);

  const deleteProduct = () => {
    axios.delete("https://evoxluiza-api.herokuapp.com/product/" + id);
    props.history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      
    let url = idIsNumber ? "https://evoxluiza-api.herokuapp.com/product/" + id : "https://evoxluiza-api.herokuapp.com/product"
    axios.post(url, {
      "name": productName,
      "price": productPrice,
      "url_image": productImage
    })
    .then((response) => {
      const urlProduct = "/produto/" + response.data.id;
      editMode();
      props.history.push(urlProduct);
    });
  }

  const editMode = () => {
    setReadOnly(!readOnly);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Header />
      <Container className="">
        <h1 className="my-5">{idIsNumber ? `Produto ${id}` : "Adicione um produto"}</h1>

        <div className="d-flex justify-content-end">
          <Button className="m-2 float-right" variant="primary" type="button" onClick={editMode} hidden={!readOnly}>
            <span className="mx-5">Editar Produto</span>
          </Button>

          <Button className="m-2 float-right" variant="danger" type="button" onClick={handleShow} hidden={!readOnly}>
            <span className="mx-5">Deletar Produto</span>
          </Button>
        </div>


        <Form onSubmit={handleSubmit}>
          <fieldset disabled={readOnly}>
          <Row>
            <Col className="p-4 mt-n4" md={4}>
              <div className="inputBox p-3">
                <span id="fileError"></span>
                <Dropzone image={productImage} onDrop={onDrop} />
              </div>
            </Col>

            <Col md={8}>
              <Form.Group controlId="formProductName">
                <Form.Label>Nome do Produto</Form.Label>
                <Form.Control size="lg" type="text" value={productName} onChange={e => setProductName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formProductPrice">
                <Form.Label>Preço do Produto</Form.Label>
                <Form.Control size="lg" type="number" step="0.01" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  size="lg"
                  className="m-3"
                  variant="primary"
                  type="submit"
                  hidden={readOnly}
                >
                  <span className="mx-5">{idIsNumber ? "Editar" : "Adicionar"}</span>
                </Button>

                <Button
                  size="lg"
                  className="m-3"
                  variant="danger"
                  type="button"
                  hidden={readOnly || !idIsNumber}
                  onClick={() => {
                    editMode();
                    completeFields(id);
                  }}
                >
                  <span className="mx-5">Cancelar</span>
                </Button>
              </div>
            </Col>
          </Row>
        </fieldset>
        </Form>
      </Container>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Produto?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(ProductForm);
