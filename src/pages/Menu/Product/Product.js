import React, { useState, useEffect } from 'react';
import './Product.scss';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import Top from '../../../components/Top/Top';

const Product = () => {
  const [product, setProduct] = useState([]);
  // const productId = product.match.params.productId;
  const {
    id,
    name,
    description,
    servings,
    cookTime,
    prepTime,
    spice,
    price,
    image,
  } = product;

  useEffect(() => {
    fetch('http://10.58.0.209:8000/products/list')
      .then(response => response.json())
      .then(data => setProduct(data.product_list));
  });

  return (
    <div className="product">
      <ProductImages key={id} name={name} image={image} />
      <ProductInfo
        key={id}
        name={name}
        description={description}
        servings={servings}
        cookTime={cookTime}
        prepTime={prepTime}
        spice={spice}
        price={price}
      />
      <Top />
    </div>
  );
};

export default Product;
