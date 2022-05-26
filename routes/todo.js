const router = require('express').Router();
const Todo = require('../models/Todo');

//routes

router.post("/add/todo",(req,res)=>{
    const {todo} = req.body;

    const newTodo = new Todo({todo});

    //save data
    newTodo.save().then(()=>{
        console.log('sucessfully added todo!');
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    })


   // console.log(todo);
})

.get("/delete/todo/:_id" ,(req,res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Delete Successfully !");
        res.redirect("/");
    })
    .catch((err)=>{
        console.log('Delition fail ?? ')
        console.log(err);
    })
});

module.exports = router;