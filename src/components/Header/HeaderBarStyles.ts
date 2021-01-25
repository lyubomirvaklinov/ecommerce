import styled from 'styled-components';
import { mustard, darkBlue, compote, beige } from './../../common/colors';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { FlexRowDivCentered } from '../../common/commonStyles';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background-color: ${mustard};
`;

export const HeaderItemContainer = styled(FlexRowDivCentered)`
  height: 100%;
  min-width: 70px;

  background-color: ${darkBlue};
  color: ${beige};

  padding: 5px;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: ${compote};
  }
`;

export const WishlistStarIcon = styled(StarOutlineIcon)`
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    font-size: 3rem !important;
    color: ${compote} !important;
  }
`;
