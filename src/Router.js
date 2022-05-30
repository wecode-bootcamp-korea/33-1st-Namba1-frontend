import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main.js';
import Review from './pages/Review/Review.js';
import Menu from './pages/Menu/Menu/Menu.js';
import Product from './pages/Menu/Product/Product.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review" element={<Review />} />
        <Route path="/products" element={<Menu />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
