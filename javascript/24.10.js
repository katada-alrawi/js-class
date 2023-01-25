/* 
- Counting iterations: the counter variable, `++`, `--`
- Variable reassignment: `=`, `+=`, `-=`, string accumulation
- Boolean expressions: comparison operators (===, !==, >=, <=, >, <)
- Conditional expressions: the ternary operator (combining the examples above)
- Conditional assignment with the ternary operator
- Syntax debugging III: Reassigning constants */

let zahl = 2;
zahl = zahl + 1; // 3
console.log(zahl)

zahl++; // schnellere version um zahl = zahl +1 zu schreiben.
console.log(zahl); // 4
// man muss in die variable aber auch wirklich vorher eine Zahl stecken. 
let zahl2; // undefined
zahl2++; // zahl2 = undefined + 1
console.log(zahl2); // NaN, Not a Number. 

zahl--; // schnellere version um zahl = zahl -1 zu schreiben.
console.log(zahl);

// +=, -=
let eineZahl = 10; 
eineZahl += 20; // 30, ist eine kürzere Version das hier zu schreiben: zahl = zahl + 20;
console.log(eineZahl)






// VORSICHT man schiesst sich ins Knie!!!!!!!!!!!!!
// Vor und nach der Variable ++ und --
let x = 10;
let y = x++;
/*
    y = 10
    x = x + 1
*/
console.log(y); // 10
console.log(x); // 11

let a = 10;
let b = ++a;

/*
a = a + 1 -> 11
b = 11 
*/
console.log(a); // 11
console.log(b); // 11
// wir wollen c um 1 erhöhen und das resultat in d rein tun.
let c = 10; 
c++; // stattdessen geht auch c++ oder c=c+1, c=c++ geht nicht.
let d = c; 
console.log(d);