
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mandar', {useNewUrlParser: true});


var db = mongoose.connection;
db.on("error", console.error.bind(console,"connectiom error"));
db.once("open",()=>{
    console.log('WE are Connected ');
});

var kittySchema = new mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

var Kitten = mongoose.model("Kitten",kittySchema);

var harryKitty = new Kitten({name:" harryKitty name"});
console.log(harryKitty.name);
harryKitty.speak();

harryKitty.save(function(err, harryKitty){
  if(err) return console.error("error");

})
Kitten.find({name:"Hello "},function(err, harryKitty){
  if(err) return console.error("error");
   console.log(harryKitty);
   
})