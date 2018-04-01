import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Question from './Question.js';
import Responses from './Responses.js';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = 
    {
      // input: '',
      displayQuestion: "",
      answers: [],
      //response: "",
      
    };

    this.createAnswer = this.createAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  
  }  

  // componentDidMount()
  // {
  //   axios.get(`/api/getanswers}`).then(res =>
  //   {
  //     //console.log(res.data);
  //     this.setState({ answers: res.data });
  //   });
  // }

  createAnswer(text)
  {
    axios.post(`/api/getanswers`, {text}).then(res =>
    {
      this.setState({ answers: res.data });
    });
  }

  updateAnswer(id, text)
  {
    axios.put(`/api/getanswers?id=${id}`, {text}).then(res =>
    {
      this.setState({ answers: res.data });
    });
  }

  deleteAnswer(id)
  {
    axios.delete(`/api/getanswers?id=${id}`).then(res =>
    {
      this.setState({ answers: res.data });
    });
  }
  
  render() 
  {
    // const { answers } = this.state;

    return (
      <div className="App_parent">
        <section className="Title_parent">
          <img src="https://papersource.scene7.com/is/image/PaperSource/10003102?resMode=sharp&id=3N-qP0&fmt=jpg&fit=constrain,1&wid=380&hei=380" alt="8ball"/>
          <h1 className="Title">Magic 8 Ball</h1>
        </section>
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
      </div>
    );
  }
}

export default App;
