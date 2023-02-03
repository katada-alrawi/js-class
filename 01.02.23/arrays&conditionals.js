/*
- Conditional algorithms
- The conditional statement: `if(<boolean>){ ... }`
- The default case: `else { ... }`
"Block Scope
- Code block definition: `if` example
- Scope definition: difference between `var`, `let`, `const`
- When to use: `if` vs. ternary operator" */

// ternary statement
// frage ? wenn wahr : wenn falsch
console.log((10 > 1) ? "ja" : "nein"); // ja

// if/else
let istEingelloggt = true;

// if(frage)
if (istEingelloggt === true) {
    // wird ausgeführt wenn die Frage true ist
    console.log("Userlogin hat funktioniert");
} else {
    // wird ausgeführt wenn die Frage false ist
    console.log("Userlogin fehlgeschlagen");
}


// komplizierteres beispiel
let userLogin = false;
let adminRights = true;

// false    &&      true
if (userLogin && adminRights) { // if(false)... wir gehen direkt in else rein.
    console.log("Der user darf content bearbeiten"); // das hier passiert nicht. 
} else {
    console.log("Der user hat die Rechte nicht."); // das kommt raus.
}

// Wir brauchen nicht immer ein else
let userName = "Niels";
if (userName.length > 10) { // false
    // wird nur ausgeführt wenn die länge des namens größer ist als 10.
    console.log("uiuiui das ist aber ein langer name.");
}
// Was hier steht, wird auf jeden Fall ausgeführt.
console.log("login erfolgreich");

console.log("-----");
let x = 10;
if (x === "10") { // wir versuchen eine zahl und einen String zu vergleichen. False
    console.log("der Vergleich hat funktioniert!");
} else {
    // das hier wird ausgeführt
    console.log("der Vergleich hat nicht funktioniert!");
}

console.log("hallo welt!"); // Das hier wird eh ausgeführt. 


// else if
let y = 1;
if (y === 4) {
    console.log("y ist 4");
} else if (y === 5) {
    console.log("y ist 5");
} else if (isNaN(y)) { // isNaN() checkt ob etwas NaN ist, also ob etwas keine Zahl ist. 
    console.log("y ist keine zahl");
} else {
    console.log("y ist weder 4 noch 5"); // Das hier kommt raus
}

let z;
if(z) {
    console.log("z existiert"); // kommt nicht raus weil z undefined ist.
}

// Block Scope
// Was ist der Geltungsbereich von Variablen

const var1 = 100; // Globale variable
const var2 = "globaler scope"

if(true){
    const var2 = "lokaler scope"; // lokale variable
    const var3 = "auch lokaler scope";
    console.log(var2); // "lokaler scope"
    console.log(var1); // Ich kann innerhalb eines scopes, auf den äußeren scope zugreifen. 
}
console.log(var2); // "globaler scope"
// console.log(var3); // FEHLER, var3 is not defined

// Let funktioniert da genau so wie const.
let glob = "globales let";

if(true){
    console.log(glob); // funktioniert
    let lokal = "lokales let"
}
// console.log(lokal); // FEHLER, lokal is not defined

console.log("---------");
// Warum benutzen wir var nicht mehr.
// Wir können bei var auch im globalen scope auf innere variablen zugreifen. 
console.log(inneresVar); // undefined, gehoisted. Bevor das programm läuft, setzt der compiler alle vars undefined auf den globalen scope. 
if(true){
    var inneresVar = "hallo welt";
}

console.log(inneresVar);