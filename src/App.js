import React from 'react';
// import Menu from "./pages/menu";
import Splash from './pages/splash/splash';
import { Routes, Route } from 'react-router-dom';
import Faq from './pages/faq/Faq';
import Housing from './pages/housing/Housing';
import APIB from './pages/AP_IB';
import Internship from './pages/Internship';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Splash />}></Route>
      <Route path="faq" element={<Faq />}></Route>
      <Route path="housing" element={<Housing />}></Route>
      <Route path="apib" element={<APIB />}></Route>
      <Route path="internship" element={<Internship />}></Route>
      {/* <Route path="menu" element={<Menu />}></Route> */}
      {/* <Route path="about" element={<About />}></Route> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
export default App;
