
// let result;
//     let a=3;
//     let b=6;
//     if (a + b < 4) {
//     result = 'Below';
//     } else {
//     result = 'Over';
//     }

//     console.log(result)
// op 1
let result;
let a = 3;
let b = 6;
result = a + b < 4 ? "Below" : "Over";
console.log(result);
// op 2
console.log(a + b < 4 ? "Below" : "Over");

// let score = 42;
// let msg = "";

// if (score > 1337)
// {
//     msg = "This is a new highscore!";
// }
// else
// {
//     msg = "You need more points to beat the highscore!";
// }
// console.log(msg)
let score = 1500;
console.log(
  score > 1337
    ? "This is a new highcore!"
    : "You need more points to beat the highcore!"
);

// let message;
//     let login="Employee"
//     if (login == 'Employee') {
//     message = 'Hello';
//     } else if (login == 'Director') {
//     message = 'Greetings';
//     } else if (login == '') {
//     message = 'No login';
//     } else {
//     message = '';
//     }
//     console.log(message)
let login = "Hadi";
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
// npm i -g nodemon

