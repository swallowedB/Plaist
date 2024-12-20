import { useEffect, useMemo, useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
  const savedPage = Number(localStorage.getItem("currentPage") || 1);
  const [currentPage, setCurrentPage] = useState(savedPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    localStorage.setItem("currentPage", String(page));
  };

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

  return { paginatedData, currentPage, totalPages, handlePageChange };
}
