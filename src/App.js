import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </switch>
      <Footer />
    </Router>
  );
}

export default App;
