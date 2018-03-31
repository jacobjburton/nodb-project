import React from 'react';


function DisplayAnswers(props)
{ 
    let listOfAnswers = props.theseAnswers.map((e,i) =>
    {
        return <div key={i}>{e.answer}</div>
    });

    return listOfAnswers;

        // let idNumber = Math.floor(Math.random()*this.props.thisAnswer.length+1);
        // //console.log(idNumber);
        // for (var i = 0; i<this.props.thisAnswer.length; i++)
        // {
        //     // console.log(i);
        //     if (+this.props.thisAnswer[i].id === +idNumber)
        //     {
        //         //console.log(i);
        //         this.setState({answer: this.props.thisAnswer[i].answer});
        //     }
            
        // };
        // return <p>{this.state.answer}</p>
        
    // let answer = props.thisAnswer[Math.floor(Math.random()*props.thisAnswer.length)];
    
    // console.log(answer);
    // return <p>{answer}</p>
    // let listOfAnswers = props.answers.map((e,i) =>
    // {
    //     return <div key={i}>{e.answer}</div>
    // });

    // return listOfAnswers;
    
}

export default DisplayAnswers;