import React from 'react';
import '../Review/Pagination.scss';

function Pagination({ total, limit, page, setPage, getButtonIndex }) {
  const numPages = Math.ceil(total / limit);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="pagination">
      <button className="prevBtn" onClick={prevPage} disabled={page === 1}>
        &lt;
      </button>

      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="paginationBtn"
            key={i + 1}
            onClick={e => getButtonIndex(e.target.innerText)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </button>
        ))}

      <button
        className="nextBtn"
        onClick={nextPage}
        disabled={page === numPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
