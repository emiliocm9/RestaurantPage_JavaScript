import {
  header, about, headContent,
} from './home';
import aboutContent from './homeabout';
import menuAboutContent from './menuabout';
import reserveAboutContent from './reserveabout';
import menuHeadContent from './menu';
import reserveHeadContent from './reserve';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const reserButton = document.querySelector('#reservations');

const removeContent = (header, about) => {
  header.innerHTML = '';
  about.innerHTML = '';
};

window.onload = () => {
  removeContent(header, about);
  headContent(header);
  aboutContent(about);
};

homeButton.addEventListener('click', () => {
  removeContent(header, about);
  headContent(header);
  aboutContent(about);
});

menuButton.addEventListener('click', () => {
  removeContent(header, about);
  menuHeadContent(header);
  menuAboutContent(about);
});

reserButton.addEventListener('click', () => {
  removeContent(header, about);
  reserveHeadContent(header);
  reserveAboutContent(about);
});
