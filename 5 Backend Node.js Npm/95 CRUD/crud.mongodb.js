use("CRUD")

// db.createCollection("courses")
// db.courses.insertOne({
//     name: "Ielts 1 Month",
//     price: 6000,
//     instructor: "Arman"
// })

db.courses.updateMany(
    {instructor: "Arman"},
    {$set:{price: 7999}}
)

// let x = db.courses.find({instructor:"Arman"})
// console.log(x.toArray());

// db.courses.insertMany([
//     {
//     name: "Ielts Crash Course",
//     price: 13000,
//     instructor: "Arman"
// },
//     {
//     name: "English Spoken",
//     price: 5000,
//     instructor: "Arman"
// },
//     {
//     name: "Listening Module",
//     price: 4000,
//     instructor: "Arman"
// },
//     {
//     name: "Reading Module",
//     price: 6600,
//     instructor: "Arman"
// }
// ])