"use strict" // dadurch wird der JavaScript-Intepreter etwas "strenger"
// mehr hierzu: https://www.mediaevent.de/javascript/strict-mode.html



// **** STRING METHODS ****
// - Alle String-Methoden geben eine neue Zeichenkette zurück. 
// - Sie verändern die ursprüngliche Zeichenkette nicht.
// - Strings sind unveränderlich: Zeichenketten können nicht geändert, 
//   sondern nur ersetzt werden (beleuchten wir noch genauer).

// Exkurs LENGTH: Länge eines Strings (ist eine Eigenschaft von String, keine Methode)
// => .length wird ohne () aufgerufen
let myText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log( "Länge von myText:", myText.length );  // 26

// STRING POSITION

// indexOf vs lastIndexOf
// Der indexOf gibt das erste Vorkommen des Wertes zurück und 
// der lastIndexOf das letzte Vorkommen des Wertes.

let myString = "Please locate where 'locate' occurs";
let findFirstPositon = myString.indexOf('locate')
console.log("findFirstPositon", findFirstPositon); // 7
console.log(myString[7])    // l

let findLastPostion = myString.lastIndexOf('locate')
console.log("findLastPostion", findLastPostion)

let findMissingElement = myString.indexOf('sun')
console.log(findMissingElement) // -1

console.log("\n***Mini-Aufgabe***\n")
// Mini-Aufgabe: 
// 1. Gib in der Console aus, an welcher Stelle sich das Wort Feierabend befindet
// 2. Gib in der Console aus, wo sich das letzte w im String befindet
// 3. Bonus: Gib in der console aus, ob der String das Wort "JavaScript" enthält ("ist vorhanden" wenn es gefunden, "ist nicht vorhanden" wenn es nicht gefunden wurde)

const someString = "Ich will noch nicht Feierabend machen, weil JavaScript Spaß macht";

// zu 1.
console.log( "Feierabend-Index:", someString.indexOf("Feierabend") ); // 20
console.log( someString[20] ); // F


// zu 2.
console.log( "w-Index:", someString.lastIndexOf("w") ); // 39
console.log( someString[39] ); // w

// Zwischenfrage: Was kommt hier raus?
console.log( "w-Index:", someString.lastIndexOf("W") ); //-1
// .... da die Suche "case sensitiv" ist (das heißt, groß- und kleinschreibung wird unterschieden)

// zu 3 Bonus:
const indexOfJavaScript = someString.indexOf("JavaScript");
console.log(`JavaScript ist ${indexOfJavaScript === -1? "nicht" : ""} vorhanden`);

// Umgang mit Whitespaces (= Leerraum = Zeichen, wie z.B. Leerzeichen (Space), Tab, Zeilenumbruch
let myStringWidget = "widget with id 1003";
let findPositionId = myStringWidget.indexOf("id");

// Frage: Welche Position kommt heraus?
console.log("findPositionString2", findPositionId); //  1 ¯\_(⊙︿⊙)_/¯
// => 1, weil id in widget steckt

// Lösungsansatz: nach Leerzeichen id suchen und 1 addieren

findPositionId = myStringWidget.indexOf(" id "); // somit gehe ich sicher, dass es ein eigenes Wort ist
findPositionId++; //  1 addieren (ansonsten haben wir die Position von " id" und nicht "id")
console.log("findPositionId", findPositionId );

// seeehr weit vorgegriffen (gerne ignorieren): Lösung mit regular expressions (reguläre Ausdrücke) und search
// indexOf akzeptiert keine regulären Ausdrücke
console.log( "regular expression:", myStringWidget.search(/\bid\b/) ); // 12

// IMMUTABLE: 
// Nochmals zur Verdeutlichung: 
// string ist "immutable" (nicht mutierbar/unveränderbar), 
// man kann ihn nicht ändern, nur ersetzen

let niceName = "Victor";
console.log( niceName[0] ); // V (erster Buchstabe)
// niceName[0] = "W";
console.log( niceName );






