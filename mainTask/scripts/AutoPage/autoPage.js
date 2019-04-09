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

function addUser(email, name, username, password) {
  localStorage.setItem(username, JSON.stringify(new User(email, name, username, password)));
}

function goToMainPage() {
  document.location.href = './main.html';
}

function printErrorMessage(text) {
  document.getElementById('authorizationMessages').innerText = text;
}

function signUp(email, name, username, password) {
  addUser(email, name, username, password);
  localStorage.setItem('me', username);
  goToMainPage();
}

function tryToSignUp() {
  const email = document.getElementById('mailInput').value;
  const name = document.getElementById('nameInput').value;
  const username = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;

  if (email !== '' && name !== '' && username !== '' && password !== '') {
    if (localStorage.getItem(username) === null) {
      signUp(email, name, username, password);
    } else {
      printErrorMessage('Oh, this username is already taken');
    }
  } else {
    printErrorMessage('Pls, fill all fields');
  }
}

function logIn(username) {
  localStorage.setItem('me', username);
  goToMainPage();
}

function tryToLogIn() {
  const username = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;
  const user = JSON.parse(localStorage.getItem(username));
  if (user === null || password !== user._password) {
    printErrorMessage('Incorrect username or password');
  } else {
    logIn(username);
  }
}

function sendInfo(event) {
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
document.getElementById('signUpBttn').addEventListener('click', sendInfo);
