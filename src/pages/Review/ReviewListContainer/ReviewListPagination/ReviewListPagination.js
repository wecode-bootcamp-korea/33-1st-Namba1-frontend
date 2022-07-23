import React from 'react';
import './ReviewListPagination.scss';

function ReviewListPagination({ total, limit, getButtonIndex }) {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="paginationBtn"
            key={i + 1}
            onClick={e => getButtonIndex(e.target.innerText)}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
}

export default ReviewListPagination;
