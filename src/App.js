import React from "react";
// import Menu from "./pages/menu";
import Splash from "./pages/splash";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Splash />}></Route>
      {/* <Route path="menu" element={<Menu />}></Route> */}
      {/* <Route path="about" element={<About />}></Route> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
