import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path='product' element={<h1>Product</h1>} />
        <Route path='analytics' element={<h1>Analytics</h1>} />
      </Route>
    </Routes>
  )
}
