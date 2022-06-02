import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main.js';
import Signin from './pages/Signin/Signin.js';
import Signup from './pages/Signup/Signup.js';
import Footer from './components/Footer/Footer.js';
import Review from './pages/Review/Review.js';
import Menu from './pages/Menu/Menu/Menu.js';
import Product from './pages/Menu/Product/Product.js';
import Mycart from './pages/Mycart/Mycart.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/review" element={<Review />} />
        <Route path="/products" element={<Menu />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
