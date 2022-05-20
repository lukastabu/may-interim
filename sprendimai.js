function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

const btn1 = document.getElementsByClassName("pirmygtukas");
const h2place = document.querySelector("pirmoh2");

btn1.addEventListener('click', () => {h2place.innerText = `rand(1, 6)`});

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
const mskaiciai = [];
const btn2 = document.getElementsByClassName("antrmygtukas");
const h2place = document.querySelector("antroh3");
btn2.addEventListener('click', h2place.innerText = `rand(1, 10)`);

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const dom3 =  document.getElementsByClassName("treclist");

function africaelements(masyvas) {
    let length = masyvas.length;
    for (let index = 0; index < length; index++) {
        const element = masyvas[index];
        if (element === "") {
            continue;
        }
        return(element);
    }
}
const litem = document.createElement("li");
litem.innerHTML = africaelements;
document.dom3.appendChild(litem);

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.
function addition (num1, num2) {
    return (num1 + num2);
}

function subtraction (num1, num2) {
    return (num1 - num2);
}

const rezplace = document.getElementsByClassName("rezultatas");
const pliusas = document.getElementsByClassName("plusmygtukas");
pliusas.addEventListener('click', rezplace.innerText = `addition`);
const minusas = document.getElementsByClassName("minusmygtukas");
minusas.addEventListener('click', rezplace.innerText = `subtraction`);


// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
const dom5 =  document.getElementsByClassName("penktlist");
function australiaelements(masyvas) {
    let length = masyvas.length;
    for (let index = 0; index < length; index++) {
        const element = masyvas[index];
        if (element === "Dingo") {
            return (("style = background-color: clue") element);
        }
        return(element);
    }
}
const litem = document.createElement("li");
litem.innerHTML = africaelements;
document.dom3.appendChild(litem);