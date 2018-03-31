import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DisplayAnswers from './DisplayAnswers.js';
//import Question from './Question.js';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      input: '',
      answers: [],
      response: "",
      baseLocation: "/api/getanswers"
    };

    this.askQuestion = this.askQuestion.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    
  }  

  componentDidMount()
  {
    axios.get(`${this.state.baseLocation}`).then(res =>
    {
      //console.log(res.data);
      this.setState({ answers: res.data });
    });
  }

  askQuestion(text)
  {
    axios.get(`/api/response`).then(res =>
    {
      this.setState({ response: res.data });
    });
  }

  createAnswer(text)
  {
    axios.post(`${this.state.baseLocation}`, {text}).then(res =>
    {
      this.setState({ answers: res.data });
    });
  }

  updateAnswer(id, text)
  {
    axios.put(`${this.state.baseLocation}?id=${id}`, {text}).then(res =>
    {
      this.setState({ answers: res.data });
    });
  }

  deleteAnswer(id)
  {
    axios.delete(`${this.state.baseLocation}?id=${id}`).then(res =>
    {
      this.setState({ posts: res.data });
    });
  }
  

  

  render() 
  {
    const { response, answers } = this.state;

    return (
      <div className="App_parent">
        <section className="Title_parent">
          <img src="https://papersource.scene7.com/is/image/PaperSource/10003102?resMode=sharp&id=3N-qP0&fmt=jpg&fit=constrain,1&wid=380&hei=380" alt="8ball"/>
          <h1 className="Title">Magic 8 Ball</h1>
        </section>
        <section>
          <input className="Question_input"
            placeholder="Ask a question" 
            type="text"/>
          <button className="Question_button" 
            onClick={this.askQuestion}>
            Ask!
          </button>
          <section className="Answer_display">
            {response}
            <DisplayAnswers theseAnswers={answers}/>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
