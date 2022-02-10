import './Simulator.css'
import info from '../../assets/info.svg'

const Simulator = (props) => {
  function simulateInvestments() {
    props.onSimulate()
  }

  return (
    <div className="simulator">
      <h3 className="simulator-title">Simulador</h3>

      <div className="section">
        <div className='income'>
            <div className="income-top">
              <h6 className='first-variable'>Rendimento</h6>
              <img src={info} alt="mais informaões" className='info'></img>
            </div>

            <div className='income-buttons'>
                <button className='active'>Bruto</button>
                <button>Líquido</button>
            </div>

            <div className='income-variables'>
              <h6>Aporte Inicial</h6>
              <input type="text"></input>

              <h6>Prazo (em meses)</h6>
              <input type="text"></input>

              <h6>IPCA (ao ano)</h6>
              <input type="text"></input>
            </div>
        </div>
      </div>

      <div className="section">
        <div className='indexing'>
            <div className="indexing-top">
              <h6 className='first-variable'>Tipos de indexação</h6>
              <img src={info} alt="mais informaões" className='info'></img>
            </div>

            <div className='indexing-buttons'>
                <button>PRÉ</button>
                <button className='active'>POS</button>
                <button>FIXADO</button>
            </div>

            <div className='indexing-variables'>
              <h6>Aporte Mensal</h6>
              <input type="text"></input>

              <h6>Rentabilidade</h6>
              <input type="text"></input>

              <h6>CDI (ao ano)</h6>
              <input type="text"></input>
            </div>
        </div>
      </div>

      <div className="actions">
        <button onClick={simulateInvestments}>Limpar campos</button>
        <button onClick={simulateInvestments} id="simulate-action">Simular</button>
      </div>
    </div>
  )
}

export default Simulator
