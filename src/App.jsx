import React, { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
