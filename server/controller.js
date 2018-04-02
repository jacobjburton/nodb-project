const externalUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
const axios = require('axios');
const decodeUriComponent = require('decode-uri-component');
var answers =
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

// let index = answers.length+1;
//let id = 1;

module.exports = 
{
    read: (req, res) => 
    {
        res.status(200).send(answers);
    },
    response: (req, res) => 
    {
        
        let newResponse = "";
        let idNumber = Math.floor(Math.random()*answers.length+1);
        //console.log(idNumber);
        for (var i = 0; i<answers.length; i++)
        {
            // console.log(i);
            if (+answers[i].id === +idNumber)
            {
                //console.log(i);
                newResponse = answers[i].answer;
            };
            
        };
        res.status(200).send(newResponse);
    },
    create: (req, res) =>
    {
        // let index = answers.length+1;
        let inputIndex = 1;
        for (var i = 0; i<answers.length; i++)
        {
            if (answers[i].id !== inputIndex)
            {    
               inputIndex = answers[i-1].id + 1;
               break;
            }
            else
            {
                inputIndex++;
            }
        }
        //console.log(inputIndex);
        const { answer } = req.body;
        let response =
        {
            id: inputIndex,
            answer: answer
        };
        answers.splice(i, 0, response);
        
        res.status(200).send(answers);
    },
    update: (req, res) =>
    {
        console.log(req.body);
       // let id = 1
        let index = null;
        let newAnswers = answers.slice();
        newAnswers.forEach((answer, i) =>
        {
            if(answer.id === +req.params.id)
            {
                index = i;
            };
        });
        console.log(index);
        newAnswers[index] =
        {
            id: newAnswers[index].id,
            answer: req.body.text.answer      
        };
        answers = newAnswers.slice();
        res.status(200).send(answers);
    },
    delete: (req, res) =>
    {
        let index = null;
        answers.forEach((response, i) =>
        {
            if(+response.id === +req.params.id)
            {
                index = i;
            };
        });
        
        answers.splice(index, 1);
        res.status(200).send(answers);
    },
    clearAll: (req, res) =>
    {   
        id = 1;
        //let index = 1;
        answers.length = 0;
        res.status(200).send(answers);
    },
    quote: (req, res) => {
        let inputIndex = 1;
        for (var i = 0; i<answers.length; i++)
        {
            if (answers[i].id !== inputIndex)
            {    
               inputIndex = answers[i-1].id + 1;
               break;
            }
            else
            {
                inputIndex++;
            }
        }
       // let id = answers.length + 1;
        let newQuote = {};
        axios.get(`${externalUrl}`).then(response =>
        {   
            //console.log(response.data);
            newQuote.id = inputIndex;
            //console.log(decodeUriComponent("Why expect spec work from a graphic designer when you don&#8217;t expect%20the same from a dentist?"))
            let newString = response.data[0].content;
            //console.log(newString)
            newString = newString.replace(/&#8217;/g, "'");
            //console.log(newString);
            let startIndex = newString.indexOf(">")
            let endIndex = newString.indexOf("<", startIndex)

            //console.log(startIndex, endIndex);
            newQuote.answer = newString.slice(startIndex + 1, endIndex);
            //console.log(newQuote.answer);
            // answers.push(newQuote);
            answers.splice(i, 0, newQuote);
            res.send(answers);
        });
    }
}