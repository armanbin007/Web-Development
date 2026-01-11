// let a = 1;
// for(let i = 0; i< 15; i++){
//     console.log(a+i)
// }

let obj = {
    Name: "Arman",
    Age: 21,
    DOB: "25/12/2004"
}

for(const key in obj){ // for in for object
    console.log(key)
}

for(const c of "arman"){ // for array/string iterator
    console.log(c)
}

let i = 5;
while(i < 6){
    console.log(i)
    i++;
}

z = 0;
do {
    console.log("Hiiii")
    z++
} while (z<8);