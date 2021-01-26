const navigationButtonAbout = document.querySelector(".navigation__button-about");
const navigationButtonCatalog = document.querySelector(".navigation__button-catalog");
const navigationButtonVideo = document.querySelector(".navigation__button-video");
const navigationButtonContacts = document.querySelector(".navigation__button-contacts");
const about = document.querySelector(".about");
const catalog = document.querySelector(".catalog");
const video = document.querySelector(".video");
const footerHeader = document.querySelector(".footer__header");
const navigationToggleClose = document.querySelector(".navigation__toggle-close")
const navigationToggleOpen = document.querySelector(".navigation__toggle-open")
const navigationMenu = document.querySelector(".navigation__destinations")


navigationButtonAbout.addEventListener("click", function(){
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
})

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
