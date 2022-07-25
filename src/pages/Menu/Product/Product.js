import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import ProductCarousel from './components/ProductCarousel';
import ProductInfo from './components/ProductInfo';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import API from '../../../config';

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
    fetch(`${API.products}/${params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => setProduct(data.product_detail));
  }, [params.id]);

  return (
    <>
      <div className="product">
        <Nav />
        {id && (
          <>
            <ProductCarousel key={id} name={name} image={image} />
            <ProductInfo
              name={name}
              description={description}
              serving={serving}
              cookTime={cookTime}
              prepTime={prepTime}
              spice={spice}
              price={price}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
