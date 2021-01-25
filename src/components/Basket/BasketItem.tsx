import React, { ReactElement } from 'react';
import { FlexColumnDivCentered } from '../../common/commonStyles';
import { increaseItemQty } from '../../context/actions/basketActions';
import { Product } from '../../types/Product';
import {
  BasketContentLabel,
  BasketImg,
  BasketRemoveBtn,
  BasketSingleItemContainer,
  ChangeQty,
  GeneralInfo,
  ProductBasicInfoContainer,
  ProductPrice,
  ProductQtyContainer,
} from './BasketPageStyles';

interface Props {
  product: Product & { quantity: number };
  removeItem: any;
}

export default function BasketItem({
  product,
  removeItem,
}: Props): ReactElement {
  return (
    <BasketSingleItemContainer>
      <BasketImg src={product.image} alt={product.name} />
      <ProductBasicInfoContainer>
        <GeneralInfo>
          <BasketContentLabel>Name: </BasketContentLabel>
          <div>{product.name}</div>
          <BasketContentLabel>Color: </BasketContentLabel>
          <div>{product.color}</div>
          <BasketContentLabel>Material: </BasketContentLabel>
          <div>{product.material}</div>
        </GeneralInfo>
        <FlexColumnDivCentered>
          <ProductQtyContainer>
            <ChangeQty>+</ChangeQty>
            {product.quantity}
            <ChangeQty>-</ChangeQty>
          </ProductQtyContainer>
          <ProductPrice>
            {product.price} {product.currency}{' '}
          </ProductPrice>
        </FlexColumnDivCentered>
        <BasketRemoveBtn onClick={() => removeItem(product.id)}>
          Remove
        </BasketRemoveBtn>
      </ProductBasicInfoContainer>
    </BasketSingleItemContainer>
  );
}
