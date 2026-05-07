const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Prev
      </button>


      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>


      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;