import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaveBar from "./components/NaveBar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { useState } from "react";
import OrderConfirmation from "./pages/OrderConfirmation";
import SearchProduct from "./pages/SearchProduct";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [orderConfirmData, setOrderConfirmData] = useState({});
  console.log(orderConfirmData);
  return (
    <BrowserRouter>
      <NaveBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SearchProduct" element={<SearchProduct />} />
        <Route path="/Contact" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route
          path="/Checkout"
          element={<CheckOut setData={setOrderConfirmData} />}
        />
        <Route
          path="/OrderConfirmation"
          element={<OrderConfirmation orderData={orderConfirmData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
