const navbar = document.querySelector('#container-nav');
const header = document.querySelector('#container-header');
const about = document.querySelector('#container-about');
const body = document.querySelector('#body')

const navContent = (container, body) => {
  container.innerHtml = `
  <div class="logo_container-gen">
    <h1 class="logo_text text-white font-two normal">Gourmet</h1>
  </div>
  <div class="links_container-gen">
    <ul class="nav_list flex align-center">
      <li class="nav_list-link text-white font-three">Home</li>
      <li class="nav_list-link text-white font-three">Menu</li>
      <li class="nav_list-link text-white font-three">Resarvations</li>
    </ul>
  <div>`;

  body.appendChild(content);
}

const headContent = (container) => {
  const content = `
  <div class="header_title-cont">
    <h1 class="text-white font-two normal">Gourmet</h1>
  </div>
  <div class="header_text-cont">
    <span class="text-white">Ready to be opened</span>
  </div>`;

  container.appendChild(content);
};

const aboutContent = (container) => {
  const content = `
  <div class="header_title-cont">
    <h1 class="text-white font-two normal">Gourmet</h1>
  </div>
  <div class="header_text-cont">
    <span class="text-white">Ready to be opened</span>
  </div>`;

  container.appendChild(content);
}