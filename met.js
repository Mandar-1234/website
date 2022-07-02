
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
console.log(path.join(__dirname,"1.html"))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"1.html"));
});

app.listen(PORT, ()=>{
    console.log(`server is started at ${PORT}`);
    
});
