/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
// img-------------------------------------------

import productImg9p from "../assets/images/zapatos/zapato9/zapato9.1.png";
import productImg18p from "../assets/images/zapatos/zapato18/zapato18.1.png";
import productImg28p from "../assets/images/zapatos/zapato28/zapato28.1.png";
import productImgCart1 from "../assets/images/zapatos/cartera1/cartera1.1.png";
import productImgCart4 from "../assets/images/zapatos/cartera4/cartera4.1.png";
import productImgCart8 from "../assets/images/zapatos/cartera8/cartera8.1.png";
import productImg29p from "../assets/images/zapatos/zapato29/zapato29.1.png";
import productImg31p from "../assets/images/zapatos/zapato31/zapato31.1.png";
import productImg2p from "../assets/images/zapatos/zapato2/zapato2.1.png";
import "../styles/product-details.css";

const ProductCarousel = () => {
  return (
    <Container className="bg-light">
      <Row>
        <Col lg={6} className="mt-5 carta">
          {/* <div className="card mb-3">
            <img
              className="card-img img-fluid"
              src={productImg6p}
              alt="Card image cap"
              id="product-detail"
            />
          </div> */}
          <div className="row">
            <Col xs={2} className="align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="prev">
                <i className="text-dark fas fa-chevron-left"></i>
                <span className="sr-only">Previous</span>
              </a>
            </Col>
            <Col xs={8}>
              <Carousel id="multi-item-example" controls={false}>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImg9p}
                          alt="Product Image 1"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImg18p}
                          alt="Product Image 2"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImg28p}
                          alt="Product Image 3"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImgCart1}
                          alt="Product Image 4"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImgCart4}
                          alt="Product Image 5"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImgCart8}
                          alt="Product Image 6"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a >
                        <img
                          className="card-img img-fluid"
                          src={productImg29p}
                          alt="Product Image 7"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a>
                        <img
                          className="card-img img-fluid"
                          src={productImg31p}
                          alt="Product Image 8"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a>
                        <img
                          className="card-img img-fluid"
                          src={productImg2p}
                          alt="Product Image 9"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={2} className="align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="next">
                <i className="text-dark fas fa-chevron-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCarousel;
