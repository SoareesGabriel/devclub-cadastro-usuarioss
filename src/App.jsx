import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ProductsTable from './components/ProductsTable'

export default function App() {
  return (
    <div className="app-root d-flex">
      <Sidebar />
      <div className="content flex-grow-1">
        <Topbar />
        <main className="p-4">
          <ProductsTable />
        </main>
      </div>
    </div>
  )
}
