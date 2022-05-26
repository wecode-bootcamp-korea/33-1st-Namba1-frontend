import React from 'react';
import './Product.scss';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import Top from '../../../components/Top/Top';

const Product = () => {
  return (
    <div className="product">
      <ProductImages />
      <ProductInfo />
      <Top />
    </div>
  );
};

export default Product;
