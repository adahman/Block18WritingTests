const {logIn, createAccount, googlelogin} = require("../workshop.js");

test('was logging in successful?', ()=>{
    expect(logIn("luke", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("luke", "pass")).toBeTruthy();

    // checking for the exact same result
    expect(logIn("ted", "pass")).not.toBeTruthy();
    expect(logIn("ted", "pass")).toBeFalsy();
})

test("creating account", ()=>{
    expect(createAccount("luke@gmail.com", "")).toBeFalsy();
    expect(createAccount("", "pass")).toBeFalsy();
    expect(createAccount("", "")).toBeFalsy();
    expect(createAccount("luke@gmail.com", "pass")).toBeTruthy();

//     see details function
//     function called show details of single player
//     showcase players name
//     theres a picture value
})

test("logging in with google",()=>{
    expect(googlelogin("luke@gmail.com")).toBeTruthy();
    expect(googlelogin("luke@yahoo.com")).toBeFalsy();
    expect(googlelogin("")).toBeFalsy();
    expect(googlelogin("abdul@gmail.com")).toBeTruthy();
    expect(googlelogin("abdul@hotmail.com")).toBeFalsy();
})