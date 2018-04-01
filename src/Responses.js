import React, { Component } from 'react';
//import axios from 'axios';
//import DisplayResponses from './DisplayResponses.js';

class Responses extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
           //displayAllResponses:  [],
           //listOfAnswers: []
           
        };

        this.showAll = this.showAll.bind(this);
        this.clearAll = this.clearAll.bind(this);
       // this.askForResponses = this.askForResponses.bind(this);
    }

    // showAll()
    // {   
    //     console.log('hi');
    //     this.setState({ displayAllResponses: this.props.responseList });
    //     console.log(this.state.displayAllResponses)
    // }

    clearAll()
    {
        this.props.clearAllFn();
    }

    showAll()
    {   
        this.props.showAllFn();
        
      
        // return (
        //     <DisplayResponses show={this.props.list}/>
        // );
    }

    render()
    {
        // const { listOfAnswers } = this.props;      
        let listDisplay = this.props.list.map((e,i) =>
        {
            return (
                <div className="Response_list_parent"> 
                        
                    <div key={i} className="Response_list">
                        <button 
                            key={e+i}
                            className="Edit_buttons">Edit</button>
                        {"#" + e.id + " " + e.answer}
                        <button key={i+e} className="Delete_buttons">Delete</button>
                    </div>
                </div>
            );
        });
        return (
            <div>
                {console.log(this.props.list)}
           
                <br/>
                {listDisplay}
                {/* <DisplayResponses askForResponses={listOfAnswers}/> */}

                {/* <p>{this.props.responseList}</p> */}
                {/* {listOfAnswers} */}
                
                <br/>
                <button onClick={this.clearAll}>Clear all responses</button>
            </div>
        );
    }
}

export default Responses;