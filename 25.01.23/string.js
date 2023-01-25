
// °° Escaping special chars (Sonderzeichen maskieren): `\'`, `\"`, `\n` °°

// Jaja, das macht "Spaß" => diesen String wollen wir in Variable speichern
let sentence = "Jaja, das macht  \"Spaß\"";
console.log("sentence:", sentence)


// \n erzeugt Zeilenumbruch
let newLineString = "Willkommen, \nin der Welt der Nullen und Einsen.";
console.log(newLineString);  // Der Teil nach Willkommen erscheint in neuer Zeile

// Frage: Was tun, wenn den String "\n" ausgeben möchte in meinem Text?
let newLineStringEscaped = "In Javascript erzeugt \n einen Zeilenumbruch";
console.log("newLineStringEscaped", newLineStringEscaped)


// °° String interpolation: template literals, using expressions within strings °° 
// °° String-Interpolation: Template-Literale, Verwendung von Ausdrücken innerhalb von Strings °°


console.log("\n\n *** String interpolation ***"); // Nur zur Formattierungszwecken

const age = 32;
const name = "Aro";
const genre = "🐎"

let output = `Hi, ich bin ${name}, ${age} Jahre alt und ich bin ein ${genre}`;
console.log("output", output)

const makeMeYounger = 5;

// Frage: Wie kann ich in meinem String von "age" "makeMeYounger" abziehen/subtrahieren?
output = `Hi, ich bin ${name}, ${age - makeMeYounger} Jahre alt und ich bin ein ${genre}`;
console.log("output:", output)

console.log("\n"); // Terminal-Ausgabe endet mit einem Leerzeichen (nur zur Formattierungszwecken)


// Mini-Aufgabe: Vervollständige die Codezeile mit console.log so,
// dass folgender Satz ausgegeben wird: 
// "Das Durchschnittsalter beträgt [Durchschnittsalter] Jahre"
// Hierbei berechnest du das Durchschnittsalter im template literal

const age1 = 34,
      age2 = 29,
      age3 = 40;

      console.log(`Das Durchschnittsalter beträgt ${(age1 + age2 + age3) / 3} Jahre`);

// => Das Durchschnittsalter beträgt 34,33333 Jahre


// °° Mehrzeilige Kommentare °°
const multiLineString = `Guests:

- John
    • First
- Peter 
    • Second
- Den
    • Third`;

// Frage: Was passiert mit dem Whitespace, wie Leerzeichen, Leerzeile und Zeilenumbruch?
console.log("multiLineString:", multiLineString); // jeder Whitespace wird mitausgegeben
 
// °° Indexnotation °°

const address = "kammnerstr. 75 66933 saarbrücken";

// Gib den dritten Buchstaben des address-Strings in der console aus
console.log( "address[2]:", address[5] ); // s

// °° Ungeschlossene Anführungszeichen °°

// let isLoading = false;
// let alertMsg = "is loading;

// offset = 50;
// Fehler: Invalid or unexpected token


console.log("\n"); // Terminal-Ausgabe endet mit einem Leerzeichen (nur zur Formattierungszwecken)


