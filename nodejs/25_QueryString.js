var querystring = require("querystring");

const res = querystring.parse('empname=john&salary=2357');
console.log(res);

const res1 = querystring.stringify({
    'empname': 'david', 
    'empsalary': '34655'
});

console.log(res1);