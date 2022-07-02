const express = require('express');

//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mandar', {useNewUrlParser: true});


var db = mongoose.connection;
db.on("error", console.error.bind(console,"connectiom error"));
db.once("open",()=>{
    console.log('WE are Connected ');
});

var ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
});

var Contact = mongoose.model("Contact",ContactSchema);
const bodyparser = require(`body-parser`);

var parseUrl = require('body-parser');
const { connect } = require('http2');
const app = express();

let encodeUrl = parseUrl.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', encodeUrl, (req, res) => {
  console.log('Form request:', req.body);
  var myData = new Contact(req.body);
  myData.save()
  res.sendStatus(200);
});

Contact.updateOne({email:"mandarbuchake9@gmail.com"},{$set: {email:"1"}}, function(err, data){
  if(err){
    console.log(err);
  };
  console.log("should be the key VVV");
});
 


app.listen(4000,()=>{
  console.log('Server is Started');
  
});