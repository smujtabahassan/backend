require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{

    res.send("hello from home")
})

app.get('/shah',(req,res)=>{
    
    res.send("<h1>Syed MuJTABA hASSAN SHAH")

        })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port} `)


})

