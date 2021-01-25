import { mustard } from './../../common/colors';
import styled from 'styled-components';
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

  background-color: #333d51;
  color: #cbd0d8;

  padding: 5px;

  cursor: pointer;
`;

export const WishlistStarIcon = styled(StarOutlineIcon)`
  cursor: pointer;
`;
