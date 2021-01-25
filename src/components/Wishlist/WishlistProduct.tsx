import React, { ReactElement, useContext } from 'react';

import { Product } from '../../types/Product';
import {
  RemoveFromWishListBtn,
  WishlistContentWrapper,
  WishlistImage,
} from './WishlistStyles';

interface Props {
  product: Product;
  removeFromList: (id: number) => void;
}

export default function WishlistProduct({
  product,
  removeFromList,
}: Props): ReactElement {
  return (
    <WishlistContentWrapper>
      <h3>My Wishlist</h3>

      <WishlistImage src={product.image} />
      <div>{product.name}</div>
      <RemoveFromWishListBtn onClick={() => removeFromList(product.id)}>
        Remove
      </RemoveFromWishListBtn>
    </WishlistContentWrapper>
  );
}
