import React, { ReactElement, useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import Pagination from '../Pagination/Pagination';
import { getCurrentProducts } from '../Pagination/utils';

import {
  EmptyProductsPage,
  ProductContainer,
  ProductsHeader,
  ProductsPageContainer,
} from './ProductsPageStyle';
import SingleProduct from './SingleProduct';

interface Props {}

export default function ProductsPage({}: Props): ReactElement {
  const { currentState } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const currentProducts =
    currentState.products &&
    getCurrentProducts(currentState.products, currentPage, productsPerPage);

  if (currentProducts && currentProducts.length === 0)
    return <div>Loading...</div>;

  if (!currentState.products || currentState.products.length === 0)
    return <EmptyProductsPage>No Products</EmptyProductsPage>;

  return (
    <ProductsPageContainer>
      <ProductsHeader>Products</ProductsHeader>
      <ProductContainer>
        {currentProducts &&
          currentProducts.map((item) => (
            <SingleProduct key={item.id} product={item} />
          ))}
      </ProductContainer>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={currentState.products && currentState.products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ProductsPageContainer>
  );
}
