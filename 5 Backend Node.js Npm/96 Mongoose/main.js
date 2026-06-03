import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({title: "2nd task", desc: "just do it", isDone: true})
    todo.save()
    res.send('Hello World!');
});

app.get('/todo', async (req, res) => {
    let todo = await Todo.findOne({isDone:true})
    res.json({title: todo.title, desc: todo.desc, isDone: todo.isDone})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});