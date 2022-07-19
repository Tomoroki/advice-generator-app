// Recuperar datos de la api y mostrarlos en .card__advice

const API_URL = 'https://api.adviceslip.com/advice';
const card = document.querySelector(".card");
const dice = document.querySelector(".btn__dice");
const numberAdvice = document.querySelector(".number__advice");
const advice = document.querySelector(".advice");

getApi();

function getApi() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            // users.forEach(user => {
            Object.keys(users).forEach(user => {
                const slip = users[user];
                numberAdvice.innerHTML = `Advice #${slip.id}`;
                advice.innerHTML = `"${slip.advice}"`;
            });
        });
};
dice.addEventListener("click", () => {
    // Si ya existe un elemento li en el html, lo eliminamos y se ejecuta la función
    if (numberAdvice && advice) {
        numberAdvice.innerHTML = "";
        advice.innerHTML = "";
        getApi();
    } else {
        console.log("Error");
    }
    // Desabilitar el boton de tirar el dado por dos segundos despues de haberse pulsado 
    
    dice.disabled = true;
    setTimeout(() => {
        dice.disabled = false;
    }, 2000);
});
