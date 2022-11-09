let btn = document.getElementById("wyslij");
let wynik = document.getElementById("wynik");

btn.addEventListener('click', ()=> {
    let s = Number(document.getElementById("sek").value);

    let h = parseInt(s / 3600);
    s -= h*3600;
    let min = parseInt(s/60);
    s -= min*60;

    wynik.innerText = `${h}g${min}m${s}s`;
});