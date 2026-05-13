function rekniAhoj() {
    console.log("čus!!");
}
 
rekniAhoj();
 
let poydrav = "Pozdrav!";
 
function ukaypoydrav() {
    console.log(poydrav);
}
 
function testLokal() {
    let localVolume = 123;
    console.log(localVolume);
}
 
ukaypoydrav();
testLokal();
 
 
if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);
 
// parametra a argument
 
function seyHello (name) { // name = parametr
    console.log("Ahoj " + name);
}
 
seyHello("Alice");
 
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(4,1);
 
function odcitani(num3, mun4) {
    console.log(num3 - mun4);
}
odcitani(11,8);
 
function nasobenii(num5, num6) {
    console.log(num5 * num6);
}
nasobenii(5,9)
 
function delenii(num7, num8) {
    console.log(num7 / num8);
}
delenii(22,7)
 
 
 
 
 
 
 
 
 
function vzpiscisla(nyacatek, konec) {
    for (let a = nyacatek; a < konec; a++ ) {
        console.log(a)
    }
}
vzpiscisla(4,85627)