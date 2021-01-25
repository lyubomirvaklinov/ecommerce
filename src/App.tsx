import React, { useState } from 'react';
import { GlobalStyles, MainContainer } from './AppStyles';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductsPage from './components/Products/ProductsPage';
import BasketPage from './components/Basket/BasketPage';
import HeaderBar from './components/Header/HeaderBar';
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  const [wishlistState, setWishlistState] = useState<boolean>(false);

  const showWishlistConditinally = () => {
    return wishlistState && <Wishlist />;
  };
  return (
    <MainContainer>
      <GlobalStyles />
      <HeaderBar drawerState={wishlistState} toggleDrawer={setWishlistState} />
      {showWishlistConditinally()}
      <Switch>
        <Route path="/products" component={() => <ProductsPage />} />
        <Route path="/basket" component={() => <BasketPage />} />
        <Redirect to="/products" />
      </Switch>
    </MainContainer>
  );
}

export default App;
