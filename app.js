const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Connection to mongoDb
mongoose.connect('mongodb://localhost/todolist',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs")


//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

//Server Configuration
app.listen(3000 ,() => console.log('Server started at port : 3000'));

