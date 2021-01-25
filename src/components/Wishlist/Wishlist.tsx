import React, { ReactElement, useContext, useState, useEffect } from 'react';
import {
  getWishlistContent,
  removeFromWishlist,
} from '../../context/actions/wishlistActions';
import { AppContext } from '../../context/context';
import { Product } from '../../types/Product';
import {
  getCurrentProducts,
  getTotalPages,
  paginate,
} from '../Pagination/utils';
import WishlistProduct from './WishlistProduct';
import {
  NavArrow,
  WishListContainer,
  WishlistProductContainer,
} from './WishlistStyles';

interface Props {}

export default function Wishlist({}: Props): ReactElement {
  const { currentState, dispatch } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(1);

  const currentProducts =
    currentState.wishlist &&
    getCurrentProducts(currentState.wishlist, currentPage, productsPerPage);

  const totalPages =
    currentState.wishlist &&
    getTotalPages(currentState.wishlist.length, productsPerPage);

  const disableNext = totalPages === 0 || currentPage === totalPages;
  const disablePrevious = totalPages === 0 || currentPage === 1;

  const removeFromList = (id: number) => {
    removeFromWishlist(id).then((response) => {
      if (response?.success) {
        getWishlistContent().then((res) => {
          dispatch({ type: 'setWishlist', payload: res });
        });
        if (currentPage === totalPages) {
          paginate(currentPage - 1, setCurrentPage);
        }
      }
    });
  };

  const renderWishlistContent = () => {
    if (!currentState.wishlist || currentState.wishlist.length === 0)
      return <h4>Your Wishlist is empty</h4>;
    return (
      currentProducts &&
      currentProducts.map((product: Product) => (
        <WishlistProductContainer key={product.id}>
          <WishlistProduct product={product} removeFromList={removeFromList} />
        </WishlistProductContainer>
      ))
    );
  };

  return (
    <WishListContainer>
      <NavArrow
        disabled={disablePrevious}
        onClick={() => paginate(currentPage - 1, setCurrentPage)}
      >
        &lt;
      </NavArrow>
      {renderWishlistContent()}
      <NavArrow
        disabled={disableNext}
        onClick={() => paginate(currentPage + 1, setCurrentPage)}
      >
        &gt;
      </NavArrow>
    </WishListContainer>
  );
}
