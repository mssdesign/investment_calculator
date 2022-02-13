import './Chart.css'
import api from '../../services/api'
import React, { useState, useEffect } from 'react'

const Chart = (props) => {
    let incomeSearch = props.searchData[0]
    let indexingSearch = props.searchData[1]
    const [chartDataFetched, setChartDataFetched] = useState(null)

    async function getChartValues() {
        await api
          .get(`/simulacoes?tipoIndexacao=${indexingSearch}&tipoRendimento=${incomeSearch}`)
          .then((response) => {
            console.log(response.data[0]['graficoValores'])
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
            <h4>Projeção de Valores</h4>
            <p>data</p>
        </div>
    )
}

export default Chart