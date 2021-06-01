import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import Question from '../Question'
import Result from '../Result'
import QuestionHeader from '../QuestionHeader'

class Quiz extends Component{

    state={
        score:0,
        quizQuestions:[],
        currentQuestionNum:0,
        timeLimit:10
    }

    fetchQuestions=async()=>{
        const level=this.props.level
        const url="https://opentdb.com/api.php?amount=10&category=18&difficulty="+level+"&type=multiple"
        const response=await fetch(url)
        const data=await response.json()
        const updatedData=data.results.map((each)=>({
            question:each.question,
            options:[each.correct_answer,...each.incorrect_answers],
            correctAnswer:each.correct_answer,
            wrongAnswers:each.incorrect_answers,
        }))
        
        let finalData=updatedData.map((each)=>{
            let randomNumber=Math.floor(Math.random()*4)
            return ({
            question:each.question,
            correctAnswer:each.correctAnswer,
            wrongAnswers:each.wrongAnswers,
            options:each.options.slice(randomNumber,each.options.length).concat(each.options.slice(0,randomNumber))
        })})
        this.setState({quizQuestions:finalData});
    }

    onNextQuestion=()=>{
        this.setState((prevState)=>{return {currentQuestionNum:prevState.currentQuestionNum+1}})
    }

    startGameAgain=()=>{
        const {restartQuiz}=this.props;
        this.setState({
            score:0,
            quizQuestions:[],
            currentQuestionNum:0,
            timeLimit:10
        })
        restartQuiz();
    }

    changeScore=()=>{
        this.setState((prevState)=>({score:prevState.score+1}))
    }

    componentDidMount=()=>{
        this.fetchQuestions()
    }

    render(){
        const {quizQuestions,currentQuestionNum,score,timeLimit}=this.state
        const length=quizQuestions.length
        console.log("inQuiz"+timeLimit);
        if (currentQuestionNum===10){
            const {score}=this.state
           return <Result score={score} startGameAgain={this.startGameAgain}/>
        }
        else{
            const currentQuestion=quizQuestions[currentQuestionNum];
            if (length>0){
                return (
                    <div className="singlePageContainer">
                        <QuestionHeader score={score} key={currentQuestionNum+1} questionNum={currentQuestionNum+1} timeLimit={timeLimit} onNextQuestion={this.onNextQuestion}/>
                        <Question key={currentQuestionNum} changeScore={this.changeScore} {...currentQuestion}/>
                        <button type='button' className="nextButton" onClick={this.onNextQuestion}>Next</button>
                    </div>
                )
            }
            else{
                return (
                <div className="loader">
                    <Loader type="ThreeDots" color="#0284c7" height={80} width={80}/>
                </div>  )
            }
            
        }   
    }
}

export default Quiz