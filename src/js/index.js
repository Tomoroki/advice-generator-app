// Recuperar datos de la api y mostrarlos en .card__advice

const API_URL = 'https://api.adviceslip.com/advice';

const HTMLResponse = document.querySelector(".card");
const ul = document.createElement('ul');


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
        HTMLResponse.appendChild(ul);
    });

const dice = document.querySelector(".card__dice");

dice.addEventListener("click", _ => {
    location.reload();
});

// fetch(API_URL)
//         .then(userJson => userJson.json(), e => {
//             console.log("Obtención fallida", e);
//         })
//         .then(userJson => {
//             console.log(`Obtencion exitosa de ${userJson}`);
//     });
// Extract the data from the api and show in console

// fetch(API_URL).then(response => response.json()).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("Fin de la ejecución");
// });
