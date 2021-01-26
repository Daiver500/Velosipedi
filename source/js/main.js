const about = document.querySelector(".about");
const catalog = document.querySelector(".catalog");
const video = document.querySelector(".video");
const footerHeader = document.querySelector(".footer__header");
const navigationToggleClose = document.querySelector(".navigation__toggle-close")
const navigationToggleOpen = document.querySelector(".navigation__toggle-open")
const navigationMenu = document.querySelector(".navigation__destinations")
const mainFormName = document.querySelector(".main__form-name");
const navigationButtons = document.querySelectorAll(".navigation__button")

navigationToggleOpen.classList.remove("hidden");


mainFormName.addEventListener("input", function () {
  if (mainFormName.value === ``) {
    mainFormName.setCustomValidity(`Введите ваше имя`);
  } else {
    mainFormName.setCustomValidity(``);
  }
  mainFormName.reportValidity();
});

const navigationButtonClickHandler = (evt) => {
  switch (evt.target.id) {
    case `button-about`:
      about.scrollIntoView({behavior: "smooth"});
      break;
    case "button-catalog":
      catalog.scrollIntoView({behavior: "smooth"});
      break;
    case `button-video`:
      video.scrollIntoView({behavior: "smooth"});
      break;
    case `button-contacts`:
        footerHeader.scrollIntoView({behavior: "smooth"});
      break;
    }
  }

  navigationButtons.forEach((button) => {
    button.addEventListener("click", navigationButtonClickHandler)
  });


/*navigationButtonAbout.addEventListener("click", function(){
  about.scrollIntoView({behavior: "smooth"});
})

navigationButtonCatalog.addEventListener("click", function(){
  catalog.scrollIntoView({behavior: "smooth"});
})

navigationButtonVideo.addEventListener("click", function(){
  video.scrollIntoView({behavior: "smooth"});
})

navigationButtonContacts.addEventListener("click", function(){
  footerHeader.scrollIntoView({behavior: "smooth"});
})*/

const navigationClose = () => {
  navigationMenu.classList.add("hidden");
  navigationToggleClose.classList.add("hidden");
  navigationToggleOpen.classList.remove("hidden");
}

const navigationOpen = () => {
  navigationMenu.classList.remove("hidden");
  navigationToggleClose.classList.remove("hidden");
  navigationToggleOpen.classList.add("hidden");
}

navigationToggleClose.addEventListener("click", navigationClose);

navigationToggleOpen.addEventListener("click", navigationOpen);
