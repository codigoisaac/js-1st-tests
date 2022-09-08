const { checkAndGenerateText, createElement } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const name = document.querySelector('input#name').value;
  const age = document.querySelector('input#age').value;

  const outputText = checkAndGenerateText(name, age)

  if (!outputText) return

  const userList = document.querySelector('.user-list');
  const userElement = createElement('li', outputText, 'user-item');
  userList.appendChild(userElement);
};

// Start the app!
initApp();
