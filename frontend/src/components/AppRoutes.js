import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchPage, DetailsPage } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/:id' element={<DetailsPage />} />
    </Routes>
  )
}
