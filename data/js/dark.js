// Fungsi untuk mengaktifkan dark mode


// JavaScript untuk mengganti mode
$(document).ready(function() {
  const body = document.body;
  const toggleDarkModeButton = document.getElementById('toggleDarkModeButton');
  const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

  // Fungsi untuk mengaktifkan dark mode
  function enableDarkMode() {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerText = '☼  Mode Terang';
    localStorage.setItem('darkMode', 'enabled');
  }

  // Fungsi untuk menonaktifkan dark mode
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    toggleDarkModeButton.innerText = '☾ Mode Gelap';
    localStorage.setItem('darkMode', 'disabled');
  }

  // Inisialisasi mode berdasarkan status yang tersimpan di localStorage
  if (isDarkModeEnabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Toggle mode ketika tombol ditekan
  toggleDarkModeButton.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});