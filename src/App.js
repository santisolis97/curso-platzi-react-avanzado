import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router, Link } from "@reach/router";

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
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
};
