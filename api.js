
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentModel = require('./studentschema');
 
// Connecting to database
var query = 'mongodb://localhost:27017/College'
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
router.post('/save', function(req, res) {
    var newStudent = new StudentModel();
       newStudent.StudentId = req.body.StudentId;
       newStudent.Name = req.body.Name;
       newStudent.Roll = req.body.Roll;
       newStudent.Birthday = req.body.Birthday;
       
       newStudent.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });
    router.get('/findall', function(req, res) {
        StudentModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });
     router.get('/findOne/:id', function(req, res) {
        console.log(req.params.StudentId)
        StudentModel.findOne({StudentId:req.params.id}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });
    router.put('/update/:id', function(req, res) {
        StudentModel.findByIdAndUpdate(req.params.id, 
        {Name:req.body.Name,Roll:req.body.Roll}, function(err, data) {
            
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });
    router.delete('/delete/:id', function(req, res) {
        console.log(req.params.id)
        console.log(req.body.id)
        StudentModel.findByIdAndDelete((req.params.id), 
        
        function(err, data) {
            console.log(data)
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

module.exports = router;