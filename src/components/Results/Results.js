import './Results.css'
import api from '../../services/api'
import React, { useState, useEffect } from 'react'
import Chart from './Chart'

const Graphic = (props) => {
  let incomeSearch = props.searchData[0]
  let indexingSearch = props.searchData[1]
  const [dataFetched, setDataFetched] = useState(null)

  async function getSimulationValues() {
    await api
      .get(
        `/simulacoes?tipoIndexacao=${indexingSearch}&tipoRendimento=${incomeSearch}`
      )
      .then((response) => {
        setDataFetched(response.data)
      })
      .catch((err) => {
        console.log('Ocorreu um erro!' + err)
      })
  }

  useEffect(() => {
    getSimulationValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="results">
      <h3 className="results-title">Resultado da Simulação</h3>

      <div className="board">
        <div className="card">
          <h5>Valor final bruto</h5>
          <p>
          R$ {!dataFetched ? 'Carregando...' : dataFetched[0]['valorFinalBruto']}
          </p>
        </div>
        <div className="card">
          <h5>Aliquota do IR</h5>
          <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['aliquotaIR']}%</p>
        </div>
        <div className="card">
          <h5>Valor pago em IR</h5>
          <p>
          R$ {!dataFetched ? 'Carregando...' : dataFetched[0]['valorPagoIR']}
          </p>
        </div>
        <div className="card">
          <h5>Valor final líquido</h5>
          <p style={{color: '#1DBC00'}}>
            R$ {!dataFetched
              ? 'Carregando...'
              : dataFetched[0]['valorFinalLiquido']}
          </p>
        </div>
        <div className="card">
          <h5>Valor total investido</h5>
          <p>
          R$ {!dataFetched
              ? 'Carregando...'
              : dataFetched[0]['valorTotalInvestido']}
          </p>
        </div>
        <div className="card">
          <h5>Ganho líquido</h5>
          <p style={{color: '#1DBC00'}}>
            R$ {!dataFetched ? 'Carregando...' : dataFetched[0]['ganhoLiquido']}
          </p>
        </div>
      </div>

      <Chart searchData={[incomeSearch, indexingSearch]}></Chart>
    </div>
  )
}

export default Graphic
