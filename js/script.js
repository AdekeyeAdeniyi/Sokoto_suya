/* Variables */
let counter = 0;
let addToCartButtons = document.querySelectorAll(
  '.btn[data-order="addToCart"]'
);
let navCart = document.querySelector('.nav_cart');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');

addToCartButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    navCart.querySelector('.counter').textContent = ++counter;
    btn.disabled = 'true';
  });
});

navCart.addEventListener('click', () => {
  modal.setAttribute('data-state', 'active');
  document.body.style.position = 'fixed';
});

closeModal.addEventListener('click', () => {
  modal.setAttribute('data-state', 'inactive');
  document.body.style.position = '';
});
