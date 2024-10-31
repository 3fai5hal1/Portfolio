// Function to toggle the theme
function toggleTheme() {
  var body = document.querySelector('body');
  var toggleButton = document.querySelector('.toggle-button');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'dark');
  }
}

// Function to set the theme based on user preference or default to dark mode
function setTheme() {
  var body = document.querySelector('body');
  var toggleButton = document.querySelector('.toggle-button');

  // Get the theme preference from localStorage
  var theme = localStorage.getItem('theme');

  // Set dark mode as the default theme if no preference is found
  if (theme === null || theme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'light');
  }
}

// Function to handle button clicks and add/remove the 'active' class
function handleButtonClick(button) {
  var buttons = document.querySelectorAll('.transparent-button');

  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  button.classList.add('active');
}

window.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var toggleButton = document.querySelector('.toggle-button');
  var buttons = document.querySelectorAll('.transparent-button');

  // Set dark mode as the default theme if no preference is found
  setTheme();

  // Add event listeners to the buttons
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      handleButtonClick(button);
    });
  });
});
