export const navbar = document.querySelector('#container-nav');
export const header = document.querySelector('#container-header');
export const about = document.querySelector('#container-about');

export const headContent = (body) => {
  const content = document.createElement('div');
  content.className = 'flex align-center flex-column';

  content.innerHTML = `
    <div class="header_title-cont">
      <h1 class="text-white font-two normal">Gourmet</h1>
    </div>
    <div class="header_text-cont">
      <span class="text-white">Ready to be opened</span>
    </div>`;

  body.appendChild(content);
};
