/*
// JS Variables
/*

BSP:  var town = "Berlin";

- Speicherort ("Behälter/Box") für Daten bzw. Werte.
- bestehen aus Schlüsselwort, Name, Zuweisungsoperator, Wert

Schlüsselwörter:  
- var: deklariert eine Variable unabhängig von ihrem Scope (Gültigkeitsbereich). 
  (kann mehrmals deklariert werden, wird heutzutage selten bis gar nicht mehr benutzt)

- let: deklariert eine lokale Variable im Block Scope (kann nur einmal deklariert werden)
- const: Symbolische Konstante; deklariert eine unveränderliche Variable (auch nur einmal)

Benennung, JavaScript-Variablen müssen:
- Mit einem Buchstaben, Unterstrich (_) oder Dollarzeichen ($) beginnen.
- Nachfolgende Zeichen können Ziffern (0-9) sein.
- Keine Leerzeichen enthalten oder mit einer Ziffer beginnen.
*/

let myName = "Katada"; // Camel Case
console.log("myName"); // Hier wird Varable übergeben => Micha
console.log("myName"); // Hier übergeben wir einen neuen Wert => "myName"
let my_name="Katada"; //snake Case (wörter durch unterstrich trennen)

//neuen Wert zuweisen 
let firstName = "paul";
console.log("firstName I:" ,firstName);

firstName = "Ayla"; //alter Wert überschreiben 
console.log("firstName II:", firstName);


let 
lastName = "Alrawi";
console.log(firstName ,lastName)
