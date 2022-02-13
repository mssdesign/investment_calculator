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
            <div className='bar'>
                <div
                  className="com-aporte"
                  style={
                    chartDataFetched
                      ? { height: `${chartDataFetched['comAporte'][0] / 100}%` }
                      : { height: '5%' }
                  }
                ></div>
                <div
                  className="sem-aporte"
                  style={
                    chartDataFetched
                      ? { height: `${chartDataFetched['semAporte'][0] / 100}%` }
                      : { height: '5%' }
                  }
                ></div>
            </div>
            <span>0</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>1</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>2</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>3</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>4</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>5</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>6</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>7</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>8</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>9</span>
          </li>
          <li>
            <div className="com-aporte"></div>
            <div className="sem-aporte"></div>
            <span>10</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Chart
