import './index.css'

const Result=(props)=>{
    const {score,startGameAgain}=props

    const gameRestart=()=>{
        startGameAgain()
    }
    return (
        <div className="resultContainer">
            <div className="subResultContainer">
                <h1>Your Score is {score}</h1>
                <button className="restartButton" type="button" onClick={gameRestart}>Start Again</button>
            </div>
        </div>
    )
}

export default Result