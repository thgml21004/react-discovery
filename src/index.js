import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

import './style/common.scss';
import Hd from './component/Header';
import Main from './component/Main';
import Ft from './component/Footer';
import NotFound from './component/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <Hd />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Ft />
  </BrowserRouter>
);
