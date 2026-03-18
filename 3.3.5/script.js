let podmínka = !false;

podmínka = true && false;

podmínka = false || true;

console.log(podmínka)

// podmínka přes if

let number = 10;
let message;

if (number > 0) {
    message = "Kladné číslo;"
} else {
    message = "Není kladné"
}

console.log(message)

// druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Není kladné";

console.log(message2);

let age = 67;
let message3 = (age > 18) ? "Můžeš si už dát pivo a víno" : "Ještě musíš počkat";

console.log(message3);