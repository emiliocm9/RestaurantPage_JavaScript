const aboutContent = (body) => {
  const content = document.createElement('div');
  content.className = 'flex';

  content.innerHTML = `
  <div class="text flex align-center justify-center flex-column">
    <h2 class="font-two">Discover</h2>
    <h3 class="font-three">Our Story</h3>
    <div><i class="fas fa-asterisk"></i></div>
    <p class="font-one">Gourmet is a restaurant, bar and coffee roastery. Our centerpiece is the tasting menu: rotating, cutting-edge, and traditional all at once. Check out the pepper stuffed with dark chocolate and crunchy cacao, sure to command your attention.</p>
  </div>
  <div class="image-container flex">
    <div class="image image1">
        <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg" alt="Food Photo">
    </div>
    <div class="image image2">
        <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg" alt="Food Photo">
    </div>
  </div>`;

  body.appendChild(content);
};

export default aboutContent;
