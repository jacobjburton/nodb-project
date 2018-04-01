import React from 'react';


function List(props)
{
    let listOfAnswers = props.askforResponses.map((e,i) =>
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
}