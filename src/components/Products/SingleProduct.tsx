import React, { ReactElement, useContext, useState } from 'react';
import {
  ButtonContainerStyle,
  ButtonStyle,
  ImageAndDescriptionContainer,
  Overlay,
  PriceContainer,
  ProductDescription,
  ProductNameContainer,
  SingleProductContentStyle,
} from './ProductsPageStyle';
import {
  getBasketContent,
  addToBasket,
} from '../../context/actions/basketActions';
import {
  addToWishlist,
  getWishlistContent,
  removeFromWishlist,
} from '../../context/actions/wishlistActions';
import { AppContext } from '../../context/context';
import { Product } from '../../types/Product';
import { SingleProductContainer, StyledImage } from './ProductsPageStyle';

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props): ReactElement {
  const { currentState, dispatch } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);

  const disableAddBasket =
    currentState.basket &&
    currentState?.basket?.items.filter((item) => item.id === product.id)
      .length !== 0;

  const inWishList =
    currentState.wishlist &&
    currentState?.wishlist.filter((item) => item.id === product.id).length !==
      0;

  const renderButtonsConditionally = () => {
    return !inWishList ? (
      <ButtonStyle
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          addToWishlist(product.id).then((response) => {
            if (response?.success) {
              getWishlistContent().then((res) => {
                dispatch({ type: 'setWishlist', payload: res });
                setDisabled(false);
              });
            }
          });
        }}
      >
        Add To Wishlist
      </ButtonStyle>
    ) : (
      <ButtonStyle
        disabled={disabled}
        onClick={() =>
          removeFromWishlist(product.id).then((response) => {
            setDisabled(true);
            if (response?.success) {
              getWishlistContent().then((res) => {
                dispatch({ type: 'setWishlist', payload: res });
                setDisabled(false);
              });
            }
          })
        }
      >
        Remove From Wishlist
      </ButtonStyle>
    );
  };

  return (
    <SingleProductContainer>
      <ImageAndDescriptionContainer>
        <StyledImage src={product.image} alt={product.name} />
        <Overlay>
          <ProductDescription>{product.description}</ProductDescription>
          <ButtonContainerStyle>
            <ButtonStyle
              disabled={disableAddBasket}
              onClick={() =>
                addToBasket(product.id).then((response) => {
                  if (response?.success) {
                    getBasketContent().then((res) =>
                      dispatch({ type: 'setProductsInBasket', payload: res })
                    );
                  }
                })
              }
            >
              Add To Basket
            </ButtonStyle>
            {renderButtonsConditionally()}
          </ButtonContainerStyle>
        </Overlay>
      </ImageAndDescriptionContainer>
      <SingleProductContentStyle>
        <ProductNameContainer>{product.name}</ProductNameContainer>
        <PriceContainer>
          {product.price} {product.currency}
        </PriceContainer>
      </SingleProductContentStyle>
    </SingleProductContainer>
  );
}
