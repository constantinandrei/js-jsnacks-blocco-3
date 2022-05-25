/* 


Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.



*/
const userInput = document.querySelector('input');
const userButton = document.querySelector('.btn');
const documentOutput = document.getElementById('output');
const cancelButton = document.querySelector('.btn.btn-danger');




let myArray = [];


userButton.addEventListener('click', function () {
    
    let userNumber = parseInt(userInput.value);

    if (isNaN(userNumber)) {
        alert('Ho detto numero!!!')
    } else { 
    myArray.push(userNumber);
    let myElement = document.createElement('li');
    myElement.classList.add('list-group-item');
    
    myElement.innerHTML = `${userNumber}`;
    documentOutput.appendChild(myElement);
    console.log(myArray);
}

if (myArray.length === 5) { 
    let i = 0;
    let sum = 0;

    while (i < 5) {
        sum += myArray[i];
        i++;
    }
        let myElement = document.createElement('li');
        myElement.classList.add('list-group-item');
        myElement.classList.add('list-group-item-primary');
        myElement.innerHTML = `Totale: ${sum}`;
        documentOutput.appendChild(myElement);
        cancelButton.classList.remove('d-none');
        userButton.classList.add('d-none');
        userInput.classList.add('d-none')
    }

    userInput.value = '';
})

cancelButton.addEventListener('click', function () {
    documentOutput.innerHTML = '';
    cancelButton.classList.add('d-none');
    userButton.classList.remove('d-none');
    userInput.classList.remove('d-none');
    myArray = [];
})