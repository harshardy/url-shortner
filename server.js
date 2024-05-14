const express = require('express')
const mongoose = require('mongoose')

const app = express()


const PORT  = process.env.PORT || 3000



mongoose.connect('mongodb+srv://harshareddy1446:harshareddy144@cluster0.ieyypy5.mongodb.net/urlshorts')

const db = mongoose.connection;

db.on('error',()=>{
      console.log('Error');
})
db.once('open',()=>{
    console.log("Connected");
})




app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// link router
const urlRouter = require('./routes/urlRout')
app.use('/', urlRouter)


app.listen(PORT, ()=>{
     console.log("server is running");
})