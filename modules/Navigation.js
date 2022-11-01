const bookPage = document.getElementById('book-page');
const formPage = document.getElementById('form-page');
const contactPage = document.getElementById('contact-page');

const showBookPage = () => {
  formPage.classList.add('hide');
  contactPage.classList.add('hide');
  bookPage.classList.remove('hide');
}

const showFormPage =  () => {
  formPage.classList.remove('hide');
  contactPage.classList.add('hide');
  bookPage.classList.add('hide');
}

const showContactPage = () => {
  formPage.classList.add('hide');
  contactPage.classList.remove('hide');
  bookPage.classList.add('hide');
}

export { showBookPage, showFormPage, showContactPage };