import React, { ReactElement, useContext } from 'react';
import {
  getBasketContent,
  removeFromBasket,
} from '../../context/actions/basketActions';
import { AppContext } from '../../context/context';
import BasketItem from './BasketItem';
import {
  BasketHeaderContainer,
  BasketHeader,
  BasketItemsContainer,
  AddPadding,
  BasketPageContainer,
  EmptyBasketStyle,
  CheckoutBtn,
  BasketContainer,
} from './BasketPageStyles';

interface Props {}

export default function BasketPage({}: Props): ReactElement {
  const { currentState, dispatch } = useContext(AppContext);

  const removeItem = (id: number) => {
    removeFromBasket(id).then((res: any) => {
      if (res?.success) {
        getBasketContent().then((res) =>
          dispatch({ type: 'setProductsInBasket', payload: res })
        );
      }
    });
  };

  if (!currentState.basket || currentState.basket.numOfItems === 0)
    return <EmptyBasketStyle>Basket is empty</EmptyBasketStyle>;

  return (
    <BasketPageContainer>
      <BasketContainer>
        <BasketHeaderContainer>
          <BasketHeader>Basket</BasketHeader>
        </BasketHeaderContainer>
        <AddPadding>
          <BasketItemsContainer>
            {currentState.basket &&
              currentState.basket.items &&
              currentState.basket.items.map((product) => (
                <BasketItem
                  key={product.id}
                  product={product}
                  removeItem={removeItem}
                />
              ))}
          </BasketItemsContainer>
        </AddPadding>
        <AddPadding>
          <CheckoutBtn>CHECKOUT</CheckoutBtn>
        </AddPadding>
      </BasketContainer>
    </BasketPageContainer>
  );
}
