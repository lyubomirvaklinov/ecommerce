import styled, { css } from 'styled-components';
import { darkBlueDisabled, darkBlue } from './../../common/colors';
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
  background-color: ${darkBlue};
  color: #f4f3ea;

  padding: 5px 0px;

  &:hover {
    transition: 0.3s;
    ${darkBlueDisabled}
  }

  ${(props) =>
    props.disabled &&
    css`
      ${darkBlueDisabled}
    `}
`;
