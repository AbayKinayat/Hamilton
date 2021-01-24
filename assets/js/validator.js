
let userName = document.querySelector('#userName');
let userPhone = document.querySelector('#userPhone');
let userEmail = document.querySelector('#userEmail');
let checkbox = document.querySelector('#agree');
let checkboxText = document.querySelector('.section-eight__checkbox-text');
let nameMessageError = document.querySelector('.name__message-error');
let phoneMessageError = document.querySelector('.phone__message-error');
let emailMessageError = document.querySelector('.email__message-error');
let formBtn = document.querySelector('.section-eight__submit')

if (userName.value) {
  userName.classList.remove('invalid')
}

if (userPhone.value) {
  userPhone.classList.remove('invalid')
}

if (userEmail.value) {
  userEmail.classList.remove('invalid')
}

if (checkbox.checked) {
  checkboxText.classList.remove('checkbox-before');
  checkboxText.style.color = '#0058a9'
}

$('.section-eight__form').on('submit', function(event) {
  event.preventDefault()

userName.classList.remove('invalid');
userPhone.classList.remove('invalid');
userEmail.classList.remove('invalid');
checkbox.classList.remove('invalid');
nameMessageError.textContent = '';
phoneMessageError.textContent = '';
emailMessageError.textContent = '';


if (!userName.value) {
  userName.classList.add('invalid');
  nameMessageError.textContent = 'Введите свое имя';
}

if (!userPhone.value) {
  userPhone.classList.add('invalid');
  phoneMessageError.textContent = 'Введите номер телефона';
}

if (!userEmail.value) {
  userEmail.classList.add('invalid');
  emailMessageError.textContent = 'Введите Email';
}

if (!checkbox.checked) {
  checkboxText.classList.add('checkbox-before');
  checkboxText.style.color = '#d63333'
}

if (userName.value) {
  userName.classList.remove('invalid')
  userName.classList.add('valid')
}

if (userPhone.value) {
  userPhone.classList.remove('invalid')
  userPhone.classList.add('valid')
}

if (userEmail.value) {
  userEmail.classList.remove('invalid')
  userEmail.classList.add('valid')
}

if (checkbox.checked) {
  checkboxText.classList.remove('checkbox-before');
  checkboxText.style.color = '#0058a9'
}

if (userName.value && userPhone.value && userEmail.value && checkbox.checked) {
  formBtn.textContent = 'Обработка.'
  setTimeout(() => {
  formBtn.textContent = 'Обработка..'
  }, 1000)
  setTimeout(() => {
    formBtn.textContent = 'Обработка...'
    }, 2000)
}

if (!userName.value || !userPhone.value || !userEmail.value || !checkbox.checked) {
  return false
}

setTimeout(() => {
  window.location.href = 'thanks.html';
}, 3000)

})
