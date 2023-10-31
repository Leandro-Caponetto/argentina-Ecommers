/** @format */

import React, { useState } from "react";

import CommonSection from "../components/Ui/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import products from "../assets/data/products";
import ProductLists from "../components/Ui/ProductsList";

const Shop = () => {
  const [productsData, setPruductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "bota") {
      const filteredProducts = products.filter(
        (item) => item.category === "bota"
      );

      setPruductsData(filteredProducts);
    }

    if (filterValue === "zapato") {
      const filteredProducts = products.filter(
        (item) => item.category === "zapato"
      );

      setPruductsData(filteredProducts);
    }

    if (filterValue === "zapatilla") {
      const filteredProducts = products.filter(
        (item) => item.category === "zapatilla"
      );

      setPruductsData(filteredProducts);
    }
    if (filterValue === "sandalia") {
      const filteredProducts = products.filter(
        (item) => item.category === "sandalia"
      );

      setPruductsData(filteredProducts);
    }
    if (filterValue === "cartera") {
      const filteredProducts = products.filter(
        (item) => item.category === "cartera"
      );

      setPruductsData(filteredProducts);
    }
    if (filterValue === "borcego") {
      const filteredProducts = products.filter(
        (item) => item.category === "borcego"
      );

      setPruductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPruductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Productos" />
      <Col>
        <div className="banner">
          <div className="banner-text">
            <img
              src="https://www.gifsanimados.org/data/media/359/santa-claus-y-papa-noel-imagen-animada-0420.gif"
              alt=""
            />{" "}
            Descuentos de Navidad en todos los productos. ¡Aproveche! LAS
            COMPRAS SE REALIZAN POR WHATSAPP
          </div>
        </div>
      </Col>

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>filter By Category</option>
                  <option value="bota">Botas</option>
                  <option value="zapato">Zapatos</option>
                  <option value="zapatilla">Zapatillas</option>
                  <option value="sandalia">Sandalias</option>
                  <option value="cartera">Carteras</option>
                  <option value="borcego">Borcegos</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascendig">Ascendig</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductLists data={productsData} />
            )}
          </Row>
        </Container>
      </section>
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=1128398509">
          <img
            src="https://moein.video/wp-content/uploads/2021/12/Whatsapp-Logo-GIF-WhatsApp-Icon-GIF-Royalty-Free-Animated-Icon-GIF-350px-after-effects-project.gif"
            alt="whatsapp"
          />
        </a>
      </div>
      {/* <div class="news-banner">
        <div class="news-content">
          <span class="brand">TuMarca.com</span>
          <span class="sales-info">
            ¡Gran venta de productos! Hasta un 50% de descuento.
          </span>
        </div>
      </div> */}
    </Helmet>
  );
};

export default Shop;
