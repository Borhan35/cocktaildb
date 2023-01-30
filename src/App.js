import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import Cocktails from "./components/Cocktails";
import NotFound from "./pages/NotFound";
import NavShare from "./shareLayout/NavShare";
import SingleCocktails from "./pages/SingleCocktails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavShare/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails/:id" element={<SingleCocktails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
