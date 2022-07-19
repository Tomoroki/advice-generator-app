const API_URL = 'https://api.adviceslip.com/advice';
const card = document.querySelector(".card");
const dice = document.querySelector(".btn__dice");
const numberAdvice = document.querySelector(".number__advice");
const advice = document.querySelector(".advice");

getApi();

// Funcion que extrae la API
function getApi() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            Object.keys(users).forEach(user => {
                const slip = users[user];
                numberAdvice.innerHTML = `Advice #${slip.id}`;
                advice.innerHTML = `"${slip.advice}"`;
            });
        });
};
dice.addEventListener("click", () => {
    // Si existen tanto numberAdvice y advice entonces le elmino el texto dentro y se ejecuta la función getApi()
    if (numberAdvice && advice) {
        numberAdvice.innerHTML = "";
        advice.innerHTML = "";
        getApi();
    }

    // Desabilitar el boton de tirar el dado por dos segundos despues de haberse pulsado (esto porque la api guarda el advice en cache por dos segundos entonces si lo ejecutas multiples veces en menos de esos dos segundos la api te devuelve el mismo advice) :)
    dice.disabled = true;
    setTimeout(() => {
        dice.disabled = false;
    }, 2000);
});
