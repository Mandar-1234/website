const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// getting-started.js

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/email');
}
const dataSchema = new mongoose.Schema({
    email : {
        type:String,
        unique: true
    },
        
    password:String,
  });

  const Data = mongoose.model('Data', dataSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
   res.sendFile(__dirname+'/1.html');
});

Data.find({},"/",(err,docs)=>{
   if(err){
    console.log('Some thing went wrong');
   }
   else{
      console.log(docs);
   }
});


app.post("/",(req, res)=>{
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    const silence = new Data({email: `${email}` , password: `${password}` });
    silence.save();
    
    console.log('hello');
    
});

app.listen(3000,()=>{
    console.log('Server is Started');  
});