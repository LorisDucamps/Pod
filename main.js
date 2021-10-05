/* Déclaration variables */
const formulaire = document.getElementById('form');
const email = document.getElementById('email');
const infosubmit = document.getElementById('info-text');

function validationEmail(email) {
    var result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return result.test(String(email).toLowerCase());
}

formulaire.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailValue = email.value;

    if(!validationEmail(emailValue)) {
        formulaire.classList.add('error');
        infosubmit.innerHTML = 'Oops ! Please check your email';
    } else {
        formulaire.classList.remove('error');
        email.value = '';
        infosubmit.classList.add('success');
        infosubmit.innerHTML = 'Your email address has been taken into account. Thank you';
    }
})