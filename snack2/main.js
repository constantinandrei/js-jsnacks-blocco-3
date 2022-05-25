/* 


Snack2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.



*/
const userInput = document.querySelector('input');
const userButton = document.querySelector('.btn');
const documentOutput = document.getElementById('output');
const cancelButton = document.querySelector('.btn.btn-danger');


let myArrayOfArray = [];


userButton.addEventListener('click', function () {
    myArrayOfArray = [];
    documentOutput.innerHTML = '';
    
    for (let i = 0; i < parseInt(userInput.value); i ++ ) {
        let iArray = [];
        documentOutput.innerHTML += `<ul id="list-${i}" class="list-group col col-1 text-center">`
        for (let j = 0; j < 10; j++) {
            let randomNumber = Math.ceil(Math.random() * 100);
            iArray.push(randomNumber);
            let ulList = document.getElementById(`list-${i}`);
            let liChild = document.createElement('li');
            liChild.classList.add('list-group-item');
            liChild.innerHTML = `${randomNumber}`;
            ulList.appendChild(liChild);
        }
        myArrayOfArray.push(iArray);
        
    }

    console.log(myArrayOfArray);


        cancelButton.classList.remove('d-none');
        userButton.classList.add('d-none');
        userInput.classList.add('d-none')
    
})

cancelButton.addEventListener('click', function () {
    documentOutput.innerHTML = '';
    cancelButton.classList.add('d-none')
    userButton.classList.remove('d-none');
    userInput.classList.remove('d-none')
})