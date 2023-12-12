const express = require("express");
// fs is locally, express is not, need to install

const bodyParser = require("")

const app = express(); //its an fn which returns an object
const port = 3000;


// app.use(express.json()) for body parser
app.get('/', (req, res) =>{
    console.log(req.body);
    // need body parser.
    res.send('Hello world!!');
});

app.listen(port, ()=> {
    console.log(`exmple app listening to port ${port}`);
});