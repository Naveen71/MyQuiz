(this["webpackJsonpmy-quiz"]=this["webpackJsonpmy-quiz"]||[]).push([[0],{18:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(9),r=n.n(c),o=(n(18),n(3)),a=n(4),u=n(6),l=n(5),j=n(13),d=n(8),h=n.n(d),p=n(12),m=n(10),b=n(11),O=n.n(b),v=(n(40),n(41),n(42),n(0)),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onSelection=function(){var t=e.props,n=t.option;(0,t.onUserSelection)(n)},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.option,n=e.isRight,s=e.selectedOption,i=e.correctAnswer,c=e.isSelected,r=e.index,o=e.correctOptionIndex,a="normalAnswer",u=Object(v.jsx)("div",{children:Object(v.jsxs)("p",{children:["That's wrong, correct option is :","  ",o+1]})});return"wrongAnswer"===(a=!0===n&&t===s?"rightAnswer":t===s?"wrongAnswer":t===i&&!0===c?"rightAnswer":"normalAnswer")?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{onClick:this.onSelection,className:a,children:Object(v.jsxs)("p",{className:"option",children:[r+1,".","  ",t]})}),Object(v.jsx)("div",{className:"comments",children:u})]}):Object(v.jsx)("div",{onClick:this.onSelection,className:a,children:Object(v.jsxs)("p",{className:"option",children:[r+1,".","  ",t]})})}}]),n}(s.Component),x=(n(44),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isRight:!1,selectedOption:null,isSelected:!1},e.onUserSelection=function(t){var n=e.props,s=n.correctAnswer,i=n.changeScore;e.state.isSelected||(t===s?(i(),e.setState({isRight:!0,selectedOption:t,isSelected:!0})):e.setState({isRight:!1,selectedOption:t,isSelected:!0}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,s=t.correctAnswer,i=t.options,c=void 0===i?[]:i,r=this.state,o=r.isRight,a=r.selectedOption,u=r.isSelected,l=c.indexOf(s);return Object(v.jsxs)("div",{className:"questionAndOptionsContainer",children:[Object(v.jsx)("div",{className:"singleQuestionContainer",children:Object(v.jsx)("h1",{className:"question",children:n})}),Object(v.jsx)("div",{className:"optionsList",children:c.map((function(t,n){return Object(v.jsx)(f,{correctOptionIndex:l,option:t,index:n,correctAnswer:s,onUserSelection:e.onUserSelection,isRight:o,isSelected:u,selectedOption:a},n)}))})]})}}]),n}(s.Component)),g=(n(45),function(e){var t=e.score,n=e.startGameAgain;return Object(v.jsx)("div",{className:"resultContainer",children:Object(v.jsxs)("div",{className:"subResultContainer",children:[Object(v.jsxs)("h1",{children:["Your Score is ",t]}),Object(v.jsx)("button",{className:"restartButton",type:"button",onClick:function(){n()},children:"Start Again"})]})})}),N=(n(46),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.tick()},s.componentWillUnmount=function(){clearInterval(s.id)},s.tick=function(){var e=s.props.timeLimit;console.log(e),s.setState({timer:e}),s.id=setInterval((function(){var e=s.state.timer,t=s.props.onNextQuestion;e>0?s.setState((function(e){return{timer:e.timer-1}})):(clearInterval(s.id),t())}),1e3)},s.state={timer:10},s}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.questionNum,s=this.state.timer;return Object(v.jsxs)("div",{className:"questionContainer",children:[Object(v.jsxs)("div",{className:"scoreContainer",children:[Object(v.jsxs)("p",{className:"questionDetails",children:["Score :"," "]}),Object(v.jsx)("p",{className:"questionDetails",children:t})]}),Object(v.jsx)("div",{className:"questionNumContainer",children:Object(v.jsxs)("h1",{className:"questionNum",children:[n," out of 10"]})}),Object(v.jsxs)("div",{className:"timerContainer",children:[Object(v.jsxs)("p",{className:"questionDetails",children:["Time :"," "," "]}),Object(v.jsx)("p",{className:"questionDetails",children:s})]})]})}}]),n}(s.Component)),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={score:0,quizQuestions:[],currentQuestionNum:0,timeLimit:10},e.fetchQuestions=Object(m.a)(h.a.mark((function t(){var n,s,i,c,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.level,s="https://opentdb.com/api.php?amount=10&category=18&difficulty="+n+"&type=multiple",t.next=4,fetch(s);case 4:return i=t.sent,t.next=7,i.json();case 7:c=t.sent,r=c.results.map((function(e){return{question:e.question,options:[e.correct_answer].concat(Object(p.a)(e.incorrect_answers)),correctAnswer:e.correct_answer,wrongAnswers:e.incorrect_answers}})),o=r.map((function(e){var t=Math.floor(4*Math.random());return{question:e.question,correctAnswer:e.correctAnswer,wrongAnswers:e.wrongAnswers,options:e.options.slice(t,e.options.length).concat(e.options.slice(0,t))}})),e.setState({quizQuestions:o});case 11:case"end":return t.stop()}}),t)}))),e.onNextQuestion=function(){e.setState((function(e){return{currentQuestionNum:e.currentQuestionNum+1}}))},e.startGameAgain=function(){var t=e.props.restartQuiz;e.setState({score:0,quizQuestions:[],currentQuestionNum:0,timeLimit:10}),t()},e.changeScore=function(){e.setState((function(e){return{score:e.score+1}}))},e.componentDidMount=function(){e.fetchQuestions()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.quizQuestions,n=e.currentQuestionNum,s=e.score,i=e.timeLimit,c=t.length;if(console.log("inQuiz"+i),10===n){var r=this.state.score;return Object(v.jsx)(g,{score:r,startGameAgain:this.startGameAgain})}var o=t[n];return c>0?Object(v.jsxs)("div",{className:"singlePageContainer",children:[Object(v.jsx)(N,{score:s,questionNum:n+1,timeLimit:i,onNextQuestion:this.onNextQuestion},n+1),Object(v.jsx)(x,Object(j.a)({changeScore:this.changeScore},o),n),Object(v.jsx)("button",{type:"button",className:"nextButton",onClick:this.onNextQuestion,children:"Next"})]}):Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)(O.a,{type:"ThreeDots",color:"#0284c7",height:80,width:80})})}}]),n}(s.Component),S=(n.p,n(47),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={userLevel:"easy"},e.onStartQuiz=function(){(0,e.props.startQuiz)(e.state.userLevel)},e.selectedOption=function(t){e.setState({level:t.target.value})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"welcomeContainer",children:Object(v.jsxs)("div",{className:"subContainer",children:[Object(v.jsx)("h1",{className:"welcomemessage",children:"How well do you know the concepts of Computer Science? Take the quiz and find out!"}),Object(v.jsxs)("div",{className:"difficultylevel",children:[Object(v.jsx)("p",{className:"para",children:"Please select the difficulty level"}),Object(v.jsxs)("select",{className:"difficultyoptions",onChange:this.selectedOption,children:[Object(v.jsx)("option",{value:"easy",children:"Easy"}),Object(v.jsx)("option",{value:"medium",children:"Medium"}),Object(v.jsx)("option",{value:"hard",children:"Hard"})]})]}),Object(v.jsx)("button",{className:"startbutton",onClick:this.onStartQuiz,children:"Start Quiz"}),Object(v.jsx)("p",{className:"instructions",children:"You have 10 seconds to answer each question. When you are done, try again to beat your best score!"})]})})}}]),n}(s.Component)),y=(n(48),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={selectedLevel:"easy",isQuizStarted:!1},e.startQuiz=function(t){e.setState({isQuizStarted:!0,selectedLevel:t})},e.restartQuiz=function(){e.setState({isQuizStarted:!1,selectedLevel:"easy"})},e}return Object(a.a)(n,[{key:"render",value:function(){return this.state.isQuizStarted?Object(v.jsx)(w,{level:this.state.selectedLevel,restartQuiz:this.restartQuiz}):Object(v.jsx)(S,{startQuiz:this.startQuiz})}}]),n}(s.Component)),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),Q()}},[[49,1,2]]]);
//# sourceMappingURL=main.2f782028.chunk.js.map