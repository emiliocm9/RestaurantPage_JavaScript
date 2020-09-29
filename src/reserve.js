import { navbar, header, about } from './home.js';

export const reserveHeadContent = (body) => {
  const content = document.createElement('div');
  content.className = 'flex align-center flex-column'

  content.innerHTML = `
    <div class="header_title-cont">
      <h1 class="text-white font-two normal">Gourmet</h1>
    </div>
    <div class="header_text-cont">
      <span class="text-white uppercase">Reservation</span>
    </div>`;

  body.appendChild(content);
};