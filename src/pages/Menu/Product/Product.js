import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import Top from '../../../components/Top/Top';

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const {
    id,
    name,
    description,
    serving,
    cookTime,
    prepTime,
    price,
    spice,
    image,
  } = product;

  console.log('product', product);

  useEffect(() => {
    console.log('params.id', params.id);

    fetch(`/data/detail.json`)
      .then(response => {
        return response.json();
      })
      .then(data => setProduct(data));

    // state change
    // props change
    // parent render
  }, [params.id]);

  return (
    <div className="product">
      {id && (
        <>
          <ProductImages key={id} name={name} image={image} />
          <ProductInfo
            name={name}
            description={description}
            servings={serving}
            cookTime={cookTime}
            prepTime={prepTime}
            spice={spice}
            price={price}
          />
        </>
      )}
      <Top />
    </div>
  );
};

export default Product;
