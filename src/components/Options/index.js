import {Component} from 'react'
import './index.css'

class Options extends Component{
    onSelection=()=>{
        const {option,onUserSelection}=this.props;
        onUserSelection(option)
    }

    render(){
        const {option,isRight,selectedOption,correctAnswer,isSelected,index,correctOptionIndex}=this.props;
        let className="normalAnswer"
        let comments=<div><p>That's wrong, correct option is :{"  "}{correctOptionIndex+1}</p></div>
        if (isRight===true && option===selectedOption){
            className="rightAnswer"
        }
        else{
            if (option===selectedOption){
                className="wrongAnswer"
            }
            else{
                if (option===correctAnswer && isSelected===true){
                    className="rightAnswer"
                }
                else{
                    className="normalAnswer"
                }  
            }
        }
        
        if (className==="wrongAnswer"){
            return (  
                <>
                    <div onClick={this.onSelection} className={className}>
                        <p className="option">{index+1}.{"  "}{option}</p>
                    </div>
                    <div className="comments">
                        {comments}
                    </div>
                </>  
            )
        }
        else{
            return (  
                <div onClick={this.onSelection} className={className}>
                    <p className="option">{index+1}.{"  "}{option}</p>
                </div>
            )
        }
       
        
    }
}

export default Options