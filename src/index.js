const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/add ",(req,res)=>{
    res.json({
       status:"sucess",
       message:"the sum of given two numbers",
       sum:

    })
})
app.get("/sub ",(req,res)=>{
    res.json({
       status:"sucess",
       message:"the sub of given two numbers",
       sub:

    })
})
app.get("/multiply",(req,res)=>{
    res.json({
       status:"sucess",
       message:"the multiplication of given two numbers",
       mul:

    })
})
app.get("/divide",(req,res)=>{
    res.json({
       status:"sucess",
       message:"the divide of given two numbers",
       divide:

    })
})






app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;