import React, { Component } from 'react';
//import axios from 'axios';
import DisplayQuestion from './DisplayQuestion.js';

class Question extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            question: "",
           // response: '',
            //questionToDisplay: ""
        };
        
        this.askQuestion = this.askQuestion.bind(this);
        this.inputValue = this.inputValue.bind(this);
       // this.askQuestion = this.askQuestion.bind(this);

        
    }

    // askQuestion(text)
    // {
    //     axios.get(`/api/response`).then(res =>
    //     {
    //         this.setState({ response: res.data });
    //     });
    // }

    inputValue(text)
    {
        this.setState(
        { 
            question: text
        });
    }
    askQuestion()
    {
        
        this.props.askQuestionFn(this.state.question);
        this.setState({ question: "" });
    }
   


    render()
    {
      return (
        <div>
            <input
                
                value = {this.state.question} 
                placeholder="Ask a question!"
                onChange={(e) => this.inputValue(e.target.value)}
            />
            <button onClick={this.askQuestion}>Ask!</button>
            <DisplayQuestion q={this.props.displayQuestion}/>
            <p>{this.props.response}</p>
            {/* <p>{console.log(this.state.question)}</p> */}
            <section className="Answer_display">
                {/* {this.askQuestion()} */}
            </section>
        </div>
      );
    }
}

export default Question;