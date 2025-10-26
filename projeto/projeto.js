// Dados dos portfólios
const portifolios = {
  dambros: [
    {
      nome: "Locare",
      descricao: `Locare foi um projeto desenvolvido no curso de Análise e Desenvolvimento de Sistemas,
      utilizando a metodologia Scrum para gerenciar as etapas de planejamento, desenvolvimento e entrega.
      A aplicação tem como foco facilitar o aluguel e anúncio de quadras esportivas, integrando conceitos
      de usabilidade, design responsivo e boas práticas de programação.`,
      imagem: "img/Logo-removebg-preview.png",
      github: "https://github.com/Gustavo-dambros/Locare_Entrega_Final",
      tecnologias: [
        "img/html-5-svgrepo-com (1).svg",
        "img/css-svgrepo-com.svg",
        "img/js-official-svgrepo-com.svg"
      ]
    }
  ],

  amigo: [
    {
      nome: "Sistema de Gestão Escolar",
      descricao: `Projeto desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas, com foco em 
      controle acadêmico e gestão de turmas, utilizando banco de dados relacional, interface intuitiva e metodologia Scrum.`,
      imagem: "img/projeto-amigo.png",
      github: "https://github.com/amigo/projeto-escolar",
      tecnologias: [
        "img/html-5-svgrepo-com (1).svg",
        "img/python-svgrepo-com.svg",
        "img/sql-database-svgrepo-com.svg"
      ]
    }
  ]
};

// Função para carregar o portfólio selecionado
function carregarPortfolio(nome) {
  const container = document.getElementById("carrosel-projetos");
  container.innerHTML = "";

  portifolios[nome].forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("card-proj");
    card.innerHTML = `
      <div class="info-proj">
        <p>${proj.descricao}</p>
        <div class="container-icon">
          <div class="icon-proj">
            <a href="${proj.github}" target="_blank">
              <img src="img/github-svgrepo-com.svg" alt="GitHub">
            </a>
          </div>
          <h3 class="tec-proj">Tecnologias usadas:</h3>
          ${proj.tecnologias.map(tec => `
            <div class="icon-proj"><img src="${tec}" alt=""></div>
          `).join("")}
        </div>
      </div>
      <div class="img-proj">
        <img src="${proj.imagem}" alt="${proj.nome}">
      </div>
    `;
    container.appendChild(card);
  });
}

// evento de troca no seletor
document.getElementById("portfolioSelect").addEventListener("change", (e) => {
  carregarPortfolio(e.target.value);
});

// carrega o portfólio inicial (Dambros)
carregarPortfolio("dambros");
