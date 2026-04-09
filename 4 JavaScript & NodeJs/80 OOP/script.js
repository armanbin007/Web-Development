// let obj = {
//     a: 1, b: "Guten Tag"
// }
// console.log(obj.b);

// let animal = {
//     eats: true,
//     breaths: true
// } 
// let rabbit ={
//     jumps: true,
//     smelly: true
// }
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.breaths);

class Animal{
    constructor(name){
        this.name = name;
        console.log('Object is created');        
    } static eats(){ // If static then can't be called using objject but can be called using class name
        console.log('Kha raha hain');
    }
}

class Lion extends Animal{
    constructor(name){
        super(name); // Call the parent constructor
        console.log('Obj is created and it\'s a lion...');
    } eats(){ // Method overriding
        console.log('Kha raha hain aur dahad raha hun');
    }
}

let a = new Animal("Modontek");
console.log(a);
Animal.eats(); // Calling static method using class name

let x = new Lion("Tujhe Kya");
console.log(x);