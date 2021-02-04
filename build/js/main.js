(function () {

const about = document.querySelector(`.about`);
const catalog = document.querySelector(`.catalog`);
const video = document.querySelector(`.video`);
const footerHeader = document.querySelector(`.footer__header`);
const navigationToggleClose = document.querySelector(`.navigation__toggle-close`)
const navigationToggleOpen = document.querySelector(`.navigation__toggle-open`)
const navigationMenu = document.querySelector(`.navigation__destinations`)
const mainFormName = document.querySelector(`.main__form-name`);
const mainFormNameTablet = document.querySelector(`.main-tablet__name`);
const navigationButtons = document.querySelectorAll(`.navigation__button`)

navigationMenu.classList.add(`hidden`);
navigationToggleOpen.classList.remove(`hidden`);

if (mainFormName.value === ``) {
  mainFormName.setCustomValidity(`Введите ваше имя`);
}
mainFormName.reportValidity();


mainFormName.addEventListener(`input`, function () {
  if (mainFormName.value === ``) {
    mainFormName.setCustomValidity(`Введите ваше имя`);
  } else {
    mainFormName.setCustomValidity(``);
  }
  mainFormName.reportValidity();
});

mainFormNameTablet.addEventListener(`input`, function () {
  if (mainFormNameTablet.value === ``) {
    mainFormNameTablet.setCustomValidity(`Введите ваше имя`);
  } else {
    mainFormNameTablet.setCustomValidity(``);
  }
  mainFormNameTablet.reportValidity();
});

const navigationButtonClickHandler = (evt) => {
  switch (evt.target.id) {
    case `button-about`:
      about.scrollIntoView({behavior: `smooth`});
      break;
    case "button-catalog":
      catalog.scrollIntoView({behavior: `smooth`});
      break;
    case `button-video`:
      video.scrollIntoView({behavior: `smooth`});
      break;
    case `button-contacts`:
        footerHeader.scrollIntoView({behavior: `smooth`});
      break;
  }
  console.log(evt.target.id)
}

navigationButtons.forEach((button) => {
  button.addEventListener("click", navigationButtonClickHandler)
});

const navigationClose = () => {
  navigationMenu.classList.add(`hidden`);
  navigationToggleClose.classList.add(`hidden`);
  navigationToggleOpen.classList.remove(`hidden`);
}

const navigationOpen = () => {
  navigationMenu.classList.remove(`hidden`);
  navigationToggleClose.classList.remove(`hidden`);
  navigationToggleOpen.classList.add(`hidden`);
}

navigationToggleClose.addEventListener(`click`, navigationClose);

navigationToggleOpen.addEventListener(`click`, navigationOpen);
})();
