const goBtn = document.querySelector('#go');

goBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('home.html');
});