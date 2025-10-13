import React, { useState } from 'react'
import { FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const sampleProducts = [
  { id: '001', sku: 'abc123', name: 'Bolsa Preta Teste', price: 'R$20,00', cost: 'R$10,00', category: 'Bolsa', stock: 1 },
  { id: '002', sku: 'abc124', name: 'Bolsa Vermelha', price: 'R$30,00', cost: 'R$12,00', category: 'Bolsa', stock: 5 },
  { id: '003', sku: 'abc125', name: 'Carteira Couro', price: 'R$40,00', cost: 'R$20,00', category: 'Acessório', stock: 2 },
  { id: '004', sku: 'abc126', name: 'Bolsa Azul', price: 'R$25,00', cost: 'R$11,00', category: 'Bolsa', stock: 10 }
]

export default function ProductsTable() {
  const [products] = useState(sampleProducts)
  const [expanded, setExpanded] = useState({})

  const toggle = (id) => setExpanded(s => ({ ...s, [id]: !s[id] }))

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>SKU</th>
                <th>Nome do Produto</th>
                <th>Preço de Venda</th>
                <th>Preço de custo</th>
                <th>Categoria</th>
                <th>Estoque</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <React.Fragment key={p.id}>
                  <tr>
                    <td>
                      <button className="btn btn-sm btn-light p-0 me-2" onClick={() => toggle(p.id)}>
                        {expanded[p.id] ? <FaChevronUp/> : <FaChevronDown/>}
                      </button>
                      {p.id}
                    </td>
                    <td>{p.sku}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.cost}</td>
                    <td>{p.category}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary"><FaCog /></button>
                    </td>
                  </tr>

                  {expanded[p.id] && (
                    <tr className="table-sm bg-light">
                      <td colSpan="8">
                        <div className="p-2">
                          <strong>Detalhes:</strong> descrição, variações e outras infos do produto {p.name}.
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-muted">Mostrando {products.length} de {products.length}</div>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item disabled"><a className="page-link">Anterior</a></li>
              <li className="page-item active"><a className="page-link">1</a></li>
              <li className="page-item"><a className="page-link">2</a></li>
              <li className="page-item"><a className="page-link">Próximo</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
