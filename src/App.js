import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import Question from './Question.js';
import Responses from './Responses.js';
import Header from './Header.js';

class App extends Component {
  // constructor(props)
  // {
  //   super(props);

  //   this.state = 
  //   {
  //     // input: '',
  //     displayQuestion: "",
  //     answers: [],
  //     //response: "",
      
  //   };

  // }  

  render() 
  {
 
    return (
      <div className="App_parent">
        <header>
          <Header />
        </header>
        <section className="body">
          <section className="Question_display_parent">
            <div className="Question_display">  
              <Question />
            </div>
          </section>          
          <br/>
          <section className="Answers_display_parent">
            <div className="Answers_list">
              <Responses />
            </div>
            <div className="Mod_buttons">              
            </div>
          </section>
        </section>  
        <footer>
          <Header />
        </footer>
      </div>
    );
  }
}

export default App;
