import './Simulator.css'
import React, { useState, useEffect } from 'react'
import info from '../../assets/info.svg'
import api from '../../services/api'

const Simulator = (props) => {
  const [ipcaValue, setIpcaValue] = useState('Carregando...')
  const [cdiValue, setCdiValue] = useState('Carregando...')
  const [profitabilityIsValid, setProfitability] = useState(true)
  const [monthlyContributionIsValid, setMonthlyContribution] = useState(true)
  const [initialContributionIsValid, setInitialContribution] = useState(true)

  //Validando o campo de contribuição inicial
  function validateInitialContribution(e) {
    let num = e.target.value
    num = num.replace(/[R$]|\D/gi, '')

    if (num === '') {
      setInitialContribution(false)
      e.target.value = ''
      return
    }

    setInitialContribution(true)
    e.target.value = `R$ ${num}`
  }

  //Validando o campo de contribuição mensal
  function validateMonthlyContribution(e) {
    //Fazer validação
    let test2 = false //Apagar

    if (test2) {
      setMonthlyContribution(false)
    }
  }

  //Validando o campo de rentabilidade
  function validateProfitability(e) {
    let num = e.target.value

    num = num.replace(/\D|%*/gi, '') //Retirando dígitos e outros símbolos de '%'

    if (num === '') {
      setProfitability(false)
      e.target.value = ''
      return
    }

    setProfitability(true)
    e.target.value = num + '%'
  }

  //Fetching dos indicadores
  async function getIndexValues() {
    await api
      .get('/indicadores')
      .then((response) => {
        setIpcaValue(response.data[1].valor + '%')
        setCdiValue(response.data[0].valor + '%')
      })
      .catch((err) => {
        console.log('Ocorreu um erro!' + err)
      })
  }

  useEffect(() => {
    getIndexValues()
  }, [])

  function simulateInvestments() {
    props.onSimulate()
  }

  return (
    <div className="simulator">
      <h3 className="simulator-title">Simulador</h3>

      <div className="section">
        <div className="income">
          <div className="income-top">
            <h5 className="first-variable">Rendimento</h5>
            <img src={info} alt="mais informaões" className="info"></img>
          </div>

          <div className="income-buttons">
            <button className="active">Bruto</button>
            <button>Líquido</button>
          </div>

          <div className="income-variables">
            <h5
              style={
                initialContributionIsValid
                  ? { color: '#000000' }
                  : { color: '#ff0000' }
              }
            >
              Aporte Inicial
            </h5>{' '}
            <input
              type="text"
              onBlur={validateInitialContribution}
              style={
                initialContributionIsValid
                  ? { borderColor: '#000000' }
                  : { borderColor: '#ff0000' }
              }
            ></input>
            {!initialContributionIsValid && (
              <p className="error">Aporte deve ser um número.</p>
            )}
            <h5>Prazo (em meses)</h5>
            <input type="number"></input>
            <h5>IPCA (ao ano)</h5>
            <input type="text" value={ipcaValue} readOnly></input>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="indexing">
          <div className="indexing-top">
            <h5 className="first-variable">Tipos de indexação</h5>
            <img src={info} alt="mais informaões" className="info"></img>
          </div>

          <div className="indexing-buttons">
            <button>PRÉ</button>
            <button className="active">POS</button>
            <button>FIXADO</button>
          </div>

          <div className="indexing-variables">
            <h5
              style={
                monthlyContributionIsValid
                  ? { color: '#000000' }
                  : { color: '#ff0000' }
              }
            >
              Aporte Mensal
            </h5>
            <input
              type="text"
              onBlur={validateMonthlyContribution}
              style={
                monthlyContributionIsValid
                  ? { borderColor: '#000000' }
                  : { borderColor: '#ff0000' }
              }
            ></input>
            {!monthlyContributionIsValid && (
              <p className="error">Aporte deve ser um número.</p>
            )}

            <h5
              style={
                profitabilityIsValid
                  ? { color: '#000000' }
                  : { color: '#ff0000' }
              }
            >
              Rentabilidade
            </h5>
            <input
              type="text"
              onBlur={validateProfitability}
              style={
                profitabilityIsValid
                  ? { borderColor: '#000000' }
                  : { borderColor: '#ff0000' }
              }
            ></input>
            {!profitabilityIsValid && (
              <p className="error">Rentabilidade deve ser um número.</p>
            )}

            <h5>CDI (ao ano)</h5>
            <input type="text" value={cdiValue} readOnly></input>
          </div>
        </div>
      </div>

      <div className="actions">
        <button>Limpar campos</button>
        <button onClick={simulateInvestments} id="simulate-action">
          Simular
        </button>
      </div>
    </div>
  )
}

export default Simulator
