"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="pagination-container">
      <button
        className="button"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="button"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};
