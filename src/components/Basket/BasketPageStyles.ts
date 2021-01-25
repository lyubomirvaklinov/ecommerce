import styled from 'styled-components';
import {
  borderRadius10px,
  FlexColumnDiv,
  FlexColumnDivCentered,
  FlexRowDivCentered,
} from '../../common/commonStyles';
import { darkBlue, beige, compote } from './../../common/colors';

export const BasketPageContainer = styled(FlexColumnDiv)`
  min-height: 100vh;
  width: 100%;

  margin-top: 2rem;
`;

export const BasketContainer = styled(FlexColumnDivCentered)`
  border: 1px solid ${darkBlue};
  ${borderRadius10px};
  margin: 2rem 10rem;
  transition: 0.4s;
  background-color: #f2f2f2;
  @media (max-width: 1400px) {
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const BasketItemsContainer = styled(FlexColumnDivCentered)`
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const AddPadding = styled.div`
  width: 100%;
  padding: 1rem;
  @media (max-width: 600px) {
    padding: 1rem 0;
  }
`;
// Basket Item

export const BasketSingleItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${darkBlue};
  ${borderRadius10px};
  margin: 0.5rem 0;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    flex: 0 50%;
  }
`;

//  Basket image

export const BasketImg = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  ${borderRadius10px};
`;

//  Product information

export const ProductBasicInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 70%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BasketContentLabel = styled.div`
  font-weight: 700;
  color: ${compote};
`;

export const GeneralInfo = styled(FlexColumnDiv)`
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: 20%;

  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ChangeQty = styled(FlexRowDivCentered)`
  min-width: 2rem;

  cursor: pointer;
  color: ${beige};

  background-color: ${darkBlue};
`;

export const QtyAndPriceContainer = styled(FlexColumnDivCentered)`
  margin: 1rem 0;
`;

export const ProductQtyContainer = styled(FlexColumnDivCentered)`
  padding: 0.2rem 0;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const ProductPrice = styled(FlexRowDivCentered)`
  font-weight: 700;
  text-align: center;

  color: ${compote};

  padding: 0.2rem 0;
`;

//  Header

export const BasketHeaderContainer = styled(FlexRowDivCentered)`
  width: 100%;

  ${borderRadius10px};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  height: 3rem;
  padding: 1rem;

  background-color: #333d51;
`;

export const BasketHeader = styled.h1`
  color: #f4f3ea;
`;

//  Empty

export const EmptyBasketStyle = styled(FlexRowDivCentered)`
  font-size: 40px;
  height: 100vh;
`;

// Buttons

export const CheckoutBtn = styled.button`
  justify-self: center;

  height: 3rem;
  width: 100%;

  cursor: pointer;
  font-weight: 700;
  letter-spacing: 3px;

  border: none;
  ${borderRadius10px};

  color: ${compote};
  background-color: transparent;

  &:hover {
    transition: 0.3s;
    color: ${beige};
    background-color: ${compote};
  }
`;

export const BasketRemoveBtn = styled.button`
  display: flex;
  align-items: center;
  align-self: center;

  height: 1.5rem;

  padding: 1rem;
  margin: 0.5rem 0;

  font-size: 1rem;

  border: none;
  ${borderRadius10px};

  cursor: pointer;

  background-color: inherit;
  color: #93781e;

  &:hover {
    transition: 0.3s;
    color: ${beige};
    background-color: ${compote};
  }
`;
