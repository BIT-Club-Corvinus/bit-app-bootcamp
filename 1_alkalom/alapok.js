// Primitív Típusok
let myString = "Hello, World!"; // Sztring
let myNumber = 42; // Szám
let myBigInt = 1234567890123456789012345678901234567890n; // BigInt, nagy számok kezelésére
let myBoolean = true; // Logikai érték
let myUndefined; // Undefined, érték nélküli változó
let myNull = null; // Null, nincs értéke az objektumnak
let mySymbol = Symbol("my unique symbol"); // Symbol, egyedi azonosító

// Objektum Típusú Változók
const myObject = { name: "John Doe", age: 30 }; // Objektum
const myArray = [1, 2, 3, 4, 5]; // Tömb
const myFunction = function() { console.log("Hello, World!"); }; // Függvény
const myDate = new Date(); // Dátum objektum
const myRegExp = /ab+c/; // Reguláris kifejezés

myArray[0] = 0
// Operátorok
let sum = 10 + 5; // Összeadás
let difference = 20 - 5; // Kivonás
let product = 5 * 5; // Szorzás
let quotient = 20 / 5; // Osztás
let isGreaterThan = 10 > 5; // Nagyobb, mint
let isLessThan = 5 < 10; // Kisebb, mint
let isEqual = 10 == 10; // Egyenlőség
let isStrictlyEqual = 10 === 10; // Szigorú egyenlőség
let isNotEqual = 10 != 5; // Nem egyenlő
let isAnd = (5 > 3) && (10 > 5); // ÉS logikai operátor
let isOr = (5 > 10) || (10 > 5); // VAGY logikai operátor
let isNot = !(5 > 10); // NEM logikai operátor

// Elágazások
if (myNumber > 20) {
    console.log("A szám nagyobb, mint 20.");
} else if (myNumber == 20) {
    console.log("A szám pontosan 20.");
} else {
    console.log("A szám kisebb, mint 20.");
}


// Ciklusok
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

i = 0;
do {
    console.log(myArray[i]);
    i++;
} while (i < myArray.length);

// Változó Deklaráció Kulcsszavak
let variableLet = "Let változó"; // 'let' blokk-szintű hatókörrel
const constantValue = "Ez egy konstans"; // 'const', nem módosítható

// Bevett Gyakorlatok
/* Használd a 'const'-ot, ahol csak lehetséges */
/* Kerüld a 'var' használatát */
/* Válaszd a beszédes változónévket */
/* Tartsd a függvényeket röviden és egyfeladatúaknak */
/* Használj reguláris kifejezéseket adatok validálására */
/* Kezeld a hibákat elegánsan */
/* Írj tiszta és karbantartható kódot */

// Hibakezelés
try {
    // Valamilyen hibát generáló kód
    throw new Error("Valami hiba történt");
} catch (error) {
    console.error("Hiba történt:", error.message);
} finally {
    console.log("A hiba ellenőrzése befejeződött.");
}

// Email és Jelszó Validálás Tesztelése
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
}

console.log(validateEmail('example@example.com')); // true
console.log(validateEmail('bad-email')); // false
console.log(validatePassword('123456')); // true
console.log(validatePassword('123')); // false
