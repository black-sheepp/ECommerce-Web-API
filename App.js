const express = require('express');
const App = express();
const Port = 4000;
const route = express.Router();
const db = require('./Config/mongoose')



App.use('/',require('./Routes'))

App.listen(Port,()=>{
    console.log("Server is up and running on port:",Port);
})