import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, usePagination } from "../hooks";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const BASE_API = process.env.REACT_APP_API_URL;
  const RESULTS_PER_PAGE = 10;

  const { data: items, isLoading, error, setUrl } = useFetch();
  const { page, next, reset } = usePagination();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!queryTerm) return;

    const URL = `${BASE_API}search?query=${queryTerm}&page=${page}`;
    setUrl(URL);
  }, [queryTerm, page, BASE_API, setUrl]);

  useEffect(() => {
    if (!queryTerm) {
      setMovies([]);
      reset();
      return;
    }

    setMovies([]);
    reset();
  }, [queryTerm]);

  useEffect(() => {
    if (items && items.data.Search) {
      setMovies(() => [...movies, ...items.data.Search]);
    }
    if (error) {
      setMovies(() => []);
    }
  }, [items, error]);

  const noResultTitle = `No Results found for: ${queryTerm}`;
  const resultFoundTitle = `Results for: ${queryTerm}`;
  const errorTitle = "Something went wrong. Please retry";

  const totalPages = Math.ceil(items?.data.totalResults / RESULTS_PER_PAGE);

  return (
    <main>
      <section>
        <h2 className="dark:text-slate-50 text-slate-800 text-4xl">
          {movies && movies.length === 0 ? (queryTerm ? noResultTitle : "") : resultFoundTitle}
        </h2>
        <h2 className="dark:text-slate-50 text-slate-800 text-4xl">
          {items && items.data.Error ? errorTitle : ""}
        </h2>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {movies.map((item) => (
          <Card item={item} key={item.imdbID} />
        ))}
      </div>
      {items && page < totalPages && (
        <button
          onClick={next}
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Load More
        </button>
      )}
    </main>
  );
};
