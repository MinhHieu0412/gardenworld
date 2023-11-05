import React from 'react'
import ReactPaginate from 'react-paginate';
import "./pagination.css";
function Pagination({pageCount, handlePageClick}) {
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLinkClassName='< previous'
        renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default Pagination;