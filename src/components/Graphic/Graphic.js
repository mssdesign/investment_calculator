import './Graphic.css'
import api from '../../services/api'

const Graphic = (props) => {
    //http://localhost:3000/simulacoes?tipoIndexacao=pos&tipoRendimento=bruto
    //props.searchData[0]

    async function getSimulationValues() {
        await api
          .get('/simulacoes')
          .then((response) => {
            
          })
          .catch((err) => {
            console.log('Ocorreu um erro!' + err)
          })
    }

    return (
        <div className='results'>
            <h3 className="results-title">Resultado da Simulação</h3>

            <div className='board'>
                <div className='card'>
                    <h5>Valor final bruto</h5>
                    <p>{props.searchData[0]}</p>                    
                </div>
                <div className='card'>
                    <h5>Aliquota do IR</h5>
                    <p>R$ 15.509,27</p>
                </div>
                <div className='card'>
                    <h5>Valor pago em IR</h5>
                    <p>R$ 15.509,27</p>
                </div>
                <div className='card'>
                    <h5>Valor final líquido</h5>
                    <p>R$ 15.509,27</p>
                </div>
                <div className='card'>
                    <h5>Valor total investido</h5>
                    <p>R$ 15.509,27</p>
                </div>
                <div className='card'>
                    <h5>Ganho líquido</h5>
                    <p>R$ 15.509,27</p>
                </div>
            </div>

            <div className='graphic'>

            </div>
        </div>
    )
}

export default Graphic