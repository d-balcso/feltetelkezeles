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