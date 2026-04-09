// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function checker(str) {
    if (str.length < 8) return false;
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    for (let ch of str) {
        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        } else if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        } else if (ch >= '0' && ch <= '9') {
            hasDigit = true;
        }
    } if(hasUpper === true && hasLower === true && hasDigit === true){
        return true;
    } else{
        return false;
    }
}

let pass = "a0aaaArman";
console.log("Password is valid:", checker(pass));
