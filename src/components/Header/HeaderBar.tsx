import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderItemContainer,
  WishlistStarIcon,
} from './HeaderBarStyles';

interface Props {
  drawerState: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderBar({
  drawerState,
  toggleDrawer,
}: Props): ReactElement {
  const history = useHistory();

  return (
    <HeaderContainer>
      <HeaderItemContainer onClick={() => history.push('/products')}>
        My Store
      </HeaderItemContainer>
      <WishlistStarIcon
        fontSize="large"
        onClick={() => toggleDrawer(!drawerState)}
      />
      <HeaderItemContainer onClick={() => history.push('/basket')}>
        Basket
      </HeaderItemContainer>
    </HeaderContainer>
  );
}
