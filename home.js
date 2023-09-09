const elemAddNewIcon = document.querySelector(".add-new-icon");
const elemCrearPublicacion = document.querySelector(".crear-publicacion");
const elemViewNotifications = document.querySelector('.notifications');
const elemOverlayNotifications = document.querySelector('.overlay-notifications');
const elemShortcutIconHome = document.querySelector('.material-symbols-rounded:first-child');

let oculto = true;
let notificationsHidden = true;

window.addEventListener('load', () => {
  console.log(this.location.pathname);
  if (this.location.pathname.includes('/home.html')) {
    elemShortcutIconHome.classList.add('active-icon');
  }
});

elemAddNewIcon.addEventListener("click", mostrarCrearPublicacion);
elemViewNotifications.addEventListener('click', mostrarNotifications);

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
