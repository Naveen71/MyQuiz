import {Component} from 'react'
import './index.css'

class QuestionHeader extends Component{
    constructor(props){
        super(props)
        this.state={
            timer:10
        }
    }
    
    componentDidMount=()=>{
        this.tick();
    }

    componentWillUnmount=()=>{
        clearInterval(this.id)
    }

    tick=()=>{
        const {timeLimit}=this.props
        console.log(timeLimit)
        this.setState({timer:timeLimit})
        this.id=setInterval(()=>{
            const {timer}=this.state
            const {onNextQuestion}=this.props;
            if(timer>0){
                this.setState((prevState)=>{return {timer:prevState.timer-1}})
            }
        else{
            clearInterval(this.id)
            onNextQuestion()

        }},1000)
    }
    
    render(){
        const {score,questionNum}=this.props
        const {timer}=this.state
        return(
        <div className="questionContainer">
            <div className="scoreContainer">
                <p className="questionDetails">Score :{" "}</p>
                <p className="questionDetails">{score}</p>
            </div>
            <div className="questionNumContainer">
                <h1 className="questionNum">{questionNum} out of 10</h1>
            </div>
            <div className="timerContainer">
                <p className="questionDetails">Time :{" "} </p>
                <p className="questionDetails">{timer}</p>
            </div>
        </div>
        )
    }
}

export default QuestionHeader