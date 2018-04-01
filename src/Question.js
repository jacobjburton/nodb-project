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
            questionToDisplay: ""
        };
        
        this.askQuestion = this.askQuestion.bind(this);
        this.inputValue = this.inputValue.bind(this);
        
    }

    inputValue(text)
    {
        this.setState(
        { 
            question: text
        });
    }
    askQuestion()
    {
        
        this.props.askQuestionFn();
        this.setState(
        {
            questionToDisplay: this.state.question,
            question: "" 
        });
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
            <DisplayQuestion q={this.state.questionToDisplay}/>
            <p>{this.props.displayResponse}</p>
            {/* <p>{console.log(this.state.question)}</p> */}
            <section className="Answer_display">
                {/* {this.askQuestion()} */}
            </section>
        </div>
      );
    }
}

export default Question;