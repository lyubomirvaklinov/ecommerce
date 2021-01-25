import styled, { css } from 'styled-components';
import { borderRadius10px } from '../../common/commonStyles';

export const PaginationBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 20rem;
`;

export const PaginationBtn = styled.button`
  min-width: 70px;

  border: none;
  ${borderRadius10px};

  cursor: pointer;
  background-color: #333d51;
  color: #f4f3ea;

  padding: 5px 0px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: rgba(51, 61, 81, 0.5);
    `}
`;
