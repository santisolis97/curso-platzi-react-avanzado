import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router, Link } from "@reach/router";
import { Detail } from "./pages/Detail";
import { Navbar } from "./components/NavBar";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <div>
      <GlobalStyle />
      <Link to="/">
        <Logo />
      </Link>
      <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
          <Detail path="/detail/:detailId"/>
        </Router>
        <Navbar/> 
    </div>
  );
};
