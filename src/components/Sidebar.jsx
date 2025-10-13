import React from 'react'
import { FaHome, FaBoxOpen, FaUser, FaChartPie, FaSignOutAlt } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="sidebar d-flex flex-column px- py-5 text-white">
      <div className="brand p-4">

        <div className="logo-text">
            <div className="logo-text">
              <img src="Logo Estilo Calçados e acessórios PNG (1) 1.png" alt="Logo" className="logo-img" />
            </div>
        </div>

      </div>

      <nav className="nav flex-column p-2">
        <a className="nav-link text-white d-flex align-items-center py-2"><FaHome className="me-2" /> Início</a>
        <a className="nav-link active text-white d-flex align-items-center py-2"><FaBoxOpen className="me-2" /> Produtos</a>
        <a className="nav-link text-white d-flex align-items-center py-2"><FaUser className="me-2" /> Usuário</a>
        <a className="nav-link text-white d-flex align-items-center py-2"><FaChartPie className="me-2" /> Dashboard</a>
      </nav>

      <div className="mt-auto p-3">
        <button className="btn btn-outline-light w-100"><FaSignOutAlt className="me-2" /> Sair</button>
      </div>
    </aside>
  )
}
