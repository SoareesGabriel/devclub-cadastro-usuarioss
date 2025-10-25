import React from 'react'
import { FaSearch, FaFilter, FaFileExport, FaPlus } from 'react-icons/fa'

export default function Topbar() {
  return (
<header className="sidbar d-flex flex-column px-4 py-5 bg-light">
  
  {/* 🔹 Primeira barra */}
<div className="top-bar d-flex align-items-center gap-2 mb-4">
  <div className="search input-group">
    <span className="input-group-text"><FaSearch /></span>
    <input className="form-control text-start" placeholder="Pesquisar produtos" />
  </div>

  {/* Removido: div vazia aqui que empurrava o profile */}

  <div className="profile d-flex align-items-center">
    <div className="avatar rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3">U</div>
    <div className=" d-sm-block">
      <div className="small">Nome do Usuario</div>
      <div className="small text-muted">usuario@email.com</div>
    </div>
  </div>
</div>


  {/* 🔹 Segunda barra */}
  <div className="bottom-bar d-flex align-items-center justify-content-between gap-3 flex-wrap px-2 py-3">
    <div className="d-flex align-items-center gap-1">
      <button className="btn btn-outline-secondary d-md-none">☰</button>
      <div className="project-title fs-2">Produtos</div>
    </div>

    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary fs-7"><FaFilter /> Filtros</button>
      <button className="btn btn-outline-secondary fs-7"><FaFileExport /> Exportar</button>
      <button className="btn btn-danger text-white fs-7"><FaPlus /> Criar Produto</button>
    </div>
  </div>

</header>
  )
}
