import React, { useEffect, useState } from 'react';
import './Menu.scss';
import Category from './components/Category';
import Order from './components/Order';
import MenuDisplay from './components/MenuDisplay';
import Top from '../../../components/Top/Top';

const Menu = () => {
  const [menuDisplay, setMenuDisplay] = useState([]);

  useEffect(() => {
    fetch('/data/Products.json')
      .then(response => response.json())
      .then(data => setMenuDisplay(data));
  });

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
            theme,
            name,
            description,
            servings,
            cookTime,
            prepTime,
            spice,
            price,
            totalReviews,
            image,
          }) => (
            <MenuDisplay
              key={id}
              theme={theme}
              name={name}
              description={description}
              servings={servings}
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
      <Top />
    </div>
  );
};

export default Menu;
