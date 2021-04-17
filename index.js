const formBtn = document.getElementById('close-form');
const form = document.querySelector('.form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const emailList = [];

function toggler(){
    console.log(nameInput);
    form.classList.toggle('hide');
    formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

function validateForm(){
    if (!nameInput.value && !emailInput.value) {
        nameInput.style.border = 'red 2px solid'
        // window.alert('you must enter a name and an email address to subscribe!')
    }
    else if(!nameInput.value && emailInput.value){

    }
    else if(nameInput.value && !emailInput.value){

    }
    else{

    }
}