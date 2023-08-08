const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const form = document.querySelector('.js-form');

const inputCheck = (event) => {
    if (event.target.value.length > 2) {
        button.removeAttribute('disabled');
    }else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = '/pages/game.html';
}

input.addEventListener('input', inputCheck);
form.addEventListener('submit', handleSubmit);