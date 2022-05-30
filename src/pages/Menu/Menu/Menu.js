import React, { useEffect, useState } from 'react';
import Category from './components/category/Category';
import Order from './components/Order';
import MenuDisplay from './components/MenuDisplay';
import Top from '../../../components/Top/Top';
import './Menu.scss';

const Menu = () => {
  const [menuDisplay, setMenuDisplay] = useState([]);
  const [title, setTitle] = useState('전체');

  const titleHandler = event => {
    setTitle(event.target.innerText);
  };

  useEffect(() => {
    fetch('http://10.58.1.100:8000/products')
      .then(response => response.json())
      .then(data => setMenuDisplay(data.product_list));
  }, []);

  return (
    <div className="menu">
      <header className="category">
        <Category titleHandler={titleHandler} />
      </header>
      <div className="filter">
        <Order title={title} />
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
              id={id}
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
