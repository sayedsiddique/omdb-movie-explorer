import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col">
      <Link to={`/${item.imdbID}`}>
        <img
          className="rounded-t-lg w-full h-[450px] object-cover"
          src={item.Poster !== 'N/A' ? item.Poster : '/placeholder.jpg'}
          alt={`${item.Title} Poster`}
        />
      </Link>

      <div className="p-5 text-center flex flex-col flex-grow">
        <span className="inline-flex items-center justify-center rounded-sm border px-1.5 py-0.5 text-xs font-medium
          bg-blue-50 text-blue-700 border-blue-200
          dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 mx-auto mb-2">
          <svg
            className="mr-1 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          {item.Type?.charAt(0).toUpperCase() + item.Type?.slice(1)}
        </span>

        <Link to={`/${item.imdbID}`}>
          <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-primary-800 dark:hover:text-primary-800 line-clamp-2">
            {item.Title}
          </h5>
        </Link>

        <Link
          to={`/${item.imdbID}`}
          className="mt-auto inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white focus:outline-none bg-primary-800 rounded-lg hover:bg-primary-1000"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        </Link>
      </div>
    </div>
  )
}
