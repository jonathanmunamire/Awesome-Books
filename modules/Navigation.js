const bookPage = document.getElementById('book-page');
const formPage = document.getElementById('form-page');
const contactPage = document.getElementById('contact-page');

function showBookPage() {
  formPage.classList.add('hide');
  contactPage.classList.add('hide');
  bookPage.classList.remove('hide');
}

function showFormPage() {
  formPage.classList.remove('hide');
  contactPage.classList.add('hide');
  bookPage.classList.add('hide');
}

function showContactPage() {
  formPage.classList.add('hide');
  contactPage.classList.remove('hide');
  bookPage.classList.add('hide');
}

export { showBookPage, showFormPage, showContactPage };