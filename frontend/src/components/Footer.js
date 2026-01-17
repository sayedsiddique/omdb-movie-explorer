import React from 'react'

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © { new Date().getFullYear() }
        <a href="/" className="hover:text-primary-800">
          &nbsp;OMDb API&trade;
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  )
}
