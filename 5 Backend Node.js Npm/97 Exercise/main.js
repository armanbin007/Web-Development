import express from "express";
import mongoose from "mongoose";
await mongoose.connect("mongodb://localhost:27017/company")
import Employee from "./models/employee.js"

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

function getRandom(arr){
    return Math.floor(Math.random() * (arr.length - 1));
}

function NumX(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.get('/', (req, res) => {
     res.render('index.ejs', {foo: 'FOO'})
});
app.get('/generate', async (req, res) => {
    let names = [ "Harry", "John", "Emma", "Sophia", "Michael"
    ];

    let salary = [ 14000, 15000, 20000, 50000, 70000]

    let languages = [ "Python", "JavaScript", "Java", "C++", "Go", "Rust",
    ];

    let cities = ["New York", "London", "Berlin", "Tokyo", "Paris", "Toronto",
    ];

     for (let index = 0; index < 5; index++) {
        let e = await Employee.create({
            name: names[getRandom(names)],
            salary: salary[getRandom(salary)],
            language: languages[getRandom(languages)],
            city: cities[getRandom(cities)],
            isManager: NumX(0,1),
        })
     } console.log("Data generated");
     
    // await Employee.deleteMany({})
});

app.listen(port, () => {
     console.log(`Example app listening on port port`);
});