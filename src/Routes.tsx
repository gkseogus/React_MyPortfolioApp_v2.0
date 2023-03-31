import React from 'react';
import loadable from '@loadable/component';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Main = loadable(() => import('pages'));

const RoutesAll = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesAll;
