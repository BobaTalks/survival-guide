import React from "react";
import MainMenu from "./components/mainMenu/main_menu";
import Splash from "./pages/splash";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Splash />}></Route>
      <Route path="menu" element={<MainMenu />}></Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
