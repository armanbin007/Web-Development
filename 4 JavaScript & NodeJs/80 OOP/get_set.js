class Data{
    constructor(name) {
        console.log('Program has been initiated....');
        this.name = name;
    } get name(){
        return this._name;
    } set name(x){
        if (x.length < 4) {
            console.log('Name must be at least 4 characters long.');
            return;
        }
        this._name = x;
    }
}

let user = new Data("Arman");
console.log(user);
