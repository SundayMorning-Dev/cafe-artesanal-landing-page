

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

  // Seleciona todos os selects do seu formulário
  document.querySelectorAll('.select-wrapper select').forEach(select => {
    
    // Quando o usuário clica para abrir (ganha foco)
    select.addEventListener('focus', () => {
      select.parentElement.parentElement.classList.add('expandir-campo');
    });

    // Quando o usuário escolhe a opção ou clica fora (perde o foco)
    select.addEventListener('blur', () => {
      select.parentElement.parentElement.classList.remove('expandir-campo');
    });
  });