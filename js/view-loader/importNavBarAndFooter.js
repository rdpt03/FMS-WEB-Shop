// Seleciona o elemento onde o navbar será inserido
const navbarContainer = document.getElementById('navbar');
const sidebarContainer = document.getElementById('sidebar');
// Carrega o HTML do navbar
fetch('./../components/navbar.html')
  .then(response => response.text())
  .then(html => {
    navbarContainer.innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar navbar:', err));

fetch('./../components/sidebar/')
  .then(response => response.text())
  .then(html => {
    sidebarContainer.innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar navbar:', err));
