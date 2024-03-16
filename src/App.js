import React from "react";
// import Menu from "./components/Menu"
import Splash from "./pages/splash/splash";
import Faq from './pages/faq/Faq';
import { Routes, Route } from "react-router-dom";
// import About from "./"


function App() {
  return (
    <Routes>
      <Route index element={<Splash />}></Route>
      {/* <Route path="menu" element={<Menu />}></Route> */}
      {/* <Route path="about" element={<About />}></Route> */}
      <Route path="faq" element={<Faq />}></Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
