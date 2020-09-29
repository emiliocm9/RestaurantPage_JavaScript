export const reserveAboutContent = (body) => {
  const content = document.createElement('div');
  content.className = 'flex w-100 over-hidden';

  content.innerHTML = `
  <div class="text flex align-center justify-center flex-column">
      <h2 class="font-two">Reservation</h2>
      <h3 class="font-three">Delight</h3>
      <div><i class="fas fa-asterisk"></i></div>
      <p class="font-one">We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
      <div><a class="a-CTA font-three" href="#">Make a Reservation</a></div>
  </div>
  <div class="image-container flex">
      <div class="image image1">
          <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-1.jpg" alt="Food Photo">
      </div>
      <div class="image image2">
          <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-2.jpg" alt="Food Photo">
      </div>
  </div>`;

  body.appendChild(content);
};


export const reserveHeadContent = (body) => {
  const content = document.createElement('div');
  content.className = 'flex align-center flex-column';

  content.innerHTML = `
    <div class="header_title-cont">
      <h1 class="text-white font-two normal">Gourmet</h1>
    </div>
    <div class="header_text-cont">
      <span class="text-white uppercase">Reservation</span>
    </div>`;

  body.appendChild(content);
};