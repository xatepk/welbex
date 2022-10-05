import React from 'react';

export const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows/rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav>
      { rowsPerPage < totalRows && <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a className={`page-link ${currentPage === number ? 'active' : ''}`} onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ) )}
      </ul>}
    </nav>
  )
}