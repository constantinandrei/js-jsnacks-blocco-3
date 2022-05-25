/* 

Snack4 (Bonus)
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.

*/

const myDiv = document.getElementById('my-div');
const myInput = document.querySelector('input#floatingInput');
const myButton = document.querySelector('#my-div .btn');
const documentOutput = document.querySelector('#my-div ul');
const invalidFeedback = document.querySelector('.invalid-feedback');

const cognomi = ['Rossi', 'Neri', 'Carbonara', 'Biestra', 'Olivieri', 'Rubino', 'Reino', 'Squarcini', 'Iozzelli'];
const nomi = ['Andrea', 'Giulia', 'Fabio', 'Pippo', 'Pluto', 'Tizio', 'Caio', 'Sempronio', 'Francesco', 'Francesca', 'Maria', 'Benedetta']

const invitatiGenerati = [];

for (let i = 0; i < 8; i++) {
    let randomIndexCognomi = Math.floor(Math.random() * cognomi.length);
    let randomIndexNomi = Math.floor(Math.random() * nomi.length);
    let invitato = nomi[randomIndexNomi] + ' ' + cognomi[randomIndexCognomi];
    let indexInvitato = invitatiGenerati.indexOf(invitato);
    if (indexInvitato === -1 ) {
        documentOutput.innerHTML += `<li class="list-group-item">${invitato}</li>`;
        invitatiGenerati.push(invitato);
    } else {
        i--;
    }
}

myButton.addEventListener('click', function () {
    let userName = myInput.value;
    let i = 0;
    let userIndex;
    while (userIndex === undefined && i < invitatiGenerati.length) {
        
        if (invitatiGenerati[i] === userName) {
            userIndex = i;
        }

        i++;
    }

    if (userIndex !== undefined) {
        myInput.classList.add('is-valid');
        myDiv.innerHTML = `<h1>La stavamo aspettando, <span class="text-danger">${invitatiGenerati[userIndex]}</span></h1>`

    } else {
        invalidFeedback.innerHTML = "Torni a casa sua " + userName;
        myInput.classList.add('is-invalid');
    }

    console.log(userIndex);
})

