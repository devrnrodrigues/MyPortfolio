const modal = document.getElementById("projectModal");
const modalHeader = modal.querySelector("[data-modal-header]");
const modalTitle = modal.querySelector("[data-modal-title]");
const modalCategory = modal.querySelector("[data-modal-category]");
const modalOverview = modal.querySelector("[data-modal-overview]");
const modalMotivation = modal.querySelector("[data-modal-motivation]");
const modalChallenges = modal.querySelector("[data-modal-challenges]");
const modalTech = modal.querySelector("[data-modal-tech]");
const modalDeploy = modal.querySelector("[data-modal-deploy]");
const modalCode = modal.querySelector("[data-modal-code]");
const modalCloseBtn = modal.querySelector("[data-modal-close]");

const projects = {
  portfolio: {
    header: "Meu Portfólio",
    title: "Renan Rodrigues - Portfólio Pessoal",
    category: "HTML | CSS | JavaScript",
    deployUrl: "#",
    codeUrl: "https://github.com/devrnrodrigues/MyPortfolio",
    overview: `
      <p>Este projeto consiste no meu portfólio pessoal, desenvolvido como uma landing page moderna, objetiva e totalmente responsiva, com o objetivo de centralizar minhas principais informações profissionais em um único lugar. O site apresenta meus projetos, habilidades técnicas, experiência profissional e formas de contato, funcionando como um cartão de visitas digital para recrutadores e parceiros.</p>
      <p>O foco do projeto foi criar uma interface clara, fluida e acessível, priorizando usabilidade, organização visual e boa experiência do usuário em diferentes dispositivos.</p>
      `,
    motivation: `
      <p>A motivação principal foi a necessidade de ter um espaço próprio para apresentar meu trabalho de forma profissional e controlada, sem depender exclusivamente de plataformas externas. Além disso, o projeto serviu como um exercício prático para consolidar fundamentos do desenvolvimento web, especialmente em HTML semântico, CSS responsivo e JavaScript para interações dinâmicas.</p>
      <p>Durante o desenvolvimento, busquei aplicar boas práticas de estruturação de código, organização de arquivos e foco em experiência do usuário, criando um site simples, mas funcional e bem acabado.</p>
    `,
    challenges: `
    <p>Mesmo sendo um projeto mais simples, alguns pontos exigiram atenção técnica e decisões conscientes:</p>
      <ul>
        <li>Criação de um layout totalmente responsivo, garantindo boa experiência em desktop, tablet e mobile;</li>
        <li>Implementação de modo escuro com persistência no localStorage, mantendo a preferência do usuário;</li>
        <li>Organização visual de conteúdos extensos, como experiências e habilidades, sem poluir a interface;</li>
        <li>Uso de JavaScript para interações e animações, sem comprometer performance ou acessibilidade;</li>
        <li>Manutenção de uma estrutura simples, evitando frameworks para reforçar domínio dos fundamentos</li>
      </ul>
    `,
    tech: `
      <ul>
        <li><b>HTML</b> Utilizado de forma semântica para estruturar corretamente o conteúdo, melhorar acessibilidade e facilitar manutenção.</li>
        <li><b>CSS</b> Responsável pelo layout, responsividade, animações e transições, incluindo modo escuro e adaptação para múltiplos dispositivos.</li>
        <li><b>JavaScript</b> Aplicado para manipulação do DOM, controle de eventos, modais interativos, carrosséis e persistência de estado no modo escuro.</li>
      </ul>
    `,
  },
  listprogress: {
    header: "ListProgress",
    title: "Projeto ListProgress",
    category: "React | Node.js | TypeScript | Express",
    deployUrl: "https://listprogress.vercel.app/",
    codeUrl: "https://github.com/devrnrodrigues/ListProgress",
    overview: `
      <p>O ListProgress é uma aplicação web de produtividade voltada para a criação e acompanhamento de metas por meio de cards e tarefas personalizadas. Cada card representa um objetivo, enquanto as tarefas permitem quebrar esse objetivo em etapas menores, com cálculo automático de progresso conforme as tarefas são concluídas.</p>
      <p>A aplicação possui autenticação de usuários, isolamento total de dados e um fluxo completo de CRUD tanto para cards quanto para tarefas. O sistema foi pensado para ser simples de usar, mas tecnicamente bem estruturado, aplicando conceitos de arquitetura em camadas, separação de responsabilidades e boas práticas de segurança no frontend e backend.</p>
    `,
    motivation: `
      <p>O projeto surgiu da necessidade pessoal de organizar meus estudos de forma mais clara e visual, permitindo acompanhar a evolução ao longo do tempo sem depender de ferramentas genéricas ou excessivamente complexas.</p>
 
    `,
    challenges: `
    <p>Durante o desenvolvimento, alguns pontos exigiram decisões técnicas mais cuidadosas e ajustes de arquitetura:</p>
      <ul>
        <li>Implementação de autenticação com JWT, garantindo segurança, expiração de token e proteção de rotas no backend e frontend;</li>
        <li>Isolamento de dados por usuário, evitando qualquer acesso indevido entre contas;</li>
        <li>Organização da aplicação em camadas, evitando acoplamento excessivo entre UI, regras de negócio e persistência;</li>
        <li>Criação de um modo demo, permitindo navegação sem login sem comprometer a lógica principal do sistema.</li>
        </ul>
    `,
    tech: `
      <ul>
        <li><b>React</b> Utilizado para construção da interface com foco em componentização, reutilização de código e separação entre páginas e componentes de UI.</li>
        <li><b>TypeScript</b> Aplicado tanto no frontend quanto no backend para garantir tipagem forte, reduzir erros em tempo de desenvolvimento e melhorar a manutenção do código.</li>
        <li><b>Node.js & Express</b> Responsáveis pela API REST, organizados em uma arquitetura em camadas (Controller, Service e Repository), centralizando regras de negócio e controle de acesso.</li>
        <li><b>Supabase (PostgreSQL)</b> Utilizado como banco de dados e camada de persistência, permitindo armazenamento seguro dos dados e integração eficiente com o backend.</li>
      </ul>
    `,
  },
  musicanalyser: {
    header: "MusicAnalyser",
    title: "Projeto MusicAnalyser",
    category: "Python | DuckDB | Pandas | Tkinter",
    deployUrl: "https://musicanalyser.vercel.app/",
    codeUrl: "https://github.com/devrnrodrigues/musicanalyser",
    overview: `

      <p>O Music Analyser é uma aplicação desktop desenvolvida em Python para análise eficiente de grandes volumes de dados musicais. A ferramenta permite importar datasets em diferentes formatos, processar os dados de forma otimizada e visualizar o Top 10 de músicas mais populares por gênero por meio de gráficos claros e uma interface gráfica intuitiva.</p>
        <p>O projeto foi construído com foco em performance, uso eficiente de memória e visualização de dados, utilizando processamento em streaming e execução de consultas analíticas diretamente sobre os dados, mesmo em arquivos de grande porte.</p>
    `,
    motivation: `
      <p>A motivação do projeto foi aplicar, na prática, conceitos relacionados à análise de dados, Big Data e otimização de processamento, utilizando Python como linguagem principal. O objetivo não foi apenas analisar dados, mas transformar grandes volumes de informações brutas em insights compreensíveis, acessíveis inclusive para usuários não técnicos.</p>
      <p>Durante o desenvolvimento, o projeto serviu para aprofundar conhecimentos em manipulação de dados, consultas analíticas, organização modular de código e construção de interfaces desktop voltadas à experiência do usuário.</p>
    `,
    challenges: `
    <p>Este projeto apresentou desafios técnicos mais avançados, especialmente relacionados à escala e eficiência do processamento:</p>
    
      <ul>
        <li>Processamento de grandes datasets sem carregar tudo em memória, utilizando DuckDB com leitura em streaming;</li>
        <li>Padronização e limpeza de dados heterogêneos, com colunas inconsistentes e formatos variados;</li>
        <li>Mapeamento inteligente de colunas, reconhecendo nomes diferentes para os mesmos campos;</li>
        <li>Integração entre processamento pesado e interface gráfica, mantendo a aplicação responsiva;</li>
        <li>Exportação flexível de resultados, suportando múltiplos formatos e compactação automática;</li>
      </ul>
    `,
    tech: `
      <ul>
        <li><b>Python</b> Linguagem principal do projeto, utilizada para orquestrar o processamento de dados, a lógica da aplicação e a interface gráfica.</li>
        <li><b>Pandas</b> Responsável pela manipulação inicial dos dados, validação, limpeza e preparação para análise.</li>
        <li><b>DuckDB</b> Utilizado para execução de consultas analíticas eficientes, com suporte a processamento em disco, window functions e alto desempenho em grandes volumes de dados.</li>
        <li><b>Matplotlib</b> Empregado na geração de gráficos horizontais claros e objetivos, facilitando a interpretação dos resultados.</li>
        <li><b>Tkinter/TkinterDnD2</b> Frameworks usados para construção da interface gráfica desktop, incluindo suporte a drag and drop, modais informativos e barra de progresso.</li>
        
      </ul>
    `,
  },
  trackgym: {
    header: "Em construção...",
    title: "Projeto TrackGym",
    category: "React Native | TypeScript | Expo | Node.js | SQLite",
    deployUrl: "#",
    codeUrl: "https://github.com/devrnrodrigues/trackgym",
    overview: `
      <p>O TrackGym é um aplicativo mobile para gerenciamento de treinos, atualmente em fase de desenvolvimento, com protótipo funcional já definido no Figma. A proposta do app é permitir que o usuário organize seus treinos semanais de forma simples, visual e prática, acompanhando o treino do dia e gerenciando exercícios de maneira estruturada.</p>
      <p>O foco do projeto está em experiência do usuário, organização de dados offline-first e estrutura escalável, preparando a base para futuras evoluções como catálogo avançado de exercícios e personalização completa dos treinos.</p>
      <p>Projeto ainda está em desenvolvimento, funcionalidades descritas correspondem ao planejamento com base no protótipo.</p>
      `,
    motivation: `
      <p>A motivação do TrackGym surgiu da necessidade de um aplicativo de treino que fosse realmente prático no dia a dia, sem excesso de funcionalidades desnecessárias ou interfaces confusas. O objetivo é criar uma solução clara e objetiva para quem quer apenas abrir o app, ver o treino do dia e executar.</p>
      <p>Do ponto de vista técnico, o projeto foi pensado para aprofundar conhecimentos em desenvolvimento mobile com React Native, tipagem com TypeScript, persistência local com SQLite e planejamento de produto, partindo de protótipo até implementação real.</p>
      `,
    challenges: `
    <p>Mesmo ainda em construção, o projeto já apresenta desafios importantes de arquitetura e experiência do usuário:</p>
      <ul>
        <li>Modelagem de dados local, garantindo flexibilidade para treinos, exercícios e configurações semanais;</li>
        <li>Definição de uma navegação simples, sem quebrar o fluxo do usuário durante o treino;</li>
        <li>Criação de uma base de exercícios reutilizável, com suporte a busca e expansão futura;</li>
        <li>Planejamento de funcionalidades sem overengineering, evitando complexidade prematura;</li>
      </ul>
    `,
    tech: `
      <ul>
        <li><b>React Native</b> Framework utilizado para construção do aplicativo mobile, permitindo desenvolvimento multiplataforma com foco em performance e reutilização de código.</li>
        <li><b>TypeScript</b> Aplicado para garantir tipagem forte, previsibilidade do código e maior segurança na evolução do projeto.</li>
          <li><b>Expo</b> Responsável por acelerar o desenvolvimento, facilitar testes, acesso a APIs nativas e simplificar o processo de build.</li>
      </ul>
    `,
  },
};

function openProjectModal(id) {
  const project = projects[id];
  if (!project) return;

  modalHeader.textContent = project.header;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;

  modalOverview.innerHTML = project.overview || "";
  modalMotivation.innerHTML = project.motivation || "";
  modalChallenges.innerHTML = project.challenges || "";
  modalTech.innerHTML = project.tech || "";

  if (project.deployUrl && project.deployUrl !== "#" ) {
    modalDeploy.href = project.deployUrl;
    modalDeploy.style.display = "inline-flex";
  } else {
    modalDeploy.style.display = "none";
  }

  if (project.codeUrl) {
    modalCode.href = project.codeUrl;
    modalCode.style.display = "inline-flex";
  } else {
    modalCode.style.display = "none";
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".btn-project[data-project-id]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("data-project-id");
    openProjectModal(id);
  });
});

modalCloseBtn.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeProjectModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeProjectModal();
  }
});