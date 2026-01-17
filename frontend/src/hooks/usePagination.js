import { useState } from 'react'

export const usePagination = (defaultPage = 1) => {
  const [page, setPage] = useState(defaultPage);
  
  function next() {
    setPage(page + 1);
  }

  function reset() {
    setPage(defaultPage);
  }

  return { page, next, reset };
}
