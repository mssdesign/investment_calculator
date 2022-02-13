import './Chart.css'
import api from '../../services/api'
import React, { useState, useEffect } from 'react'

const Chart = (props) => {
  let incomeSearch = props.searchData[0]
  let indexingSearch = props.searchData[1]
  const [chartDataFetched, setChartDataFetched] = useState(null)

  //Fazendo fetching dos dados
  async function getChartValues() {
    await api
      .get(
        `/simulacoes?tipoIndexacao=${indexingSearch}&tipoRendimento=${incomeSearch}`
      )
      .then((response) => {
        setChartDataFetched(response.data[0]['graficoValores'])
      })
      .catch((err) => {
        console.log('Ocorreu um erro!' + err)
      })
  }

  useEffect(() => {
    getChartValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Definindo gráfico
  function comAporteBar(num) {
    let height = (chartDataFetched['comAporte'][num])/100
    return height
  }

  function semAporteBar(num) {
    let height = (chartDataFetched['semAporte'][num])/100
    return height
  }

  return (
    <div>
      <h4 className="chart-title">Projeção de Valores</h4>
      <div className="chart">
        <ul className="bars">
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(0)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(0)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>0</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(1)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(1)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>1</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(2)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(2)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>2</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(3)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(3)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>3</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(4)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(4)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>4</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(5)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(5)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>5</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(6)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(6)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>6</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(7)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(7)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>7</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(8)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(8)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>8</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(9)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(9)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>9</span>
          </li>
          <li>
            <div className="bar">
              <div
                className="com-aporte"
                style={
                  chartDataFetched
                    ? { height: `${comAporteBar(10)}%` }
                    : { height: '1%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${semAporteBar(10)}%` }
                    : { height: '1%' }
                }
              ></div>
            </div>
            <span>10</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Chart
