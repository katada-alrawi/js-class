"use strict"

// Kurze Vorarbeit
function h1(text = "-") { // Überschrift in der Console erzeugen
  console.log(`\n------ 🔥 ${text.toUpperCase()} 🔥 ------\n`);
}

// *** for-Schleife ***

// Schleifen werden verwendet, um unsere Anweisungen zu wiederholen.
// In der Computertechnik ist eine Schleife eine Folge von Anweisungen, 
// die ständig wiederholt wird, bis eine bestimmte Bedingung erfüllt ist.

// Syntax: for(begin; condition; step) { 
//   [body]. 
// }

// begin/Zählvariable(let i = 0) : Wird EINMAL beim Eintritt in die Schleife ausgeführt.

// condition/Bedingung (i <= 3): Wird vor jeder Schleifeniteration geprüft. Ist sie falsch, 
// wird die Schleife angehalten.

// body({ console.log(i) }): Wird immer wieder ausgeführt, solange die Bedingung erfüllt ist.

// step(i++): Wird bei jeder Iteration nach dem Hauptteil ausgeführt.

// >>> Kurze Aufgaben zum Üben

// 1. Gib mittels einer for-Schleife in der Console zahlen von 0 bis 5 aus.

for( let i=0; i<=5; i++ ) {
  console.log(i);
}

console.log("*********")
// 2. Gib die Zahlen von 10 bis 0 aus. Benutze eine Dekrementation in der For-Schleife
for( let i=10; i>=0; i-- ) {
  console.log(i);
}

console.log("*********")

// 3. Gib  "JavaScript ist super" 5 mal in der console aus. 
// Schreibe jedes mal den Schleifedurchgang davor:
// 1. JavaScript ist super
// 2. JavaScript ist super
// ...
for( let i=1; i<=5; i++ ) {
  console.log(`${i}. JavaScript ist super`)
}

console.log("*********")

// 4. Etwas schwieriger (gerne zusammen): Addiere mittels for-schleife die Zahlen von 1 bis inklusive 5
// also: 1 + 2 + 3 + 4 + 5 = 15

let sum = 0;
for (let i=1; i<=5; i++) {
  console.log(`${i}. Durchgang: sum = ${sum} + ${i}`)
  sum = sum + i;
}

console.log("sum nach For-Schleife: ", sum)

console.log("*********")

// 5. Gib jedes Zeichen des Strings "Digital Career Institute" einzeln in der Console aus:
// D
// i
// g
// ...
// Tipp: du brauchst bestimmt .length im Schleifenkopf
const myString = "Digital Career Institute";
for(let i=0; i<myString.length; i++) {
  console.log( myString[i] )
}

console.log("*********")

// Exkurs: Zählvariable ohne let
// wir haben das Wort let im Schleifenkopf vergessen
// dadurch wird i global
// for(i=0; i<5; i++) { 
//   console.log( i )
// }
// wenn wir "use strict" am Anfang der JavaScript-Datei schreiben, 
// geht es nicht ohne "let" => i is not defined

// console.log("i Ausserhlab der Schleife:" + i ); // 10

h1("break")
// *** break ***
// => Verlasse die For-Schleife

// Wir möchten ein Array durchsuchen und die Zahl 3 finden 
// (wir gehen davon aus, das wir ein Array mit einzigartigen Werten, kein Wert kommt doppelt).
// Sobald die Zahl gefunden wurde, soll die for-schleife Verlassen werden
let numbers = [10, 21, 3, 41, 15, 17];


for(let i=0; i<numbers.length; i++) {
 
  if( numbers[i] === 3 ) {
    console.log(`Zahl 3 an der Stelle ${i} gefunden`);
    break; // for-schleife wird verlassen => console.log(i) wird nicht mehr ausgeführt
  }
  console.log(i)
}

// Aufgabe: Durchsuche in einer For-Schleife das nachfolgende array

// nach dem Produkt, das sich in der Variable "itemToFind" befindet
// Verlasse die Schleife, wenn du es gefunden hast
// Tipp: length wird wieder bebraucht
let storeItems = ["Stift", "Bleistift", "Radierer", "Notizbuch"];
let itemToFind = "Radierer";

for(let i=0; i<storeItems.length; i++) {
  // Array durchlaufen und nach itemToFind oder "Radierer" durchsuchen
  if( storeItems[i] === itemToFind ) {
    console.log(`Gesuchtes item an Stelle ${i} gefunden`);
    break;
  }

  // was passiert?
  // 0. "Stift" === "Radierer"
  // 1. "Bleistift" === "Radierer"
  // 2  "Radierer" === "Radierer"
  // break;
}



h1("continue")
// *** continue ***
// Beende den aktuellen Schleifendurchgang und beginne den nächsten

// Gib alle Zahlen von 0 bis 10 aus, außer der 3 und 6
for(let i=0; i<=10; i++) {

  if( i === 3 || i === 6 ) { // Wenn i 3 oder 6 ist
    // console.log("continue ausführen")
    continue; // aktueller Schleifendurchgang wird beendet und der nächste beginnt
  }
  console.log(i)
}

// Zusatz: 
// Aufgabe: Gib alle Zahlen von 1 bis 10 aus, außer den Zahlen, die durch 5 teilbar sind.
// verwende continue


h1("nested (verschachtelte) for-schleifen");
// *** nested/verschachtelte Schleifen ***
// Durchläuft die innere for-schleife in der Äußeren
// => Können immer wieder etwas verwirrend sein

// Codebeispiel für den Browser (kann hier nicht ausgeführt werden)
// for (let i = 0; i < 5; i++) { // Äußere Vorschleife

//   for (let j = 0; j < 5; j++) {
//     alert(`i: ${i}, j: ${j}`);
//   }
// }

for( let i=0; i<5; i++ ) {
  console.log("Äußere Schleife aussen: i=" + i);
  for(let j=0; j<5; j++) {
    console.log(`     Innere SCheife: j=${j}`);
  }
  console.log("Ende loop aussen")
}

// Gib eine 5x10 Sternmatrix (*) in der console.log
// * * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * 

const rowCount = 5; // Anzahl der Zeilen
const columnCount = 10; // Anzahl der Spalten 

for(let i=0; i<rowCount; i++) {
  
  let row = ""; //row = Zeile
  for(let j=0; j<columnCount; j++) {
    row = row + "🤯 "
  }
  console.log(row)
}


// Ab hier Bonus

// Gibt es alle Artikel im Laden, die auf meiner Einkaufsliste stehen?

// Der nachfolgende Code läuft in einer verschachtelten Schleife durch zwei Listen, 
// groceryList und storeItems. Für jeden Artikel in der groceryList wird geprüft,
// ob er in der storeItems-Liste enthalten ist. Wenn ja, bedeutet das, dass er im Laden
// verfügbar bzw. auf Lager ist. Also geben wir ihn in der Console aus:


let groceryList = ["apples", "oranges", "bananas", "strawberries"]; // Einkaufsliste
storeItems = ["apples", "oranges", "bananas", "pineapples"]; // Artikel im Laden/auf Lager

for (let i = 0; i < groceryList.length; i++) {
  for (let j = 0; j < storeItems.length; j++) {
      if (groceryList[i] === storeItems[j]) {
          console.log(`${groceryList[i]} auf Lager!`);
          break;
      }
  }
}

// Aufgabe:
// Schreibe ein Programm, das die Multiplikationstabelle (1 bis 10) 
// mit verschachtelten for-Schleifen ausgibt:
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// ...
// 2 * 1 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ....
// 10 * 10 = 100

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}