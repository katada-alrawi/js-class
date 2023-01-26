// AUFGABE: Löse die nachfolgende Aufgaben wieder in zufälligen zweier-Teams

someString = "The quick brown fox jumps over the lazy dog.";

// 1. Benutze die slice-Methode, um das Wort "quick" aus dem Satz zu extrahieren
// let quick = ...
console.log(`Das Wort "quick" ist: ${quick}`);

// 2. Verwende die substring-Methode, um die Wörter "brown fox" aus dem Satz zu extrahieren
// let brownFox = ...
console.log(`Die Wörter "brown fox" sind: ${brownFox}`);

// 3. Benutze die substr-Methode, um die letzten 4 Zeichen aus dem Satz zu extrahieren
// let last4 = ....;
console.log(`Die letzten 4 Zeichen sind: ${last4}`);

// 4. Etwas kniffliger: verwende die substr-Methode, um die 5 Zeichen nach dem Wort "jumps" zu extrahieren
// Finde mittels zunächst mittels "indexOf" die Position von jumps heraus
// let afterJumps = ....
console.log(`Die 5 Zeichen nach dem Wort "jumps" sind: ${afterJumps}`);


let quick = someString.slice(4, 9);
console.log(`das wort "quick" ist: ${quick}´);

let brownFox = someString.substring(10, 20);
console.log(`Die Wörter "brown fox" sind: ${brownFox}´);

let last4 = someString.substr(-4);
console.log(Die letzten 4 Zeichen sind: ${last4});

let jumpsIndex = someString.indexOf("jumps");
let afterJumps = someString.substr(jumpsIndex + 5, 5);
console.log(Die 5 Zeichen nach dem Wort "jumps" sind: ${afterJumps});
