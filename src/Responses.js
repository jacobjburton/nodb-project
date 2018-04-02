import React, { Component } from 'react';
import axios from 'axios';


class Responses extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            answersToDisplay: [], 
            newResponse: '',
            editId: '',
            editText: '',
            deleteId: '',
        };

        this.createAnswer = this.createAnswer.bind(this);
        this.newResponseClick = this.newResponseClick.bind(this);
        this.responseValue = this.responseValue.bind(this);
        this.askForAnswers = this.askForAnswers.bind(this);
        this.clearAllAnswers = this.clearAllAnswers.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.editClick = this.editClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.editIdValue = this.editIdValue.bind(this);
        this.editTextValue = this.editTextValue.bind(this);
        this.deleteIdValue = this.deleteIdValue.bind(this);
    }
    // componentDidMount()
    // {
    //     axios.get(`/api/getanswers}`).then(res =>
    //     {
    //     //console.log(res.data);
    //     this.setState({ answersToDisplay: res.data });
    //     });
    // }
    

    askForAnswers()
    {   
        axios.get(`/api/getanswers`).then(res =>
        {
       //console.log(res.data);
        this.setState({ answersToDisplay: res.data });
        });
    }

    clearAllAnswers()
    {
        axios.delete(`/api/clearall`).then(res =>
        {
            this.setState({ answersToDisplay: res.data });
        });
    }

    createAnswer(text)
    {
      axios.post(`/api/getanswers`, text).then(res =>
      {
        this.setState({ answersToDisplay: res.data });
      });
    }

    responseValue(text)
    {
        this.setState(
        { 
            newResponse: text
        });
    }
    newResponseClick()
    {
        let body = {answer: this.state.newResponse};
        this.createAnswer(body)
        this.askForAnswers();
        this.setState(
        { 
            newResponse: "" 
        });
    }

    updateAnswer(id, text)
    {
    
        // console.log(id);
        // console.log(text);
        axios.put(`/api/getanswers/${id}`, {text}).then(res =>
        {
            // console.log(id)
            // console.log(text)
            this.setState({ answersToDisplay: res.data });
        });
    }

    deleteAnswer(id)
    {
        axios.delete(`/api/getanswers/${id}`).then(res =>
        {
            this.setState({ answersToDisplay: res.data });
        });
    }

    editIdValue(num)
    {
        this.setState({ editId: num });
    }

    editTextValue(text)
    {
        this.setState({ editText: text });
    }

    editClick()
    {
        // let idNum = this.state.editId;
    
        let body = 
        {
            id: +this.state.editId,
            answer: this.state.editText
        };
        // console.log(body.id);
        // console.log(body.answer);
        this.updateAnswer(body.id, body);
        this.askForAnswers();
        this.setState(
        {
            editId: '',
            editText: ''
        });
    }

    deleteIdValue(num)
    {
        this.setState({ deleteId: num })
    }

    deleteClick()
    {
        let body = {id: +this.state.deleteId};
        this.deleteAnswer(body.id);
        this.askForAnswers();
        this.setState({ deleteId: '' })
    }

    render()
    {
        let listOfAnswers = this.state.answersToDisplay.map((e,i) =>
        {
            return (
                <div key={i+i} className="Response_list">
                    {/* <button key={i+e}
                        // onChange={this.props.deleteAnswer()}
                        className="Edit_buttons">Edit</button> */}
                    {"#" + e.id + " " + e.answer}
                    {/* <button 
                        key={e+i} 
                        className="Delete_buttons"
                        >
                        Delete</button> */}
                </div>

            );
        });
        return (
            <div>
                <button onClick={this.askForAnswers}>Show All Responses</button>
                <br/>
                <div className="Response_list_parent">
                    {listOfAnswers}
                </div>
                {/* <DisplayResponses theseAnswers={this.state.answersToDisplay}/> */}
                <br/>
                <button onClick={this.clearAllAnswers}>Clear All Responses</button>
                <br/>
                <div className="New_response">
                    
                    <h3>Add a New Response</h3>
                    <input 
                        placeholder="Enter a new response"
                        value={this.state.newResponse}
                        onChange={(e) => this.responseValue(e.target.value)}/>
                    <button 
                        className="New_response_button"
                        onClick={this.newResponseClick}>
                    Add Response</button>
                </div>
                <div className="Edit_boxes">
                    <h3>Edit Responses</h3>
                    <input
                        value={this.state.editId}
                        onChange={(e) => this.editIdValue(e.target.value)} 
                        placeholder="What number will you edit?"/>
                    <input
                        value={this.state.editText}
                        onChange={(e) => this.editTextValue(e.target.value)}
                        placeholder="New response:"/>
                    <button onClick={this.editClick}>Edit</button>
                </div>
                <div className="Delete_boxes">
                    <h3>Delete A Response</h3>
                    <input 
                        value={this.state.deleteId}
                        placeholder="What number will you delete?"
                        onChange={(e) => this.deleteIdValue(e.target.value)}/>
                    <button onClick={this.deleteClick}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Responses;