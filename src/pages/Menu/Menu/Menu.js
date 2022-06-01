import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Category from './components/category/Category';
import Order from './components/Order';
import MenuCard from './components/MenuCard';
import Top from '../../../components/Top/Top';
import './Menu.scss';

const Menu = () => {
  const [menuCard, setMenuCard] = useState([]);
  const [title, setTitle] = useState('전체');
  const navigate = useNavigate();
  const location = useLocation();

  const titleHandler = event => {
    setTitle(event.target.innerText);
  };

  useEffect(() => {
    fetch('/data/productList.json')
      // fetch('http://10.58.1.100:8000/products${location.search}')
      .then(response => response.json())
      .then(data => setMenuCard(data));
    // .then(data => setMenuCard(data.product_list));
    // }, [location.search]);
  }, []);

  const getCategoryIdx = categoryIdx => {
    const theme = categoryIdx;
    const queryString = `?theme=${theme}`;
    navigate(`/products${queryString}`);
  };

  const getOrderIdx = orderIdx => {
    const sort = orderIdx;
    const queryString = `?theme=${theme}&sort=${sort}`;
    navigate(`/products${queryString}`);
  };

  return (
    <div className="menu">
      <header className="category">
        <Category titleHandler={titleHandler} getCategoryIdx={getCategoryIdx} />
      </header>
      <div className="filter">
        <Order title={title} getOrderIdx={getOrderIdx} />
      </div>
      <div className="contentDisplay">
        {menuCard.map(
          ({ id, name, servings, cookTime, spice, price, image }) => (
            <MenuCard
              key={id}
              id={id}
              name={name}
              servings={servings}
              cookTime={cookTime}
              spice={spice}
              price={price}
              image={image}
            />
          )
        )}
        {/* {menuCard.map(({ id }, menu) => (
          <MenuCard key={id} {...menu} />
        ))} */}
      </div>
      <div className="pageNum">
        <button className="pageBtn">1</button>
      </div>
      <Top />
    </div>
  );
};

export default Menu;
