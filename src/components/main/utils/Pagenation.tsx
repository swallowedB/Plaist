export default function Pagination({
  totalPages = 10,
  currentPage,
  onPageChange,
}: {
  totalPages?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-[60px]">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center justify-center h-8 px-3 text-sm font-medium border rounded-lg me-3 
          ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed"
              : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>

      {/* Page Number */}
      <span className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center h-8 px-3 text-sm font-medium border rounded-lg ms-3 
          ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed"
              : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}
