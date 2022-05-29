import React, { useEffect, useState } from 'react';
import Category from './components/category/Category';
import Order from './components/Order';
import MenuDisplay from './components/MenuDisplay';
import Top from '../../../components/Top/Top';
import './Menu.scss';

const Menu = () => {
  const [menuDisplay, setMenuDisplay] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.209:8000/products/list')
      .then(response => response.json())
      .then(data => setMenuDisplay(data.product_list));
  }, []);

  return (
    <div className="menu">
      <header className="category">
        <Category />
      </header>
      <div className="filter">
        <Order />
      </div>
      <div className="contentDisplay">
        {menuDisplay.map(
          ({
            id,
            name,
            serving,
            cookTime,
            prepTime,
            spice,
            price,
            totalReviews,
            image,
          }) => (
            <MenuDisplay
              key={id}
              name={name}
              servings={serving}
              cookTime={cookTime}
              prepTime={prepTime}
              spice={spice}
              price={price}
              totalReviews={totalReviews}
              image={image}
            />
          )
        )}
      </div>
      <div className="pageNum">
        <button className="pageBtn">1</button>
      </div>
      <Top />
    </div>
  );
};

export default Menu;
