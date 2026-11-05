// Dados dos projetos de Victor Ruis Marques
// Estrutura modular para atualização futura de imagens, links e descrições.

export const projectsData = [
  {
    id: 'tcc-dashboard',
    number: '01',
    title: 'TCC / Dashboard System',
    category: 'Sistemas & Interfaces',
    year: '2025 - 2026',
    description: 'Desenvolvimento de interfaces para um projeto de conclusão de curso, incluindo páginas de dashboard, configurações e funcionalidades de gerenciamento.',
    details: [
      'Organização visual de informações e métricas',
      'Construção de painéis de controle e navegação lateral',
      'Desenvolvimento de páginas de configuração do sistema',
      'Estruturação com HTML, CSS e componentes modulares'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    color: '#FF5A1F', // Laranja intenso
    conceptualType: 'dashboard',
  },
  {
    id: 'login-interfaces',
    number: '02',
    title: 'Login Interfaces',
    category: 'Autenticação & Formulários',
    year: '2025',
    description: 'Desenvolvimento de diferentes páginas de login, explorando layouts, organização de campos e experiências de autenticação com foco em usabilidade.',
    details: [
      'Organização lógica de formulários e estados de foco',
      'Validação visual imediata e clareza de feedback',
      'Telas de recuperação de acesso e alternância de visibilidade',
      'Adaptação responsiva para diferentes resoluções'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: '#245BFF', // Azul elétrico
    conceptualType: 'auth',
  },
  {
    id: 'ecommerce-interfaces',
    number: '03',
    title: 'E-Commerce / Purchase Interfaces',
    category: 'Comércio Digital',
    year: '2025',
    description: 'Desenvolvimento de interfaces de compra, explorando organização de produtos, composição visual e experiência fluida de navegação.',
    details: [
      'Apresentação clara de produtos e seletores de opções',
      'Estrutura de carrinho de compras e resumo de pedido',
      'Composição com hierarquia de preços e botões de ação',
      'Navegação pensada para reduzir atrito no percurso'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    color: '#873BFF', // Roxo
    conceptualType: 'ecommerce',
  }
];
