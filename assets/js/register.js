let formDivs = document.querySelectorAll('.contact__form-div');

formDivs.forEach(div => {
  div.querySelector('input').addEventListener('input', () => {
    if (div.querySelector('input').value !== '') {
      div.querySelector('label').classList.add('active');
    } else {
      div.querySelector('label').classList.remove('active');
    }
  })
});

const registerForm = document.querySelector('.register-form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

registerForm.addEventListener('submit', e => {
  e.preventDefault();

  if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters long')
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
  } else {
    let users = localStorage.getItem('users') === null ? [] : JSON.parse(localStorage.getItem('users'));

    if (users.find(user => user.email === emailInput.value)) {
      alert('User with this email already exists');
    } else {
      users.push({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      });

      localStorage.setItem('users', JSON.stringify(users));

      passwordInput.value = '';
      confirmPasswordInput.value = '';
      nameInput.value = '';
      emailInput.value = '';

      alert('You have successfully registered');
    }
  }
});

nameInput.addEventListener('input', e => {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
  const value = e.target.value;

  e.target.value = value.split('').map(letter => validCharacters.includes(letter) ? letter : '').join('');
});