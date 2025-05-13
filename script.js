// Function to store and load theme preference
function applyUserTheme() {
  const savedTheme = localStorage.getItem('preferredTheme');
  const theme = savedTheme || 'light';
  document.body.className = theme;
  document.getElementById('themeSelect').value = theme;
}

function saveUserTheme(theme) {
  localStorage.setItem('preferredTheme', theme);
  document.body.className = theme;
}

// Function to trigger animation
function triggerButtonAnimation() {
  const btn = document.getElementById('animateBtn');
  btn.classList.remove('bounce');
  void btn.offsetWidth; // Re-trigger animation
  btn.classList.add('bounce');
}

// Set up event listeners on page load
window.onload = function () {
  applyUserTheme();

  document.getElementById('themeSelect').addEventListener('change', function () {
    saveUserTheme(this.value);
  });

  document.getElementById('animateBtn').addEventListener('click', function () {
    triggerButtonAnimation();
  });
};