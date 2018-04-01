import React, { Component } from 'react';
import './App.css';


class DisplayResponses extends Component
{
    // constructor(props)
    // {
    //     super(props);
    // }

    render()
    { 
        let listOfAnswers = this.props.theseAnswers.map((e,i) =>
        {
            return (
                <div className="Response_list_parent">        
                    <div key={i} className="Response_list">
                        <button 
                            // onChange={this.props.deleteAnswer()}
                            className="Edit_buttons">Edit</button>
                        {"#" + e.id + " " + e.answer}
                        <button className="Delete_buttons">Delete</button>
                    </div>
                </div>
            );
        });

        return (
            <div>
                    {listOfAnswers}
            </div>
        );   
    }
       
}

export default DisplayResponses;