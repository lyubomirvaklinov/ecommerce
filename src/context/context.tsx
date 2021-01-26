import React, { useReducer, useEffect } from 'react';
import { getAllProducts } from '../context/actions/productsActions';
import { getBasketContent } from '../context/actions/basketActions';
import { Product } from '../types/Product';
import { Basket } from '../types/Basket';
import { getWishlistContent } from './actions/wishlistActions';
import { WishList } from '../types/Wishlist';

export interface ApplicationState {
  products: Product[];
  basket: Basket;
  wishlist: WishList;
}

interface ActionInterface {
  type: string;
  payload: any;
}

export interface AppContextInterface {
  currentState: ApplicationState;
  dispatch: any;
}

function reducer(state: ApplicationState, action: ActionInterface) {
  switch (action.type) {
    case 'setAllProducts':
      return { ...state, products: action.payload };
    case 'setProductsInBasket':
      return { ...state, basket: action.payload };
    case 'setWishlist':
      return { ...state, wishlist: action.payload };
    default:
      throw new Error();
  }
}

export const AppContext = React.createContext<AppContextInterface>({
  currentState: {
    products: [],
    basket: { total: 0, numOfItems: 0, items: [] },
    wishlist: [],
  },
  dispatch: () => {},
});

export function AppContextProvider({ children }: any) {
  const initialState = {
    products: [],
    basket: { total: 0, numOfItems: 0, items: [] },
    wishlist: [],
  };
  const [currentState, dispatch] = useReducer<
    React.Reducer<ApplicationState, any>
  >(reducer, initialState);

  useEffect(() => {
    getAllProducts().then((res) =>
      dispatch({ type: 'setAllProducts', payload: res })
    );
    getBasketContent().then((res) =>
      dispatch({ type: 'setProductsInBasket', payload: res })
    );
    getWishlistContent().then((res) => {
      dispatch({ type: 'setWishlist', payload: res });
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentState,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
