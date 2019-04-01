/* global User */

function toggleInputs(event) {
  document.getElementById('mailInput').parentNode.classList.toggle('blocked');
  document.getElementById('mailInput').classList.toggle('blocked');
  document.getElementById('nameInput').parentNode.classList.toggle('blocked');
  document.getElementById('nameInput').classList.toggle('blocked');
  document.getElementById('mailInput').toggleAttribute('readonly');
  document.getElementById('nameInput').toggleAttribute('readonly');
}

function changeBttn(event) {
  const bttn = document.getElementById('signUpBttn');
  bttn.classList.toggle('logInBttn');
  bttn.classList.toggle('signUpBttn');
  if (bttn.innerText === 'Sign Up') {
    bttn.innerText = 'Log In';
  } else {
    bttn.innerText = 'Sign Up';
  }
}

function changeText(event) {
  const text = document.getElementById('notPart');
  if (text.innerText === ' ') {
    text.innerText = ' not ';
  } else {
    text.innerText = ' ';
  }
}

function addUser(username, password) {
  const email = document.getElementById('mailInput').value;
  const name = document.getElementById('nameInput').value;
  localStorage.setItem(username, JSON.stringify(new User(email, name, username, password)));
}

function goToMainPage() {
  document.location.href = './main.html';
}

function tryToSignUp() {
  const username = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;
  if (localStorage.getItem(username) == null) {
    addUser(username, password);
  } else {
    document.getElementById('authorizationMessages').innerText = 'Oh, this username is already taken';
  }
}

function tryToLogIn() {
  const username = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;
  const user = User.parse(JSON.parse(localStorage.getItem(username)));
  if (user === null || password !== user.password) {
    document.getElementById('authorizationMessages').innerText = 'Incorrect username or password';
  } else {
    localStorage.setItem('me', username);
    goToMainPage();
  }
}

function logIn(event) {
  const bttn = event.target;
  if (bttn.classList[0] === 'signUpBttn') {
    tryToSignUp();
  } else {
    tryToLogIn();
  }
}

if (localStorage.getItem('me') !== null) {
  goToMainPage();
}

document.getElementById('clickHereBttn').addEventListener('click', toggleInputs);
document.getElementById('clickHereBttn').addEventListener('click', changeBttn);
document.getElementById('clickHereBttn').addEventListener('click', changeText);
document.getElementById('signUpBttn').addEventListener('click', logIn);


// submit
// time ti string
// json to classes object
