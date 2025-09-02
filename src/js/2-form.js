const formData = {
  email: '',
  message: '',
};

const Storage_Key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onFormInput);

populateForm();

function onFormInput(event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem(Storage_Key, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(Storage_Key);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      input.value = parsedData.email;
      formData.email = parsedData.email;
    }
    if (parsedData.message) {
      textarea.value = parsedData.message;
      formData.message = parsedData.message;
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(Storage_Key);
  formData.email = '';
  formData.message = '';
}
