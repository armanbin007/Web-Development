use('WebDEV');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
    "name": "Java",
    "Price": 6000,
    "Instructor": "Arman"
  },
  {
    "name": "Python",
    "Price": 5500,
    "Instructor": "Rahim"
  },
  {
    "name": "C++",
    "Price": 5000,
    "Instructor": "Karim"
  },
  {
    "name": "JavaScript",
    "Price": 6500,
    "Instructor": "Nabila"
  },
  {
    "name": "React",
    "Price": 7000,
    "Instructor": "Sabbir"
  },
  {
    "name": "Node.js",
    "Price": 7500,
    "Instructor": "Tania"
  },
  {
    "name": "MongoDB",
    "Price": 4800,
    "Instructor": "Hasan"
  },
  {
    "name": "Data Structures",
    "Price": 8000,
    "Instructor": "Farhan"
  },
  {
    "name": "DBMS",
    "Price": 6200,
    "Instructor": "Ayesha"
  },
  {
    "name": "Machine Learning",
    "Price": 12000,
    "Instructor": "Imran"
  }
]);


// Print a message to the output window.
console.log(`Done inserting data`);