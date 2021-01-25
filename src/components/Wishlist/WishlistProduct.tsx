import React, { ReactElement, useContext } from 'react';
import {
  getWishlistContent,
  removeFromWishlist,
} from '../../context/actions/wishlistActions';
import { AppContext } from '../../context/context';
import { Product } from '../../types/Product';
import {
  RemoveFromWishListBtn,
  WishlistContentWrapper,
  WishlistImage,
} from './WishlistStyles';

interface Props {
  product: Product;
}

export default function WishlistProduct({ product }: Props): ReactElement {
  const { dispatch } = useContext(AppContext);

  return (
    <WishlistContentWrapper>
      <h3>My Wishlist</h3>

      <WishlistImage src={product.image} />
      <div>{product.name}</div>
      <RemoveFromWishListBtn
        onClick={() =>
          removeFromWishlist(product.id).then((response) => {
            if (response?.success) {
              getWishlistContent().then((res) => {
                dispatch({ type: 'setWishlist', payload: res });
              });
            }
          })
        }
      >
        Remove
      </RemoveFromWishListBtn>
    </WishlistContentWrapper>
  );
}
