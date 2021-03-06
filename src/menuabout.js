const menuAboutContent = (body) => {
  const images = ['https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80',
    'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=769&q=80',
    'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
    'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1015&q=80',
    'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'];
  const content = document.createElement('div');
  content.className = 'wrapper';
  const products = document.createElement('div');
  products.className = 'products';
  content.appendChild(products);
  products.innerHTML = '';

  for (let i = 0; i < images.length; i += 1) {
    if (images[i]) {
      products.innerHTML += `
      <div class="products">
        <a class="product" href="#">
          <span class="product__content display-block">
            <span class="product__thumb position-absolute display-block">
              <img class="position-absolute display-block" src="${images[i]}"/>
            </span>
            <span class="product__info position-absolute">
              <span class="product__title display-block">
                <span>Tacos Gourmet</span>
              </span>
              <span class="product__price display-block">
                <span>$1200</span>
              </span>
            </span>
          </span>
        </a>
      </div>`;
    }
  }

  body.appendChild(content);
};

export default menuAboutContent;
