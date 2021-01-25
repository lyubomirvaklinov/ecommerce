import { Product } from './../../types/Product';

export const getCurrentProducts = (
  state: Product[],
  currentPage: number,
  productsPerPage: number
) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  return state.slice(indexOfFirstProduct, indexOfLastProduct);
};

export const paginate = (
  pageNumber: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => setCurrentPage(pageNumber);

export const getTotalPages = (totalProducts: number, productsPerPage: number) =>
  Math.ceil(totalProducts / productsPerPage);
