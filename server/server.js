// express node server here

// top level middleware

// endpoints

// app.get('/api/stuff', (req, res) =>
// {
//     res.status(200).send(stuff);
// });

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use(express.static(_dirname = "/../build"));

app.get('/api/getanswers', controller.read);
app.get('/api/response', controller.response);
app.post('/api/getanswers', controller.create);
app.put('/api/getanswers/:id', controller.update);
app.delete('/api/getanswers/:id', controller.delete);
app.delete(`/api/clearall`, controller.clearAll)

app.listen(port, () =>
{
    console.log(`Server listening on port: ${port}`);
});