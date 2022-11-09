let a;
let b;
let c;

let wynik = document.getElementById("wynik");

let btn = document.getElementById("wyslij");

btn.addEventListener('click', () => {
    a = Number(document.getElementById("zmA").value);
    b = Number(document.getElementById("zmB").value);
    c = Number(document.getElementById("zmC").value);
    if(a + b < c || b + c < a || a + c < b) {
        let txt = `Nie można zbudować trójkąta o bokach \n a = ${a} \n b = ${b} \n c = ${c}`;
        wynik.innerText = txt;
    } else {
        let p = (a + b + c) / 2;

        let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

        let txt = `Pole trójkąta o bokach \n a = ${a} \n b = ${b} \n c = ${c} \n wynosi: ${S}`;

        wynik.innerText = txt;
    }
});
