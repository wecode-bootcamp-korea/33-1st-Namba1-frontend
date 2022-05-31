import React, { useEffect, useState } from 'react';
import Category from './components/category/Category';
import Order from './components/Order';
import MenuCard from './components/MenuCard';
import Top from '../../../components/Top/Top';
import './Menu.scss';

const Menu = () => {
  const [menuCard, setMenuCard] = useState([]);
  const [title, setTitle] = useState('전체');

  const titleHandler = event => {
    setTitle(event.target.innerText);
  };

  useEffect(() => {
    fetch('http://10.58.1.100:8000/products')
      .then(response => response.json())
      .then(data => setMenuCard(data.product_list));
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
        {menuCard.map(({ id }, menu) => (
          <MenuCard key={id} {...menu} />
        ))}
      </div>
      <div className="pageNum">
        <button className="pageBtn">1</button>
      </div>
      <Top />
    </div>
  );
};

export default Menu;
