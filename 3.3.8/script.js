function dejMi3() {
    return 3;
}
 
console.log(dejMi3())
 
// funkce s logem
function nasobic(a, b) {
    console.log(a*b);
}
 
let r = nasobic(5,3)
console.log(r)
 
// funkce s return
 
function nasobic2(a, b) {
    return a*b;
}
 
let r2 = nasobic2(5,3)
console.log(r2 + 1)
 
// return ukončí funkci
 
function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); // toto neprojde
}
 
let konec2 = konec();
console.log(konec2)
 
// cvičení
 
function jeSude(e) {
  if (e % 2 === 0)
    console.log("boolean True");
if (e % 2 === 1)
    console.log("boolean False");
return "Hotovo"
}
 
jeSude(8)