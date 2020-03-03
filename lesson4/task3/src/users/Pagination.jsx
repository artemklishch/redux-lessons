import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage }) => {
  return (
    <div>
      <div className="pagination">
        <button className="btn" onClick={goPrev}>←</button>
        <span className="pagination__page">{currentPage}</span>
        <button className="btn" onClick={goNext}>→</button>
      </div>

      <ul className="users">
        {}
        <li className="user">
          <span className="user__name">Bob</span>
          <span className="user__age">21</span>
        </li>
        <li className="user">
          <span className="user__name">Sam</span>
          <span className="user__age">45</span>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;