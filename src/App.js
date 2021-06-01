import {Component} from 'react'
import Quiz from './components/Quiz'
import Welcome from './components/Welcome'
import './App.css';

class App extends Component{
  state={
      selectedLevel:"easy",
      isQuizStarted:false
  }

  startQuiz=(level)=>{
      this.setState({isQuizStarted:true,selectedLevel:level});
  }  

  restartQuiz=()=>{
      this.setState({isQuizStarted:false,selectedLevel:"easy"});
  }

  render(){
      const {isQuizStarted}=this.state
      if (isQuizStarted){
          return <Quiz level={this.state.selectedLevel} restartQuiz={this.restartQuiz}/>
      }
      else{
         return <Welcome startQuiz={this.startQuiz}/>
      }
  }
}

export default App;
