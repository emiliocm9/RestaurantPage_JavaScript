import { header, about, headContent, aboutContent } from './home';
import { menuHeadContent } from './menu.js';
import { reserveHeadContent } from './reserve';
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const reserButton = document.querySelector('#reservation');

const removeContent = (header, about) => {
  header.innerHTML = '';
  about.innerHTML = '';
};

homeButton.addEventListener('click', () => {
  removeContent(header, about)
  headContent(header);
  aboutContent(about);
});

menuButton.addEventListener('click', () => {
  removeContent(header, about)
  menuHeadContent(header);
});

reserButton.addEventListener('click', () => {
  removeContent(header, about)
  reserveHeadContent(header);
});
