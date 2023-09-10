const loginBtn = document.querySelector('#login-button');
const crearCuentaLink = document.querySelector('#crear-cuenta a');
const forgottenPasswordLink = document.querySelector('#forgotten-password a');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('home.html');
});

forgottenPasswordLink.addEventListener('click', () => {
    window.location.assign('forget-password.html');
})

crearCuentaLink.addEventListener('click', () => {
    window.location.assign('crear-cuenta.html');
})