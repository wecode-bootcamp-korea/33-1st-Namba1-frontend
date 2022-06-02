import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Category from './components/category/Category';
import Order from './components/Order';
import MenuCard from './components/MenuCard';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Top from '../../../components/Top/Top';
import './Menu.scss';

const Menu = () => {
  const [menuCard, setMenuCard] = useState([]);
  const [title, setTitle] = useState('전체');
  const navigate = useNavigate();
  const location = useLocation();

  const [filterItem, setFilterItem] = useState({
    themeValue: '',
    sortValue: '',
    searchValue: '',
  });

  const titleHandler = event => {
    setTitle(event.target.innerText);
  };

  useEffect(() => {
    fetch(`http://10.58.2.60:8000/products${location.search}`)
      .then(response => response.json())
      .then(data => setMenuCard(data.product_list));
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterItem.themeValue ? `themeId=${filterItem.themeValue}` : ''
    }${filterItem.sortValue ? `&sort=${filterItem.sortValue}` : ''}${
      filterItem.searchValue ? `&search=${filterItem.searchValue}` : ''
    }`;
    navigate(queryString);
  }, [filterItem, navigate]);

  const getCategoryIdx = categoryIdx => {
    setFilterItem(prev => {
      return { ...prev, themeValue: categoryIdx };
    });
  };

  const getOrderIdx = orderIdx => {
    setFilterItem(prev => {
      return { ...prev, sortValue: orderIdx };
    });
  };

  const updateSearchTerms = value => {
    setFilterItem(prev => {
      return { ...prev, searchValue: value };
    });
  };

  return (
    <>
      <div className="menu">
        <Nav />
        <header className="category">
          <Category
            titleHandler={titleHandler}
            getCategoryIdx={getCategoryIdx}
            updateSearchTerms={updateSearchTerms}
          />
        </header>
        <div className="filter">
          <Order title={title} getOrderIdx={getOrderIdx} />
        </div>
        <div className="contentDisplay">
          {menuCard.map(
            ({ id, name, serving, cookTime, spice, price, image }) => (
              <MenuCard
                key={id}
                id={id}
                name={name}
                serving={serving}
                cookTime={cookTime}
                spice={spice}
                price={price}
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
      <Footer />
    </>
  );
};

export default Menu;
