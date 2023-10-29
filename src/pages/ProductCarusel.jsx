/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <Container className="bg-light">
      <Row>
        <Col lg={5} className="mt-5">
          <div className="card mb-3">
            <img
              className="card-img img-fluid"
              src="assets/img/product_single_10.jpg"
              alt="Card image cap"
              id="product-detail"
            />
          </div>
          <div className="row">
            <Col xs={1} className="align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="prev">
                <i className="text-dark fas fa-chevron-left"></i>
                <span className="sr-only">Previous</span>
              </a>
            </Col>
            <Col xs={10}>
              <Carousel id="multi-item-example" controls={false}>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_01.jpg"
                          alt="Product Image 1"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_02.jpg"
                          alt="Product Image 2"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_03.jpg"
                          alt="Product Image 3"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_04.jpg"
                          alt="Product Image 4"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_05.jpg"
                          alt="Product Image 5"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_06.jpg"
                          alt="Product Image 6"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_07.jpg"
                          alt="Product Image 7"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_08.jpg"
                          alt="Product Image 8"
                        />
                      </a>
                    </Col>
                    <Col xs={4}>
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_09.jpg"
                          alt="Product Image 9"
                        />
                      </a>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={1} className="align-self-center">
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
