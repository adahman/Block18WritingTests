// before you type any other code
// npm i jest

function logIn(username, password){

    // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

    if(username.length===0||password.length===0){
        return false
    }else if(username==="luke"&&password==="pass"){
        return true
    } else{
        return false
    }
}

function createAccount(email,password){

    // without filling in any information, they should be shown an error.
    if(email.length===0 || password.length ===0){
        return false
    }else if (email === "luke@gmail.com" && password === "pass"){
        return true
    }else{
        return false
    }

}


function googlelogin(email){
    if(email.includes("@gmail.com")){
        return true;
    }else{
        return false;
    }
}

module.exports = {logIn,createAccount, googlelogin}