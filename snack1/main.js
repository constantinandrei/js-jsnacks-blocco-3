/* 


Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
la somma degli elementi è minore di 50.



*/
const userInput = document.querySelector('input');
const userButton = document.querySelector('.btn');
const documentOutput = document.querySelector('.list-group');
const cancelButton = document.querySelector('.btn.btn-danger');


let myArray = [];

let sumOfNumbersInArray = 0;

userButton.addEventListener('click', function () {
        let userNumber = parseInt(userInput.value);

        if (isNaN(userNumber)) {
            alert('Ho detto numero!!!')
        } else {

            myArray.push(userNumber);

            sumOfNumbersInArray = 0;


            for (let i = 0; i < myArray.length; i++) {
                sumOfNumbersInArray += myArray[i];
            }
            
            
        }

        if (myArray.length === 1) {
                documentOutput.innerHTML += `<li class="list-group-item">${userNumber}</li>`;
                documentOutput.innerHTML += `<li class="list-group-item list-group-item-info">${sumOfNumbersInArray}</li>`

                } else {
                    
                    documentOutput.removeChild(documentOutput.lastElementChild);
                    documentOutput.innerHTML += `<li class="list-group-item">${userNumber}</li>`;
                    documentOutput.innerHTML += `<li class="list-group-item list-group-item-info">${sumOfNumbersInArray}</li>`
                    
                }


        

        userInput.value = '';
    
        console.log(myArray);



    if (sumOfNumbersInArray > 50) {
        cancelButton.classList.remove('d-none');
        userButton.classList.add('d-none');
        userInput.classList.add('d-none')
    }
})

cancelButton.addEventListener('click', function () {
    sumOfNumbersInArray = 0;
    documentOutput.innerHTML = '';
    myArray = [];
    cancelButton.classList.add('d-none')
    userButton.classList.remove('d-none');
    userInput.classList.remove('d-none')
})