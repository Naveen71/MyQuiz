import {Component} from 'react'
import Options from '../Options'
import './index.css'

class Question extends Component{
    state={
        isRight:false,
        selectedOption:null,
        isSelected:false
    }

    onUserSelection=(value)=>{
        const {correctAnswer,changeScore}=this.props
        const {isSelected}=this.state
        if (!isSelected){
            if (value===correctAnswer){
                changeScore();
                this.setState({isRight:true,selectedOption:value,isSelected:true});
            }
            else{
                this.setState({isRight:false,selectedOption:value,isSelected:true});
            }  
        }
        
    }

    render(){
        const {question,correctAnswer,options=[]}=this.props
        const {isRight,selectedOption,isSelected}=this.state
        let correctOptionIndex=options.indexOf(correctAnswer)
        return (
            <div className="questionAndOptionsContainer">
                <div className="singleQuestionContainer">
                    <h1 className="question">{question}</h1>
                </div>
                <div className="optionsList">
                    {options.map((eachOption,index) => (
                    <Options correctOptionIndex={correctOptionIndex} key={index} option={eachOption} index={index} correctAnswer={correctAnswer} 
                    onUserSelection={this.onUserSelection} isRight={isRight} 
                    isSelected={isSelected} selectedOption={selectedOption}/>))}
                </div>
            </div>
        )
    }
}


export default Question