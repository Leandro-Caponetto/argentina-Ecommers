import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../../styles/cart.css'

const ProductsList = ({ data }) => {
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Lógica para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentProducts.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
  
      {/* Paginación dentro del mismo componente */}
      <div className="pagination">
        <button className={`prev ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => paginate(currentPage - 1)}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(data.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button className={`next ${currentPage === Math.ceil(data.length / productsPerPage) ? 'disabled' : ''}`} onClick={() => paginate(currentPage + 1)}>
          Next
        </button>
      </div>
    </>
  );
  
};

export default ProductsList;
