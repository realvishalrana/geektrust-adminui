import React from "react";
import LeftArrowIcon from "../../src/icons/LeftArrow";
import RightArrowIcon from "../../src/icons/RightArrow";
import DoubleLeftArrowIcon from "../../src/icons/DoubleLeftArrow";
import DoubleRightArrowIcon from "../../src/icons/DoubleRightArrow";

const Pagination = ({ page, limit, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / limit);

  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePrevPage = () => {
    if (page > 1) onPageChange(page - 1);
  };
  const handleNextPage = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 mx-1 rounded-full ${
            i === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {totalItems ? (
        <>
          <button
            onClick={handleFirstPage}
            disabled={page === 1}
            className="px-2 py-1 rounded-full disabled:opacity-50"
          >
            <DoubleLeftArrowIcon />
          </button>
          <button
            onClick={handlePrevPage}
            className="px-2 py-1 rounded-full disabled:opacity-50"
            disabled={page === 1}
          >
            <LeftArrowIcon />
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPage}
            className="px-2 py-1 rounded-full disabled:opacity-50"
            disabled={page === totalPages}
          >
            <RightArrowIcon />
          </button>
          <button
            onClick={handleLastPage}
            className="px-2 py-1 rounded-full disabled:opacity-50"
            disabled={page === totalPages}
          >
            <DoubleRightArrowIcon />
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
