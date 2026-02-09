/*

// Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!
let szam = parseFloat(prompt("kérlek adj meg egy számot! "))

if (szam > -30 && szam < 40) {
    console.log("A szám -30 és 40 között van")
}
else;
    console.log("A szám nem -30 és 40 között van")

*/

/*
//Két beolvasott szám közül írassuk ki a nagyobbikat! Azt is írassuk ki, ha egyenlők!
let szam1 = parseFloat(prompt("kérlek adj meg egy számot! "))
let szam2 = parseFloat(prompt("kérlek adj meg egy másik számot! "))

if (szam1 > szam2){
    console.log(`A nagyobb szám a ${szam1}`)
}else if (szam2 > szam1) {
    console.log(`A nagyobb szám a ${szam2}`)
}else;
    console.log('a két szám egyenlő')

*/

/*
let szam = parseFloat(prompt("kérlek adj meg egy számot! "))

if (szam > 0){
    console.log(`a szám pozitiv`)
}else if (szam < 0) {
    console.log(`a száőm negtatív`)
}else;
    console.log('a szám nulla')
*/

/*
let szam = parseFloat(prompt("kérlek adj meg egy számot! "))

if (Number.isInteger(szam))
    console.log("A szám egész" + szam)
*/

//A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két szám 3 és -6.12, akkor az eredmény: 3 > -6.12.
//hf

//Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18), dolgozó (19-60), illetve nyugdíjas-e az illető!
//hf
/*

let eletkor = parseFloat(prompt("kérlek adj meg az életkorod! "))

if (eletkor >= 0 && eletkor <= 6) {
    console.log("Gyermek");
} else if (eletkor >= 7 && eletkor <= 18) {
    console.log("Iskolás");
} else if (eletkor >= 19 && eletkor <= 60) {
    console.log("Iskolás");
} else if (eletkor >= 60) {
    console.log("nyugdijas");
}else;
    console.log("ervenytelen eletkor")

*/

/*
let tipp = prompt("kérlek add meg a tipped (fej / irás)? ")
let dobas = Math.random()
let dobasErtek = ""

if (dobas < 0.5) {
    dobasErtek = "fej";
} else;
    dobasErtek = "iras";

if (tipp === dobasErtek) {
    console.log("eltalalrad")
} else {
    console.log("nem talaltad el")
}

*/

//Adott egy pont, melynek bekérjük a koordinátáit. Határozzuk meg, melyik síknegyedben van!
/*
let x = parseFloat(prompt("x = "))
let y = parseFloat(prompt("y = "))

if (x < 0 && y < 0){
    console.log("elso")
}
else if (x > 0 && y < 0){
    console.log("ketto")
}
else if (x > 0 && y > 0){
    console.log("harom")
}
else if (x > 0 && y < 0){
    console.log("negy")
}
else if (x == 0 && y == 0){
    console.log("origo")
}
else if (x == 0){
    console.log("x tengely")
}
else if (x > 0 ){
    console.log("y tengely")
}
*/

/*
//Kérjünk be egy évszámot és döntsük el, hogy szökőév-e! Egy év akkor szökőév, ha az évszám maradék nélkül osztható 4-gyel, de nem osztható 100-zal, kivéve, ha az évszám osztható 400-zal.
let szokoev = false
let evszam = parseInt(prompt("kérek egy évet"))

if (evszam % 400 === 0 ) {
    szokEv = true
} else if (evszam % 100 === 0) {
    szokEv = false
}else if (evszam % 4 === 0){
    szokEv = true
}

if (szokEv) {
    console.log("Ez az évszám szökőév: " + evszam );
} else {
    console.log("Ez az évszám nem szökőév: " + evszam );
}
*/

/*
//HÁZI
//3. Feladat

let szam = parseFloat(prompt("Kérek egy számot: "));

if(szam > 0){
    console.log("A szám pozitív.");
}else if(szam < 0){
    console.log("A szám negatív.");
}else {
    console.log("A szám nulla.");
}
*/

/*
5. A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két
szám 3 és -6.12, akkor az eredmény: 3 > -6.12.

let szam4 = parseFloat(prompt("Kérem az egyik számot: "))
let szam5 = parseFloat(prompt("Kérem a másik számot: "))

if(szam4 > szam5){
    console.log(szam4 + "A nagyobb");
}else if(szam5 > szam4){
    console.log(szam5 + "A nagyobb");
}else{
    console.log("A két szám egyenlő: " + szam4);
}
*/


/*
//14. feladat
let honapSzam = parseInt(prompt("Kérem a hónap sorszámát (1-12): "));

if(honapSzam === 1){
    console.log("Január");
}else if(honapSzam === 2){
    console.log("Február");
}else if(honapSzam === 3){
    console.log("Március");
}else if(honapSzam === 4){
    console.log("Április");
}else if(honapSzam === 5){
    console.log("Május");
}else if(honapSzam === 6){
    console.log("Június");
}else if(honapSzam === 7){
    console.log("Július");
}else if(honapSzam === 8){
    console.log("Augusztus");
}else if(honapSzam === 9){
    console.log("Szeptember");
}else if(honapSzam === 10){
    console.log("Október");
}else if(honapSzam === 11){
    console.log("November");
}else if(honapSzam === 12){
    console.log("December");
}else{
    console.log("Rossz input, próbáld újra! ");
}
*/

/*
15. Kérjük be egy dolgozat pontszámát 1 és 100 között és írjuk ki az érdemjegyet! 0-40:
elégtelen, 41-55: elégséges, 56-70: közepes, 71-85: jó, 86-100: jeles.

let pontszam = parseInt(prompt("Kérem a dolgozat pontszámát (1-100): "));

if(pontszam >= 0 && pontszam <= 40){
    console.log("Elégtelen");
}else if(pontszam >= 41 && pontszam <= 55){
    console.log("Elégséges");
}else if(pontszam >= 56 && pontszam <= 70){
    console.log("Közepes");
}else if(pontszam >= 71 && pontszam <= 85){
    console.log("Jó");
}else if(pontszam >= 86 && pontszam <= 100){
    console.log("Jeles");
}else{
    console.log("Bibis a helyzet. ");
}
*/