let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let sum = parseInt(a) + parseInt(b);

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter valid numbers");
}

// alert(`The sum is: ${sum}`);

function lama(){
    try { // async doesn't work with try catch
        console.log(`The sum is: ${sum}`);
        return true;
    } catch (error) {
        console.log('Error you can\'t proceed');
        return false;
    } 
    finally{ // finally is used to execute code regardless of the result of try catch
        console.log('Files are being closed');
    }
}
lama();
// try {
//     hey;
// } catch (err) {
//     alert(err.name);
//     alert(err.message);
//     alert(err.stack);
// }
