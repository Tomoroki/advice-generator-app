// Recuperar datos de la api y mostrarlos en .card__advice

const API_URL = 'https://api.adviceslip.com/advice';

const HTMLResponse = document.querySelector(".card");
const ul = document.createElement('ul');


fetch(API_URL)
    .then(response => response.json())
    .then(users => {
        // users.forEach(user => {
        Object.keys(users).forEach(user => {
            console.log(user);
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${user.id} - ${user.advice}`));
            ul.appendChild(elem);
        });
        HTMLResponse.appendChild(ul);
    });

// fetch(`${API_URL}`)
// // fetch(API_URL)
//         .then(userJson => userJson.json(), e => {
//             console.log("Obtención fallida", e);
//         })
//         .then(userJson => {
//             console.log(userJson);
//     });
// fetch(`${API_URL}/slip`)
//     .then((response) => response.json())
//     .then((slips) => {
//         const tpl = slips.map((slip) => `<li>${slip.id} ${slip.advice} </li>`);
//         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     });

