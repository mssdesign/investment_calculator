import './Simulator.css'

const Simulator = (props) => {
    function simulateInvestments() {
        props.onSimulate()
    }

    return (
        <div>
            simulator
            <button onClick={simulateInvestments}>click-me</button>
        </div>
    )
}

export default Simulator