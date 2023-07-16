let formDivs = document.querySelectorAll('.contact__form-div');

formDivs.forEach(div => {
  div.querySelector('input').addEventListener('input', () => {
    if (div.querySelector('input').value !== '') {
      div.querySelector('label').classList.add('active');
    } else {
      div.querySelector('label').classList.remove('active');
    }
  })
})

const signInForm = document.querySelector('.signin-form');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signInForm.email.value;
  const password = signInForm.password.value;

  let users = localStorage.getItem('users') === null ? [] : JSON.parse(localStorage.getItem('users'));
  let user = users.find(user => user.email === email);

  if (!user) {
    alert('User with this email does not exist');
  } else if (user.password !== password) {
    alert('Wrong password');
  } else {
    alert('You have successfully signed in');
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'index.html';
  }
});