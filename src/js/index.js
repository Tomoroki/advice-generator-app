// Recuperar datos de la api y mostrarlos en .card__advice

const API_URL = 'https://api.adviceslip.com/advice';
const ul = document.querySelector(".ul");
const dice = document.querySelector(".btn__dice");

/* Forma 1 (se actualiza los datos RECARRGANDO la pagina y no por el DOM) */
// const ul = document.createElement('ul');

// fetch(API_URL)
//     .then(response => response.json())
//     .then(users => {
//         // users.forEach(user => {
//         Object.keys(users).forEach(user => {
//             const slip = users[user];
//             let elem = document.createElement('li');
//             elem.appendChild(document.createTextNode(`${slip.id} - ${slip.advice}`));
//             ul.appendChild(elem);
//         });
//         HTMLResponse.appendChild(ul);
//     });

// dice.addEventListener("click", _ => {
//     location.reload();
// });

// Forma 2 (reacarga los datos por medio del DOM)
getApi();
function getApi() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            // users.forEach(user => {
            Object.keys(users).forEach(user => {
                const slip = users[user];
                let elem = document.createElement('li');
                elem.appendChild(document.createTextNode(`${slip.id} - ${slip.advice}`));
                ul.appendChild(elem);
            });
        });
};
dice.addEventListener("click", () => {
    // Si ya existe un elemento li en el html, lo eliminamos y se ejecuta la función
    if (ul.querySelector("li")) {
        ul.removeChild(ul.querySelector("li"));
        // document.removeChild(card.querySelector("ul"));
        getApi();
    }
    // Desabilitar el boton de tirar el dado por dos segundos despues de ejecutarse 
    
    // dice.classList.add("card__dice--disabled");
    dice.disabled = true;
    setTimeout(() => {
        // dice.classList.remove("card__dice--disabled");
        dice.disabled = false;
    }, 2000);
});

