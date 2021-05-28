import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-mv97mx2f.us.auth0.com
// pAbFok3v27v4sBYFPimyZMMVeVT38o5M
ReactDOM.render(
  <Auth0Provider
    domain="dev-mv97mx2f.us.auth0.com"
    clientId="pAbFok3v27v4sBYFPimyZMMVeVT38o5M"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
