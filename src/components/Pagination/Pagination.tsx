import React from 'react';
import { PaginationBtnContainer, PaginationBtn } from './PaginationStyles';
import { getTotalPages, paginate } from './utils';

interface Props {
  productsPerPage: number;
  totalProducts: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Pagination = ({
  productsPerPage,
  totalProducts,
  setCurrentPage,
  currentPage,
}: Props) => {
  const totalPages = getTotalPages(totalProducts, productsPerPage);
  const disableNext = totalPages === 0 || currentPage === totalPages;
  const disablePrevious = totalPages === 0 || currentPage === 1;

  return (
    <PaginationBtnContainer>
      <PaginationBtn
        disabled={disablePrevious}
        onClick={() => paginate(currentPage - 1, setCurrentPage)}
      >
        Previous
      </PaginationBtn>
      <div>
        {currentPage}/{totalPages}
      </div>
      <PaginationBtn
        disabled={disableNext}
        onClick={() => paginate(currentPage + 1, setCurrentPage)}
      >
        Next
      </PaginationBtn>
    </PaginationBtnContainer>
  );
};

export default Pagination;
