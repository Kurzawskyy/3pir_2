let btn = document.getElementById("wyslij");
let wynik = document.getElementById("wynik");

btn.addEventListener('click', () => {
    let st = Number(document.getElementById("stopnie").value);

    let kelwin = 273.15;

    let far = 32;

    let k = kelwin + st;
    let f = far + st*1.8;

    wynik.innerText = `Wyniki obliczeń dla T (Celcjusza) = ${st} \n T(Kelvin) = ${k} \n T(Fahrenheit) = ${f}`;
});