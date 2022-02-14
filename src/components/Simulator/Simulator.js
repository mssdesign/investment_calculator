import './Simulator.css'
import React, { useState, useEffect, useRef } from 'react'
import info from '../../assets/info.svg'
import api from '../../services/api'

const Simulator = (props) => {
  //Botões dos tipos de rendimento
  const [incomeGrossButtonClass, setGrossButton] = useState('active')
  const [incomeLiquidButtonClass, setLiquidButton] = useState('disabled')
  const [activeIncomeButton, setActiveIncomeButton] = useState('bruto')

  //Botões dos tipos de indexação
  const [indexingPreviousButtonClass, setPreviousButton] = useState('disabled')
  const [indexingPosteriorButtonClass, setPosteriorButton] = useState('active')
  const [indexingFixedButtonClass, setFixedButton] = useState('disabled')
  const [activeIndexingButton, setActiveIndexingButton] = useState('pos')

  //Validando e atualizando valores do rendimento
  const [profitabilityIsValid, setProfitability] = useState(true)
  const [profitabilityInput, setInputProfitability] = useState('')
  const profitabilityValue = useRef('')

  useEffect(() => {
    profitabilityValue.current = profitabilityInput
  }, [profitabilityInput])

  //Validando e atualizando valores do aporte mensal
  const [monthlyContributionIsValid, setMonthlyContribution] = useState(true)
  const [monthlyContributionInput, setInputMonthlyContribution] = useState('')
  const monthlyContributionValue = useRef('')

  useEffect(() => {
    monthlyContributionValue.current = monthlyContributionInput
  }, [monthlyContributionInput])

  //Validando e atualizando valores do aporte inicial
  const [initialContributionIsValid, setInitialContribution] = useState(true)
  const [initialContributionInput, setInputInitialContribution] = useState('')
  const initialContributionValue = useRef('')

  useEffect(() => {
    initialContributionValue.current = initialContributionInput
  }, [initialContributionInput])

  //Validando e atualizando valores do prazo
  const [deadlineIsValid, setDeadline] = useState(true)
  const [deadlineInput, setInputDeadline] = useState('')
  const deadlineValue = useRef('')

  useEffect(() => {
    deadlineValue.current = deadlineInput
  }, [deadlineInput])

  //Alternando botões do rendimento
  function activeGrossButton() {
    setGrossButton('active')
    setLiquidButton('disabled')
    setActiveIncomeButton('bruto')
  }

  function activeLiquidButton() {
    setGrossButton('disabled')
    setLiquidButton('active')
    setActiveIncomeButton('liquido')
  }

  //Alternando botões dos tipos de indexação
  function activePreviousButton() {
    setPreviousButton('active')
    setPosteriorButton('disabled')
    setFixedButton('disabled')
    setActiveIndexingButton('pre')
  }

  function activePosteriorButton() {
    setPreviousButton('disabled')
    setPosteriorButton('active')
    setFixedButton('disabled')
    setActiveIndexingButton('pos')
  }

  function activeFixedButton() {
    setPreviousButton('disabled')
    setPosteriorButton('disabled')
    setFixedButton('active')
    setActiveIndexingButton('ipca')
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
      setInputInitialContribution('')
      setValidateForm(false)
      setInitialContribution(false)
      e.target.value = ''
      return
    }

    setInputInitialContribution(num)
    setInitialContribution(true)
    e.target.value = `R$ ${num}`
  }

  //Validando prazo
  function validateDeadline(e) {
    let num = e.target.value
    num = num.replace(/\D/gi, '')

    if (num === '') {
      setInputDeadline('')
      setValidateForm(false)
      setDeadline(false)
      e.target.value = ''
      return
    }

    setInputDeadline(num)
    setDeadline(true)
    e.target.value = `${num}`
  }

  //Validando o campo de contribuição mensal
  function validateMonthlyContribution(e) {
    let num = e.target.value
    num = num.replace(/[R$]|\D/gi, '')

    if (num === '') {
      setInputMonthlyContribution('')
      setValidateForm(false)
      setMonthlyContribution(false)
      e.target.value = ''
      return
    }

    setInputMonthlyContribution(num)
    setMonthlyContribution(true)
    e.target.value = `R$ ${num}`
  }

  //Validando o campo de rentabilidade
  function validateProfitability(e) {
    let num = e.target.value

    num = num.replace(/\D|%*/gi, '')

    if (num === '') {
      setInputProfitability('')
      setValidateForm(false)
      setProfitability(false)
      e.target.value = ''
      return
    }

    setInputProfitability(num)
    setProfitability(true)
    e.target.value = num + '%'
  }

  //Fetching dos indicadores
  const [ipcaValue, setIpcaValue] = useState('Carregando...')
  const [cdiValue, setCdiValue] = useState('Carregando...')
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
    let simulateData = [activeIncomeButton, activeIndexingButton]
    props.onSimulate(simulateData)
  }

  //Validando formulário
  const [formIsValid, setValidateForm] = useState(false)
  function validateForm() {
    if (
      profitabilityIsValid &&
      monthlyContributionIsValid &&
      initialContributionIsValid &&
      deadlineIsValid &&
      profitabilityInput !== '' &&
      monthlyContributionInput !== '' &&
      initialContributionInput !== '' &&
      deadlineInput !== ''
    ) {
      setValidateForm(true)
    } else {
      setValidateForm(false)
    }
  }

  useEffect(() => {
    validateForm()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    profitabilityInput,
    monthlyContributionInput,
    initialContributionInput,
    deadlineInput,
  ])

  //Mostrando campos inválidos ao usuário
  function showInvalidInputs() {
    validateForm()

    if (profitabilityIsValid === false || profitabilityValue.current === '') {
      setProfitability(false)
    }

    if (
      monthlyContributionIsValid === false ||
      monthlyContributionValue.current === ''
    ) {
      setMonthlyContribution(false)
    }

    if (
      initialContributionIsValid === false ||
      initialContributionValue.current === ''
    ) {
      setInitialContribution(false)
    }

    if (deadlineIsValid === false || deadlineValue.current === '') {
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
              id="aporteInicial"
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
              id="prazoMeses"
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
              id="aporteMensal"
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
              id="rentabilidade"
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
