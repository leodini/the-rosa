//select element function

const selectElement = (el) => document.querySelector(el);

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
	body.classList.toggle('open');
});
