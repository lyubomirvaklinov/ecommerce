import styled, { css, keyframes } from 'styled-components';
import { beige, mustard, compote, darkBlue } from './../../common/colors';
import {
  borderRadius10px,
  FlexColumnDiv,
  FlexRowDivCentered,
} from './../../common/commonStyles';
import { FlexColumnDivCentered } from '../../common/commonStyles';

// keyframes

export const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

//  Products page styles

export const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  margin-top: 2rem;

  @media (max-width: 1295px) {
    height: 100%;
  }
`;

export const ProductsHeader = styled.h1`
  color: ${darkBlue};
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid ${darkBlue};
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100%;
  height: 80%;

  @media (max-width: 1000px) {
    justify-content: center;
    margin: 10px 0;
  }
`;

//  Single Product styles

export const SingleProductContainer = styled(FlexColumnDivCentered)`
  width: 20rem;
  height: 50%;

  padding: 3px;
  margin: 1rem 0;

  ${borderRadius10px};
  background-color: #f2f2f2;

  box-shadow: 5px 10px 10px #cbd0d8;

  @media (max-width: 1000px) {
    align-items: center;
    flex: 0 50%;
  }
`;

export const SingleProductContentStyle = styled(FlexColumnDivCentered)`
  height: 20%;
  text-align: center;
  padding: 0.5rem;
`;

export const PriceContainer = styled.div`
  font-weight: 700;
  margin: 0.2rem 0;
  color: ${compote};
`;

export const ProductNameContainer = styled.div`
  font-weight: 350;
  letter-spacing: 1.5px;

  margin: 0.2rem 0;
`;

export const ProductDescription = styled.div`
  font-weight: 200;
  line-height: 1.6;

  @media (max-width: 500px) {
    display: none;
  }
`;

//  Image

export const Overlay = styled(FlexColumnDiv)`
  position: absolute;
  justify-content: space-around;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  align-items: center;
  text-align: center;

  visibility: hidden;
  padding: 0 0.3rem;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  color: ${beige};
  ${borderRadius10px};
`;

export const ImageAndDescriptionContainer = styled.div`
  position: relative;
  &:hover ${Overlay} {
    visibility: visible;
    animation: ${fade} 0.5s;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 400px;
  ${borderRadius10px};
`;

//  Buttons styles

export const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${mustard};
  color: ${beige};
  font-size: 1rem;
  ${borderRadius10px};
  padding: 5px 3px;
  width: 40%;
  min-height: 3rem;
  &:hover {
    transition: 0.3s;
    background: rgba(147, 120, 30, 0.5);
  }
  @media (max-width: 600px) {
    width: 70%;
    font-size: 0.8rem;
    margin: 0.2rem 0;
    height: auto;
  }

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(147, 120, 30, 0.5);
    `};
`;

//  Empty products list

export const EmptyProductsPage = styled(FlexRowDivCentered)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 100vh;
`;
