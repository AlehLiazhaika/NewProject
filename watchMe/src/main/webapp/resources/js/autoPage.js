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

  const body = {
    email,
    name,
    username,
    password,
  };
  const init = {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body),
  };
  fetch('/watchMe/tryLogIn', init)
    .then(response => response.text())
    .then((message) => {
      if (message === 'success') {
        signUp(email, name, username, password);
      } else {
        printErrorMessage(message);
      }
    })
    .catch(err => console.log(err));
}

function logIn(username) {
  const init = {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'plain/text' }),
    body: username,
  };
  fetch('/watchMe/logIn', init);
  goToMainPage();
}

function tryToLogIn() {
  const username = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;
  const body = {
    username,
    password,
  };
  const init = {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body),
  };
  fetch('/watchMe/tryLogIn', init)
    .then(response => response.text())
    .then((message) => {
      if (message === 'success') {
        logIn(username);
      } else {
        printErrorMessage(message);
      }
    })
    .catch(err => console.log(err));
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
