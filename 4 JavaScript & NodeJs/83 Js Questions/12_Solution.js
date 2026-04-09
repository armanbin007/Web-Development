// 12. The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiry){
    const data = {
        token: token,
        expiry: Date.now() + expiry * 1000
    };
    localStorage.setItem("authToken", JSON.stringify(data));
}

function getToken(){
    let data = localStorage.getItem("authToken");
    if(!data){
        return null;
    }
    let x = JSON.parse(data);
    if(data){
        if(Date.now() > x.expiry){
            localStorage.removeItem("authToken");
            return null;
        } 
    } return x.token;
}

