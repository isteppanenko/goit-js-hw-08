import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const obj = {};
const inputHandler = throttle(event => {
  event.preventDefault();
  obj.email = form.elements[0].value;
  obj.message = form.elements[1].value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}, 500);

form.addEventListener('input', inputHandler);

const localObj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';

if (localObj !== '') {
  form.elements[0].value = localObj.email;
  form.elements[1].value = localObj.message;
}

const btnHandler = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('submit', btnHandler);
