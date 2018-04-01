// express node server here

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const port = 3005;
const app = express();

// top level middleware
app.use(bodyParser.json());
//app.use(express.static(_dirname = "/../build"));



// endpoints
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