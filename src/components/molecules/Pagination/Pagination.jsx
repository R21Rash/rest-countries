// components/Atoms/Pagination/Pagination.jsx
import React from "react";
import Button from "../../Atoms/Button/Button"; // Adjust path if needed

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center flex-wrap gap-2 mt-6">
      <Button
        label="Prev"
        variant="outlineGray"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="min-w-[70px]"
      />

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <Button
            key={page}
            label={String(page)}
            onClick={() => onPageChange(page)}
            className={`min-w-[40px] px-3 py-1 ${
              isActive ? "bg-blue-500 text-white" : ""
            }`}
            variant={isActive ? "default" : "outlineGray"}
          />
        );
      })}

      <Button
        label="Next"
        variant="outlineGray"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="min-w-[70px]"
      />
    </div>
  );
};

export default Pagination;
