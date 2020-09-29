import { header, about, headContent, aboutContent } from './home';
import { menuHeadContent, menuAboutContent } from './menu.js';
import { reserveAboutContent, reserveHeadContent } from './reserve';
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const reserButton = document.querySelector('#reservations');

const removeContent = (header, about) => {
  header.innerHTML = '';
  about.innerHTML = '';
};

window.onload = function() {
  removeContent(header, about)
  headContent(header);
  aboutContent(about);
};

homeButton.addEventListener('click', () => {
  removeContent(header, about)
  headContent(header);
  aboutContent(about);
});

menuButton.addEventListener('click', () => {
  removeContent(header, about)
  menuHeadContent(header);
  menuAboutContent(about);
});

reserButton.addEventListener('click', () => {
  removeContent(header, about)
  reserveHeadContent(header);
  reserveAboutContent(about);
});
