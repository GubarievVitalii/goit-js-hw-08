import throttle from 'lodash.throttle';

const Form_Key = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const massageEl = document.querySelector('textarea');

let objectData = {};

formEl.addEventListener('input', throttle(inputForm, 500));
formEl.addEventListener('submit', submitForm);

updateChanges();

function inputForm(event) {
  objectData[event.target.name] = event.target.value;
  localStorage.setItem(Form_Key, JSON.stringify(objectData));
}

function submitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(Form_Key)));
  localStorage.removeItem(Form_Key);
  for (const key in objectData) {
    delete objectData[key];
  }
  event.currentTarget.reset();
}

function updateChanges() {
  const valuesChanged = JSON.parse(localStorage.getItem(Form_Key));
  if (!valuesChanged) {
    return;
  }

  if (valuesChanged.email) {
    emailEl.value = valuesChanged.email;
  }

  if (valuesChanged.message) {
    massageEl.value = valuesChanged.message;
  }

  objectData = { ...valuesChanged };
}
