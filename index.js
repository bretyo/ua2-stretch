const formBtn = document.getElementById('close-form');
const form = document.querySelector('.form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const emailList = [];

const formContainer = document.querySelector('.form-container');

const cart = document.createElement('div');
const main = document.querySelector('main');
let cartItems = 0;

function toggler(){
    form.classList.toggle('hide');
    formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

function validateForm(){
    if (!nameInput.value && !emailInput.value) {
        nameInput.style.border = 'red 2px solid'
        emailInput.style.border = 'red 2px solid'
        window.alert('you must enter a name and an email address to subscribe!')
    }
    else if(!nameInput.value && emailInput.value){
        nameInput.style.border = 'red 2px solid'
        window.alert('you must enter a name to subscribe!')

    }
    else if(nameInput.value && !emailInput.value){
        emailInput.style.border = 'red 2px solid'
        window.alert('you must enter an email address to subscribe!')

    }
    else{
        emailList.push({name: nameInput.value, email: emailInput.value})
        displayThankYou();
    }
}

const displayThankYou = function(){
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(()=>formContainer.remove(formContainer),3000);
}


form.addEventListener('submit',event=>{
    event.preventDefault(validateForm);
})

emailInput.addEventListener('change', ()=>{
    emailInput.style.border = 'none'
})
nameInput.addEventListener('change', ()=>{
    nameInput.style.border = 'none'
})

const addToCart = function(){
    if(!cartItems){
        cartItems +=1;
        cart.setAttribute('class', 'cart-display')
        cart.innerText = 'Your Cart: 1 item'
        main.appendChild(cart);
    }
    else{
        cartItems += 1;
        cart.innerText = `Your Cart: ${cartItems} items`
    }
    cart.style.color = 'blue';
    cart.style.fontSize = '18px';
    setTimeout(()=>{
        cart.style.color = 'black';
        cart.style.fontSize = '16px';
    }, 500)
}
