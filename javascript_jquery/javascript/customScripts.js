// working with functions
// function definition
function myFunc() {
    // local variables
    let a = 5;
    let b = 8;

    let res = 0;

    document.write(`the value of a: ${a} <br />`);
    document.write(`the value of b: ${b} <br />`);
    
    res = (a ^ b);
    document.write(`the value of res: ${res} <br />`);
}

// accesssing the values from function call into function definition
// function definition with arguments
function passParams(n1, n2) {
    let res = 0;

    document.write(`the value of a: ${n1} <br />`);
    document.write(`the value of b: ${n2} <br />`);
    
    res = (n1 ** n2);
    document.write(`the value of res: ${res} <br />`);
}

// function with return statement
function returnFunction(n1, n2) {
    return(n1 / n2);
}

// function with anonymous
let anonymousFunction = function(n1, n2) {
    return(n1 % n2);
}

// function with arrow
let arrowFunction = (fN = 'admin', lN = 'demo') => {
    return(fN + " " + lN);
}

// event handlers with functions
let checkUser = (username, password) => {
    if((username != '' && username != undefined) && (password != '' && password != undefined)) {
        alert('user loggedin successful!');
    } else {
        alert('either username / password is missing!');
    }
} 