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
              <h5 className='first-variable'>Rendimento</h5>
              <img src={info} alt="mais informaões" className='info'></img>
            </div>

            <div className='income-buttons'>
                <button className='active'>Bruto</button>
                <button>Líquido</button>
            </div>

            <div className='income-variables'>
              <h5>Aporte Inicial</h5>
              <input type="text"></input>

              <h5>Prazo (em meses)</h5>
              <input type="text"></input>

              <h5>IPCA (ao ano)</h5>
              <input type="text"></input>
            </div>
        </div>
      </div>

      <div className="section">
        <div className='indexing'>
            <div className="indexing-top">
              <h5 className='first-variable'>Tipos de indexação</h5>
              <img src={info} alt="mais informaões" className='info'></img>
            </div>

            <div className='indexing-buttons'>
                <button>PRÉ</button>
                <button className='active'>POS</button>
                <button>FIXADO</button>
            </div>

            <div className='indexing-variables'>
              <h5>Aporte Mensal</h5>
              <input type="text"></input>

              <h5>Rentabilidade</h5>
              <input type="text"></input>

              <h5>CDI (ao ano)</h5>
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
