import { useMemo } from 'react';

export function usePagination(currentPage, totalPages, delta = 1) {
  return useMemo(() => {
    const range = [];
    const rangeWithDots = [];
    let lastPage;

    for (let i = 1; i <= totalPages; i += 1) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (let page of range) {
      if (lastPage) {
        if (page - lastPage === 2) {
          rangeWithDots.push(lastPage + 1);
        } else if (page - lastPage > 2) {
          rangeWithDots.push('...');
        }
      }

      rangeWithDots.push(page);
      lastPage = page;
    }

    return rangeWithDots;
  }, [currentPage, totalPages, delta]);
}
