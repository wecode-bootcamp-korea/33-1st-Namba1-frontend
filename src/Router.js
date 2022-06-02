import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Main from './pages/Main/Main.js';
import Review from './pages/Review/Review.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
