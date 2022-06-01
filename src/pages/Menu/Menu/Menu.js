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
  const [searchTerms, setSearchTerms] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const [filterItem, setFilterItem] = useState({
    themeValue: '',
    sortValue: '-id',
  });

  const titleHandler = event => {
    setTitle(event.target.innerText);
  };

  useEffect(() => {
    fetch(`http://10.58.0.124:8000/products${location.search}`)
      .then(response => response.json())
      .then(data => setMenuCard(data.product_list));
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterItem.themeValue ? `themeId=${filterItem.themeValue}` : ''
    }${filterItem.sortValue ? `&sort=${filterItem.sortValue}` : ''}`;
    navigate(queryString);
  }, [filterItem]);

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

  const updateSearchTerms = newSearchTerm => {
    setSearchTerms(newSearchTerm);
  };

  return (
    <div className="menu">
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
