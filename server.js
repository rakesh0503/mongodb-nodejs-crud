const express=require('express');
const bodyParser=require('body-parser');
const api = require('./api');
 
const port=30000;
const app=express();
app.get('/', (req, res) => {
    res.send("MONGODB CRUD")
})
app.listen(port, function(req,res) {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.use('/api', api);