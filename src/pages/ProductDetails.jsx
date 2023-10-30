/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/** @format */

import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/Ui/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSice";
import { toast } from "react-toastify";
import ProductCarousel from "./ProductCarusel";
import { Carousel } from "react-bootstrap";

import productImg19 from "../assets/images/zapatos/zapato19/zapato19.1.png";
// import productImg20 from "../../assets/images/zapatos/zapato20/zapato20.1.png";
// import productImg21 from "../../assets/images/zapatos/zapato21/zapato21.1.png";
// import productImg22 from "../../assets/images/zapatos/zapato22/zapato22.1.png";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(0);

  const changeImage = (index) => {
    setActiveImage(index);
  };

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  console.log(product);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relateProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);

    toast.success("Review submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        Image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <Col>
        <div className="banner">
          <div className="banner-text">
            <img
              src="https://www.gifsanimados.org/data/media/359/santa-claus-y-papa-noel-imagen-animada-0420.gif"
              alt=""
            />{" "}
            Descuentos de Navidad en todos los productos. ¡Aproveche!
          </div>
        </div>
      </Col>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl[activeImage]} alt="" width={70} />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-item-center gap-5 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className="d-flex align-item-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="buy__btn"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>
                  <img
                    src="https://img1.picmix.com/output/stamp/normal/4/4/5/8/1748544_97708.gif"
                    alt="Gorro de Navidad"
                    className="gorro-navidad"
                  />
                </div>

                <Col>
                  <Container className="bg-light contenedor ">
                    <Row>
                      <Col lg={12} className="caja">
                        <div className="row">
                          {/* <Col xs={2} className="align-self-center">
                        <a
                          href="#multi-item-example"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <i className="text-dark fas fa-chevron-left"></i>
                          <span className="sr-only"></span>
                        </a>
                      </Col> */}
                          <Col lg={12}>
                            <Carousel
                              id="multi-item-example"
                              className=""
                              controls={false}
                            >
                              <Carousel.Item>
                                <Row className=" tarjeta " key={id}>
                                  {imgUrl.map((img, index) => (
                                    <Col className="card " key={index} xs={3}>
                                      <a onClick={() => changeImage(index)}>
                                        <img
                                          className="card-img img-fluid"
                                          src={img}
                                          alt={`Product Image ${index + 1}`}
                                        />
                                      </a>
                                    </Col>
                                  ))}
                                </Row>
                              </Carousel.Item>
                            </Carousel>
                          </Col>
                          {/* <Col xs={1} className="align-self-center">
                        <a
                          href="#multi-item-example"
                          role="button"
                          data-bs-slide="next"
                        >
                          <i className="text-dark fas fa-chevron-right"></i>
                          <span className="sr-only"></span>
                        </a>
                      </Col> */}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-item-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""} `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""} `}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li kew={index} className="mb-4">
                          <span>{item.rating} (average rating)</span>
                          <h6>Jhon Doe</h6>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Lavel yuor experience</h4>
                      <form action="" onSubmit={submitHandler} ref={reviewUser}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group  d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relateProducts} />
          </Row>
        </Container>
      </section>
      <section>
        <Row>
          <Col>
            <ProductCarousel />
          </Col>
        </Row>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
