let formData = {
    email: "",
    message: "",
};

const labels = document.querySelectorAll('label');
labels.forEach(label => { label.classList.add('form-label') });
const input = document.querySelector('input');
input.classList.add('form-input');
const text = document.querySelector('textarea');
text.classList.add('form-message');
const button = document.querySelector('button');
button.classList.add('form-btn');

function toLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fromLocalStorage() {
    const currentData = localStorage.getItem('feedback-form-state');
    if (currentData) {
        formData = JSON.parse(currentData);
        input.value = formData.email;
        text.value = formData.message;
    }
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value.trim();
    toLocalStorage();
});

window.addEventListener('DOMContentLoaded', fromLocalStorage);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields');
    } else {     
        console.log(formData); 
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        form.reset();
    }
});