import './Graphic.css'
import api from '../../services/api'
import React, { useState, useEffect } from 'react'

const Graphic = (props) => {
    //http://localhost:3000/simulacoes?tipoIndexacao=pos&tipoRendimento=bruto
    //props.searchData[0]
    
    let incomeSearch = props.searchData[0]
    let indexingSearch = props.searchData[1]
    const [dataFetched, setDataFetched] = useState(null)

    async function getSimulationValues() {
        await api
          .get(`/simulacoes?tipoIndexacao=${indexingSearch}&tipoRendimento=${incomeSearch}`)
          .then((response) => {
            console.log(response.data)
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
        <div className='results'>
            <h3 className="results-title">Resultado da Simulação</h3>

            <div className='board'>
                <div className='card'>
                    <h5>Valor final bruto</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['valorFinalBruto']}</p>                    
                </div>
                <div className='card'>
                    <h5>Aliquota do IR</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['aliquotaIR']}</p>
                </div>
                <div className='card'>
                    <h5>Valor pago em IR</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['valorPagoIR']}</p>
                </div>
                <div className='card'>
                    <h5>Valor final líquido</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['valorFinalLiquido']}</p>
                </div>
                <div className='card'>
                    <h5>Valor total investido</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['valorTotalInvestido']}</p>
                </div>
                <div className='card'>
                    <h5>Ganho líquido</h5>
                    <p>{!dataFetched ? 'Carregando...' : dataFetched[0]['ganhoLiquido']}</p>
                </div>
            </div>

            <div className='graphic'>

            </div>
        </div>
    )
}

export default Graphic