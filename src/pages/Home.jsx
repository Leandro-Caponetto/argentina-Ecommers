import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products'

import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/zapatos/zapato1/zapato1.1.png'

import Services from '../services/Services';
import ProductsList from '../components/Ui/ProductsList';

import Clock from '../components/Ui/Clock';

import counterImg from '../assets/images/zapatos/cartera2/cartera2.1.png'


const Home = () => {



  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [movileProducts, setMovileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  
  
  const year = new Date().getFullYear()


  useEffect(()=>{
    const filteredtrendingProducts = products.filter(itme=> itme.category ==='chair'
    );
    const filteredBestSalesProducts = products.filter(itme=> itme.category ==='sofa'
    );

    const filteredMobileProducts = products.filter(itme=> itme.category ==='mobile'
    );
    const filteredWirelessProducts = products.filter(itme=> itme.category ==='wireless'
    );
    const filteredPopularProducts = products.filter(itme=> itme.category ==='watch'
    );
    



    setTrendingProducts(filteredtrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMovileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trendig product in {year}</p>
                <h2>Marke Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque beatae excepturi quibusdam. Suscipit doloribus impedit odit, ipsa totam harum.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     <Services /> 
     <section className="trending__products">
        <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Trending Products</h2>
              </Col>
              <ProductsList data={trendingProducts}/>
            </Row>
        </Container>
     </section>

     <section className="best__sales">
        <Container>
        <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProducts}/>
            </Row>
        </Container>
     </section>

     <section className="timer__count">
        <Container>
            <Row>
              <Col lg='6' md='12' className='count__down-col'>

              <div className="clock__top-content">
                <h4 className='text-white fs-6 md-2'>Descuentos exclusivos</h4>
                <h3 className='text-white fs-5 md-3'>En todas las carteras</h3>
              </div>
                <Clock/>

                <motion.button
                 whileTap={{scale: 1.2}}
                  className="buy__btn store__btn">
                  <Link to='/shop'>Visit Store</Link>
                  </motion.button>
                </Col>
              <Col lg='6' md='12' className='text-end counter__img'>
                <img src={counterImg} alt="" />
              </Col>
            </Row>
        </Container>
     </section>

      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg='12' className='text-center mb-5'>
                <h2 className='section__title'>New Arrivals</h2>
              </Col>
              <ProductsList data={movileProducts}/>
              <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
          <Col lg='12' className='text-center mb-5'>
                <h2 className='section__title'>Popular in Category</h2>
              </Col>
              <ProductsList data={popularProducts}/>
              
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home