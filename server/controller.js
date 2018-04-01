//var answers = require("./answers.js");
const axios = require('axios');
var responses =
[ 
    {
        id: 1,
        answer: "You probably ought to give up on life."
    },
    {
        id: 2,
        answer: "No."
    },
    {
        id: 3,
        answer: "Yes!"
    },
    {
        id: 4,
        answer: "Indubitably!"
    },
    {
        id: 5,
        answer: "Me no knows."
    },
    {   
        id: 6,
        answer: "Terrible question, go die in a fire."
    },
    {
        id: 7,
        answer: "Shut your fatty mouth!"
    },
    {
        id: 8,
        answer: "Your problems are, quite frankly, the most annoying thing I've ever had to listen to.  May God have mercy on your soul."
    },
    {
        id: 9,
        answer: "Sometimes I wish my creator had thought of a different project."
    },
    {
        id: 10,
        answer: "Super neat, man."
    }
];


let id = 1;

module.exports = 
{
    read: (req, res) => 
    {
        res.status(200).send(responses)
    },
    response: (req, res) => 
    {
        let newResponse = "";
        let idNumber = Math.floor(Math.random()*responses.length+1);
        //console.log(idNumber);
        for (var i = 0; i<responses.length; i++)
        {
            // console.log(i);
            if (+responses[i].id === +idNumber)
            {
                //console.log(i);
                newResponse = responses[i].answer;
            };
            
        };
        res.status(200).send(newResponse);
    },
    create: (req, res) =>
    {
        const { answer } = req.body;
        let response =
        {
            id: id,
            answer: answer
        };
        responses.push(response);
        id++;
        res.status(200).send(responses);
    },
    update: (req, res) =>
    {
        let index = null;
        responses.forEach((response, i) =>
        {
            if(response.id === +req.params.id)
            {
                index = i;
            };
        });
        responses[index] =
        {
            id: responses[index].id,
            title: req.body.answer || responses[index].answer            
        };
        res.status(200).send(responses);
    },
    delete: (req, res) =>
    {
        let index = null;
        responses.forEach((response, i) =>
        {
            if(response.id === +req.params.id)
            {
                index = i;
            };
        });
        responses.splice(index, 1);
        res.status(200).send(responses);
    },
    clearAll: (req, res) =>
    {   
        id = 1;
        let index = null;
        responses.length = 0;
        res.status(200).send(responses);
    }
}