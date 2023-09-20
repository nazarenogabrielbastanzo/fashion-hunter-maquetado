const elemAddNewIcon = document.querySelector(".add-new-icon");
const elemCrearPublicacion = document.querySelector(".crear-publicacion");
const elemViewNotifications = document.querySelector('.notifications');
const elemOverlayNotifications = document.querySelector('.overlay-notifications');
const elemShortcutIconHome = document.querySelector('.material-symbols-rounded:first-child');
const elemCloseSession = document.querySelector('#close-session');
const elemModalCloseSession = document.querySelector('#modal-close-session');
const elemAcceptCloseSessionBtn = document.querySelector('#accept-close-session-btn');
const elemCancelCloseSessionBtn = document.querySelector('#cancel-close-session-btn');
const elemSavedIcon = document.querySelector('.saved-icon');

let oculto = true;
let notificationsHidden = true;

window.addEventListener('load', () => {
  if (this.location.pathname.includes('home.html')) {
    elemShortcutIconHome.classList.add('active-icon');
  }
});

elemAddNewIcon.addEventListener("click", mostrarCrearPublicacion);
elemViewNotifications.addEventListener('click', mostrarNotifications);
elemCloseSession.addEventListener('click', () => {
  elemModalCloseSession.classList.add('active');
});
elemAcceptCloseSessionBtn.addEventListener('click', () => {
  window.location.assign('index.html');
});
elemCancelCloseSessionBtn.addEventListener('click', () => {
  elemModalCloseSession.classList.remove('active');
});

function mostrarCrearPublicacion() {
  if (oculto) {
    elemCrearPublicacion.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "crear-visible"
    );
    oculto = false;
  } else {
    elemCrearPublicacion.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__faster",
      "crear-visible"
    );
    oculto = true;
  }
}

function mostrarNotifications() {
  if (notificationsHidden) {
    elemOverlayNotifications.classList.add(
      "animate__animated",
      "animate__faster",
      "animate__fadeInRight",
      "overlay-notifications-visible"
    );
    notificationsHidden = false;
  } else {
    elemOverlayNotifications.classList.remove(
      "animate__animated",
      "animate__faster",
      "animate__fadeInRight",
      "overlay-notifications-visible"
    );
    notificationsHidden = true;
  }
}

elemSavedIcon.addEventListener('click', () => {
  window.location.assign('guardadas.html');
});