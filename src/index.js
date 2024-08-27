import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/common.scss';
import './style/style.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Hd from './component/Header';
import Main from './component/Main';
import Result from './component/sub/Result';
import Ft from './component/Footer';
import NotFound from './component/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <Hd />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/result" element={<Result/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Ft />
  </BrowserRouter>
);
