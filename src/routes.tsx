import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </BrowserRouter>
  );
}
export default Routes;
