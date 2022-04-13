// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormModal from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route exact path="/products/:id/detail">
            <ProductDetail />
          </Route>
          <Route exact path="/my-listing">
            My Listing
          </Route>
          <Route>
            Page Not Found
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
