import './Chart.css'
import api from '../../services/api'
import React, { useState, useEffect } from 'react'

const Chart = (props) => {
  let incomeSearch = props.searchData[0]
  let indexingSearch = props.searchData[1]
  const [chartDataFetched, setChartDataFetched] = useState(null)

  async function getChartValues() {
    await api
      .get(
        `/simulacoes?tipoIndexacao=${indexingSearch}&tipoRendimento=${incomeSearch}`
      )
      .then((response) => {
        console.log(response.data[0]['graficoValores']['comAporte'][0])
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
                    ? { height: `${(chartDataFetched['comAporte'][0] - 1000) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][0]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][1] - 1100) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][1]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][2] - 1200) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][2]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][3] - 1300) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][3]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][4] - 1400) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][4]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][5] - 1500) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][5]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][6] - 1600) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][6]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][7] - 1700) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][7]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][8] - 1800) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][8]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][9] - 1900) * 10 }%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][9]  - 1000) * 10}%` }
                    : { height: '5%' }
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
                    ? { height: `${(chartDataFetched['comAporte'][10] - 2000) * 10}%` }
                    : { height: '5%' }
                }
              ></div>
              <div
                className="sem-aporte"
                style={
                  chartDataFetched
                    ? { height: `${(chartDataFetched['semAporte'][10] - 1000) * 10}%` }
                    : { height: '5%' }
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
