document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript is active')
    const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
event.preventDefault(); //prevent form submittion

const fullname = document.getElementById('fullname').value.trim();
const email = document.getElementById('email').value.trim();
const number = document.getElementById('number').value.trim();
const textarea = document.getElementById('textarea').value.trim();
const select = document.getElementById('select').value.trim();
email.toLowerCase();
// validation for empty input
if(!fullname){
    console.log('Please enter your fullname');
    return;
}

if(!number) {
    console.log('Please enter your number');
    return;
}
if(!select) {
    console.log('Please select country');
    return;
}
if(!textarea) {
    console.log('Please enter your bio');
    return;
}

if (!validateEmail(email)) {
    console.log('Please enter a valid email')
    return;
 }

 // submit form if all input are validated
 console.log('Form successfully submitted!');
 form.submit();
 console.log(firstName && lastName && email);   
});

function validateEmail(email) {
    const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validemail.test((email).toLowerCase());
}

})