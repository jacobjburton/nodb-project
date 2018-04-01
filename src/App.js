import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Question from './Question.js';
import Responses from './Responses.js';
import Header from './Header.js';
//import DisplayResponses from './DisplayResponses.js';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = 
    {
      // input: '',
      displayQuestion: "",
      responses: [],
      response: "",
      
    };

    this.createAnswer = this.createAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.askQuestion = this.askQuestion.bind(this);
    this.clearAll = this.clearAll.bind(this);

  }  

  componentDidMount()
  {
    axios.get(`/api/getanswers`).then(res =>
    {
      console.log(res.data);
      this.setState({ responses: res.data });
    });
  }

  createAnswer(text)
  {
    axios.post(`/api/getanswers`, {text}).then(res =>
    {
      this.setState({ responses: res.data });
    });
  }

  updateAnswer(id, text)
  {
    axios.put(`/api/getanswers?id=${id}`, {text}).then(res =>
    {
      this.setState({ responses: res.data });
    });
  }

  deleteAnswer(id)
  {
    axios.delete(`/api/getanswers?id=${id}`).then(res =>
    {
      this.setState({ responses: res.data });
    });
  }
 
  askQuestion()
  {
      axios.get(`/api/response`).then(res =>
      {
          this.setState({ response: res.data });
      });
  } 
 
  clearAll()
  {
    axios.delete(`/api/clearall`).then(res =>
    {
        this.setState({ responses: res.data });
    });
  }
  showAll()
  {
    axios.delete(`/api/getanswers`).then(res => 
    {
      this.setState({ responses: res.data })
    });
  }


  render() 
  {
    const { responses } = this.state;

    return (
      <div className="App_parent">
        <Header />
        <section className="Question_display_parent">
          <div className="Question_display">  
            {/* {console.log(this.state.responses)} */}
            <Question askQuestionFn={this.askQuestion}
              displayResponse={this.state.response} />
            

          </div>
        </section>
        <section className="Display_list">
          {/* <button>Show All Responses</button>
          <DisplayResponses askforResponses={responses}/> */}
        </section>
          
        <br/>
        <section className="Answers_display_parent">
          <div className="Answers_list">
            <button onClick={this.Showall}>Show all responses</button>
            <Responses clearAllFn={this.clearAll}
              list={responses}
              />
          </div>
          <div className="Mod_buttons">
            
          </div>
        </section>
      </div>
    );
  }
}

export default App;
