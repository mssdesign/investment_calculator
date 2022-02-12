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
  const [deadlineIsValid, setDeadline] = useState(true)
  const [formIsValid, setValidateForm] = useState(false)
  const [incomeGrossButtonClass, setGrossButton] = useState('active')
  const [incomeLiquidButtonClass, setLiquidButton] = useState('disabled')
  const [indexingPreviousButtonClass, setPreviousButton] = useState('disabled')
  const [indexingPosteriorButtonClass, setPosteriorButton] = useState('active')
  const [indexingFixedButtonClass, setFixedButton] = useState('disabled')
  let profitability = ''
  let monthlyContribution = ''
  let initialContribution = ''
  let deadline = ''

  //Alternando botões do rendimento
  function activeGrossButton() {
    setGrossButton('active')
    setLiquidButton('disabled')
  }

  function activeLiquidButton() {
    setGrossButton('disabled')
    setLiquidButton('active')
  }

  //Alternando botões dos tipos de indexação
  function activePreviousButton() {
    setPreviousButton('active')
    setPosteriorButton('disabled')
    setFixedButton('disabled')
  }

  function activePosteriorButton() {
    setPreviousButton('disabled')
    setPosteriorButton('active')
    setFixedButton('disabled')
  }

  function activeFixedButton() {
    setPreviousButton('disabled')
    setPosteriorButton('disabled')
    setFixedButton('active')
  }

  //Limpando campos
  function clearAll() {
    window.location.reload()
  }

  //Validando o campo de contribuição inicial
  function validateInitialContribution(e) {
    let num = e.target.value
    num = num.replace(/[R$]|\D/gi, '')

    if (num === '') {
      setInitialContribution(false)
      e.target.value = ''
      return
    }

    initialContribution = num
    setInitialContribution(true)
    e.target.value = `R$ ${num}`
    validateForm()
  }

  //Validando prazo
  function validateDeadline(e) {
    let num = e.target.value
    num = num.replace(/\D/gi, '')

    if (num === '') {
      setDeadline(false)
      e.target.value = ''
      return
    }

    deadline = num
    setDeadline(true)
    e.target.value = `${num}`
    validateForm()
  }

  //Validando o campo de contribuição mensal
  function validateMonthlyContribution(e) {
    let num = e.target.value
    num = num.replace(/[R$]|\D/gi, '')

    if (num === '') {
      setMonthlyContribution(false)
      e.target.value = ''
      return
    }

    monthlyContribution = num
    setMonthlyContribution(true)
    e.target.value = `R$ ${num}`
    validateForm()
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
    profitability = num
    e.target.value = num + '%'
    validateForm()
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

  //Carregando dados no início da aplicação
  useEffect(() => {
    getIndexValues()
  }, [])

  //Função para abrir a tabela
  function simulateInvestments() {
    props.onSimulate()
  }

  //Validando formulário
  function validateForm() {
    if (
      profitabilityIsValid &&
      monthlyContributionIsValid &&
      initialContributionIsValid &&
      deadlineIsValid &&
      profitability !== '' &&
      monthlyContribution !== '' &&
      initialContribution !== '' &&
      deadline !== ''
    ) {
      setValidateForm(true)
    }
  }

  //Mostrando campos inválidos ao usuário
  function showInvalidInputs() {
    if (profitabilityIsValid === false || profitability === '') {
      setProfitability(false)
    }

    if (monthlyContributionIsValid === false || monthlyContribution === '') {
      setMonthlyContribution(false)
    }

    if (initialContributionIsValid === false || initialContribution === '') {
      setInitialContribution(false)
    }

    if (deadlineIsValid === false || deadline === '') {
      setDeadline(false)
    }
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
            <button
              className={incomeGrossButtonClass}
              onClick={activeGrossButton}
            >
              Bruto
            </button>
            <button
              className={incomeLiquidButtonClass}
              onClick={activeLiquidButton}
            >
              Líquido
            </button>
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
            <h5
              style={
                deadlineIsValid ? { color: '#000000' } : { color: '#ff0000' }
              }
            >
              Prazo (em meses)
            </h5>
            <input
              type="text"
              onBlur={validateDeadline}
              style={
                deadlineIsValid
                  ? { borderColor: '#000000' }
                  : { borderColor: '#ff0000' }
              }
            ></input>
            {!deadlineIsValid && (
              <p className="error">O prazo deve ser um número.</p>
            )}
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
            <button
              className={indexingPreviousButtonClass}
              onClick={activePreviousButton}
            >
              PRÉ
            </button>
            <button
              className={indexingPosteriorButtonClass}
              onClick={activePosteriorButton}
            >
              POS
            </button>
            <button
              className={indexingFixedButtonClass}
              onClick={activeFixedButton}
            >
              FIXADO
            </button>
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
        <button onClick={clearAll}>Limpar campos</button>
        <button
          onClick={formIsValid ? simulateInvestments : showInvalidInputs}
          id={formIsValid ? 'enableForm' : 'disabledForm'}
        >
          Simular
        </button>
      </div>
    </div>
  )
}

export default Simulator
