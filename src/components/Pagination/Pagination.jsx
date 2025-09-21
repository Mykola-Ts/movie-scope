import PropTypes from 'prop-types';
import { usePagination } from 'hooks/usePagination';
import { PaginationButton, Wrapper } from './Pagination.styled';

export const Pagination = ({
  totalPages = 1,
  currentPage = 1,
  isLastPage = false,
  onChangePage,
}) => {
  const pages = usePagination(currentPage, totalPages, 1);

  return (
    <Wrapper>
      <PaginationButton
        type="button"
        aria-label="Prev page"
        data-action="prev"
        disabled={currentPage === 1}
        onClick={onChangePage}
      >
        Prev
      </PaginationButton>

      {pages.map((page, idx) =>
        page === '...' ? (
          <span key={idx}>...</span>
        ) : (
          <PaginationButton
            key={idx}
            type="button"
            aria-label={`Page ${page}`}
            className={page === currentPage ? 'active' : ''}
            onClick={evt => onChangePage(evt, page)}
          >
            {page}
          </PaginationButton>
        )
      )}

      <PaginationButton
        type="button"
        aria-label="Next page"
        data-action="next"
        disabled={isLastPage}
        onClick={onChangePage}
      >
        Next
      </PaginationButton>
    </Wrapper>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
