const cancelBtn = document.querySelector('#cancelar');
const buscarBtn = document.querySelector('#buscar');
const crearCuentaLink = document.querySelector('#crear-cuenta a');
const forgottenPasswordLink = document.querySelector('#forgotten-password a');

cancelBtn.addEventListener('click', () => {
    window.location.assign('index.html');
});

buscarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('home.html');
});

crearCuentaLink.addEventListener('click', () => {
    window.location.assign('crear-cuenta.html');
});