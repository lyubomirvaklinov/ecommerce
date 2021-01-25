import styled, { css } from 'styled-components';
import {
  borderRadius10px,
  FlexColumnDiv,
  FlexColumnDivCentered,
} from './../../common/commonStyles';
import { beige, compote } from './../../common/colors';

export const WishListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0);

  height: 40%;
  width: 20rem;

  background-color: #cbd0d8;
  ${borderRadius10px};
  box-shadow: 1px 9px 15px -1px #333d51;
  margin-top: 1rem;
  transition: 0.4s;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const WishlistProductContainer = styled(FlexColumnDivCentered)``;

export const WishlistContentWrapper = styled(FlexColumnDiv)`
  justify-content: space-evenly;
  position: relative;
  height: 20rem;
  align-items: center;
`;

export const RemoveFromWishListBtn = styled.button`
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  ${borderRadius10px};
  width: 100%;
  color: ${beige};
  background-color: ${compote};

  &:hover {
    transition: 0.3s;
    background-color: rgba(147, 74, 95, 0.7);
  }
`;

export const WishlistImage = styled.img`
  max-width: 10rem;
  border-radius: 80px;
  width: 100%;
`;

export const NavArrow = styled.button`
  border: none;
  background-color: inherit;
  font-size: 35px;
  margin: 5px;
  cursor: poiner;
  ${(props) =>
    props.disabled &&
    css`
      color: rgba(51, 61, 81, 0.5);
    `}
`;
