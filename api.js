

var express = require('express');
var app = express();
app.use(express.json());
const mongoose = require('mongoose');


// getting-started.js


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mark');
}
 const studentSchema = new mongoose.Schema({
    name:String,
    Roll : String,
    std : String
 });

const Student = mongoose.model('Student', studentSchema);


app.post("/student", function(req, res) {
    const newStudent = new Student(req.body);
    newStudent.save();
    res.send("Hello i am post");
   
    console.log(req.body);
    
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});