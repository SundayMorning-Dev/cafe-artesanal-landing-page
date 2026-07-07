
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

  
// animação simples de subir, basta por (class="animar-subir") no objeto de preferencia xuxu
document.addEventListener("DOMContentLoaded", () => {
  const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Condição rígida: só adiciona a classe se o elemento entrar na área visível
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observador.unobserve(entry.target); // Para de vigiar para não repetir o efeito
      }
    });
  }, {
    threshold: 0.15, // Espera 15% do título aparecer na tela
    rootMargin: "0px 0px -50px 0px" // Margem de segurança para o rodapé
  });

  // Captura todos os elementos que possuem o nosso modelo de animação
  const elementosParaAnimar = document.querySelectorAll('.animar-subir');
  elementosParaAnimar.forEach(elemento => observador.observe(elemento));
});