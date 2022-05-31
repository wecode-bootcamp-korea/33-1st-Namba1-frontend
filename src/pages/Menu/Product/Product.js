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

  useEffect(() => {
    fetch(`http://10.58.1.100:8000/products/${params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data.product_detail));
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
