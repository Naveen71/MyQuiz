import {Component} from 'react'
import '../../images/welcome.jpg'
import './index.css'

class Welcome extends Component{

    state={
        userLevel:"easy"
    }

    onStartQuiz=()=>{
        const {startQuiz}=this.props
        const {userLevel}=this.state
        startQuiz(userLevel)
    }

    selectedOption=(event)=>{
        this.setState({level:event.target.value})
    }

    render() {
        return (
            <div className="welcomeContainer">
                <div className="subContainer">
                    <h1 className="welcomemessage">How well do you know the concepts of Computer Science? Take the quiz and find out!</h1>
                    <div className="difficultylevel">
                        <p className="para">Please select the difficulty level</p>
                        <select className="difficultyoptions" onChange={this.selectedOption}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>  
                    <button className="startbutton" onClick={this.onStartQuiz}>Start Quiz</button>
                    <p className="instructions">You have 10 seconds to answer each question. When you are done, try again to beat your best score!</p>
                </div>
            </div>
        )
    }
}

export default Welcome;