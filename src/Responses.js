import React, { Component } from 'react';
import axios from 'axios';
//import DisplayResponses from './DisplayResponses.js';

class Responses extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
           answersToDisplay: [], 
           
        };

        this.askForAnswers = this.askForAnswers.bind(this);
        this.clearAllAnswers = this.clearAllAnswers.bind(this);
        // this.deleteAnswer = this.deleteAnswer.bind(this);
    }
    // componentDidMount()
    // {
    //     axios.get(`/api/getanswers}`).then(res =>
    //     {
    //     //console.log(res.data);
    //     this.setState({ answersToDisplay: res.data });
    //     });
    // }
    
    // askForAnswers()
    // {   
    //     axios.get(`/api/getanswers`).then(res =>
    //     {
    //    //console.log(res.data);
    //     this.setState({ answersToDisplay: res.data });
    //     });
    // }

    // clearAllAnswers()
    // {
    //     axios.delete(`/api/clearall`).then(res =>
    //     {
    //         this.setState({ answersToDisplay: res.data });
    //     });
    // }

    // deleteAnswer(id)
    // {
    //   axios.delete(`/api/getanswers?id=${id}`).then(res =>
    //   {
    //     this.setState({ answers: res.data });
    //   });
    // }



    render()
    {
        let listOfAnswers = this.state.answersToDisplay.map((e,i) =>
        {
            return (
                <div className="Response_list_parent">        
                    <div key={i} className="Response_list">
                        <button 
                            className="Edit_buttons">Edit</button>
                        {"#" + e.id + " " + e.answer}
                        <button 
                            className="Delete_buttons"
                            // onClick={this.deleteAnswer}
                        >Delete</button>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <button onClick={this.askForAnswers}>Show all responses</button>
                <br/>
                {listOfAnswers}
                {/* <DisplayResponses theseAnswers={this.state.answersToDisplay}/> */}
                <br/>
                <button onClick={this.clearAllAnswers}>Clear all responses</button>
            </div>
        );
    }
}

export default Responses;