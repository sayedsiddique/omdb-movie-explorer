import React from 'react'

export const DetailCard = ({ item }) => {
  return (
    <div className="flex justify-around flex-wrap py-5 max-md:px-5">
      <div className="max-w-sm">
        <img src={item.data.Poster} alt={`${item.data.Title} Poster`} />
      </div>
      <div className="max-w-2xl text-slate-800 dark:text-slate-50">
        <h1 className="text-5xl text-bold my-3"> {item.data.Title}</h1>
        <p className="my-4">{item.data.Plot} </p>
        <p className="my-4 flex flex-wrap gap-2">
          {item.data.Genre?.split(', ').map((genre) => (
            <span
              className="mr-2 border border-slate-300 rounded dark:border-slate-600 px-4 py-1.5"
            >
              {genre}
            </span>
          ))}
        </p>

        {/* Copied from flowbite */}

        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {item.data.imdbRating}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-sm font-medium text-gray-900 underline dark:text-white">
            {item.data.imdbVotes} Votes
          </span>
        </div>
        <hr className="my-4" />

        {/* Copied from Flowbite */}
        <div className="relative overflow-x-auto">
          <h2 className="text-2xl">Details:</h2>
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Runtime
                </th>
                <td className="py-4">{ item.data.Runtime }</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Awards
                </th>
                <td className="py-4">{ item.data.Awards }</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Revenue
                </th>
                <td className="py-4">{ item.data.BoxOffice }</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Release Date
                </th>
                <td className="py-4">{ item.data.Released }</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  IMDB Link
                </th>
                <td className="py-4">
                  <a href={`https://www.imdb.com/title/${item.data.imdbID}`} target="_blank" rel="noreferrer">
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {item.data.Ratings?.length > 0 && (
          <>
            <hr className="my-6" />
            <h2 className="text-xl font-semibold mb-3">Ratings</h2>
            <ul className="list-disc ml-6">
              {item.data.Ratings.map((rating) => (
                <li key={rating.Source}>
                  {rating.Source}: {rating.Value}
                </li>
              ))}
            </ul>
          </>
        )}
        </div>
      </div>
    </div>
  )
}
