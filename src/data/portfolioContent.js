// Conteúdo editorial separado da camada visual para facilitar manutenção e tradução.
export const portfolioContent = {
  pt: {
    nav: { about: "Sobre", work: "Experiência", projects: "Projetos", expertise: "Especialidades", contact: "Contato" },
    language: "English",
    eyebrow: "SOFTWARE ENGINEER · RIO DE JANEIRO",
    heroStart: "Oi, eu sou o Patrick.",
    heroAccent: "Desenvolvedor",
    heroEnd: "e curioso desde sempre.",
    intro: "Em 2022 eu criava meus primeiros projetos com React e montava este portfólio do meu jeito. Hoje trabalho com produtos financeiros na Lina e desenvolvo plataformas como o Beleziq. A curiosidade continua a mesma — os desafios ficaram maiores.",
    heroPrimary: "Explorar projetos",
    heroSecondary: "Falar comigo",
    overline: "O QUE ME MOVE",
    principle: "Não basta colocar uma interface no ar. O trabalho é entender regras de negócio, reduzir riscos e construir software que continue funcionando conforme o produto cresce.",
    snapshotTitle: "Da interface à operação",
    snapshotCaption: "Princípios que guiam meu trabalho",
    snapshot: [
      { number: "01", title: "Experiência de uso", detail: "Fluxos compreensíveis, acessíveis e consistentes." },
      { number: "02", title: "Arquitetura", detail: "Decisões técnicas para evoluir sem perder controle." },
      { number: "03", title: "Confiabilidade", detail: "Integrações, validação, testes e observabilidade." }
    ],
    projectsEyebrow: "TRABALHO SELECIONADO",
    projectsTitle: "Projetos que vão além do layout.",
    projectsDescription: "Alguns produtos são independentes e outros nasceram no contexto profissional. O foco aqui é mostrar problemas, decisões e soluções — não apenas uma coleção de telas.",
    projects: [
      {
        number: "01",
        name: "Beleziq",
        kind: "PRODUTO PRÓPRIO · SaaS",
        status: "Em pré-lançamento",
        description: "Plataforma multi-tenant para gestão de salões, barbearias e negócios de beleza, com agenda, relacionamento com clientes, financeiro e recursos para operação diária.",
        challenge: "Arquitetura e evolução de um produto real: dados isolados por organização, experiência consistente e integrações de pagamento e comunicação.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe Connect", "WhatsApp Cloud API"],
        link: "https://beleziq.com.br/",
        cta: "Conhecer Beleziq",
        palette: "mint"
      },
      {
        number: "02",
        name: "Open Sell",
        kind: "PRODUTO PRÓPRIO · Inteligência comercial",
        status: "Em desenvolvimento",
        description: "Sistema privado que organiza oportunidades de revenda e fornecimento, conectando pesquisa de mercado, fornecedores e decisões orientadas por capital e risco.",
        challenge: "Modelar regras de negócio que priorizam viabilidade financeira e rastreabilidade antes de executar ações sensíveis.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Regras de negócio"],
        link: null,
        cta: null,
        palette: "lavender"
      }
,
      {
        number: "03",
        name: "BetDetox",
        kind: "EXTENSÃO CHROME · Produto publicado",
        status: "Disponível na Chrome Web Store",
        description: "Extensão independente que ajuda a criar barreiras contra sites de apostas, com bloqueio por domínios, pausa com modo SOS e acompanhamento local de tentativas bloqueadas.",
        challenge: "Construir regras de bloqueio com Manifest V3 e armazenamento local, equilibrando proteção, privacidade e clareza na experiência de uso.",
        tags: ["React", "TypeScript", "Vite", "Manifest V3", "Chrome APIs"],
        link: "https://chromewebstore.google.com/detail/betdetox-bloqueador-de-ap/hheikdfbpbgilhojajgcodmpfejoplag",
        cta: "Ver na Chrome Web Store",
        palette: "cyan"
      }
    ],
    caseLabel: "Desafio técnico",
    privateLabel: "Código privado · detalhes públicos limitados",
    workEyebrow: "EXPERIÊNCIA",
    workTitle: "Experiência construída em produção.",
    workDescription: "Mais de cinco anos atuando em desenvolvimento web, com experiência em produtos financeiros e projetos próprios.",
    experiences: [
      {
        period: "JAN 2022 — ATUAL",
        role: "Desenvolvedor Front-end React Pleno",
        company: "Lina Open Finance",
        description: "Desenvolvimento e evolução de interfaces e fluxos de produtos para o setor financeiro. Trabalho com React, TypeScript, APIs REST, integrações entre sistemas e colaboração com times de produto e engenharia. Sem divulgação de informações internas ou código proprietário.",
        tags: ["React", "TypeScript", "Integrações", "Qualidade"]
      },
      {
        period: "OUT — DEZ 2021",
        role: "Desenvolvedor Front-end",
        company: "Jonnpo Tecnologia",
        description: "Participação no desenvolvimento de aplicações web, implementação de interfaces e evolução de funcionalidades em projetos reais.",
        tags: ["React", "JavaScript", "Front-end"]
      },
      {
        period: "2019 — 2020",
        role: "Desenvolvedor web freelancer",
        company: "Projetos independentes",
        description: "Criação de sites e interfaces para pequenos negócios e iniciativas digitais.",
        tags: ["Web", "Interfaces", "Clientes"]
      }
    ],
    expertiseEyebrow: "COMPETÊNCIAS",
    expertiseTitle: "Ferramentas são meios. Engenharia é a entrega.",
    expertise: [
      { title: "Frontend & experiência", description: "Interfaces escaláveis, acessíveis e orientadas à necessidade de quem usa.", items: ["React", "Next.js", "TypeScript", "Design responsivo", "Acessibilidade"] },
      { title: "Aplicações & dados", description: "Camadas de aplicação, integrações e consistência de dados.", items: ["Node.js", "APIs REST", "PostgreSQL", "Prisma", "Autenticação"] },
      { title: "Produto & operação", description: "Ciclo de vida de produtos, da modelagem ao acompanhamento em produção.", items: ["SaaS multi-tenant", "Stripe", "WhatsApp API", "Testes", "CI/CD", "Vercel"] }
    ],
    educationTitle: "Formação",
    education: "Sistemas de Informação · Estácio (2019–2022) | Técnico em Informática · ETERJ (2015–2018)",
    contactEyebrow: "CONTATO",
    contactTitle: "Vamos construir algo relevante?",
    contactText: "Aberto a conversar sobre engenharia de software, produtos digitais e desafios técnicos interessantes.",
    contactEmail: "Enviar um e-mail",
    contactLinkedIn: "Conectar no LinkedIn",
    footer: "Desenvolvido com foco em clareza, acessibilidade e evolução contínua.",
    projectFootnote: "A disponibilidade e o escopo dos produtos podem mudar durante seu desenvolvimento."
  },
  en: {
    nav: { about: "About", work: "Experience", projects: "Projects", expertise: "Expertise", contact: "Contact" },
    language: "Português",
    eyebrow: "SOFTWARE ENGINEER · RIO DE JANEIRO",
    heroStart: "Hey, I’m Patrick.",
    heroAccent: "Developer",
    heroEnd: "and always curious.",
    intro: "I'm Patrick Vasconcellos do Vale. I work across software engineering, financial-product interfaces and SaaS platforms. I combine technical depth with product thinking, user experience and ownership of what goes into production.",
    heroPrimary: "Explore projects",
    heroSecondary: "Get in touch",
    overline: "WHAT DRIVES ME",
    principle: "Shipping an interface is only the beginning. The real work is understanding business rules, reducing risks and building software that keeps working as the product scales.",
    snapshotTitle: "From interface to operations",
    snapshotCaption: "Principles behind my work",
    snapshot: [
      { number: "01", title: "User experience", detail: "Clear, accessible and consistent journeys." },
      { number: "02", title: "Architecture", detail: "Technical decisions that enable sustainable evolution." },
      { number: "03", title: "Reliability", detail: "Integrations, validation, testing and observability." }
    ],
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Projects beyond the UI.",
    projectsDescription: "Some products are independent, while others were built in professional environments. My focus is on the problems, decisions and solutions — not only screenshots.",
    projects: [
      {
        number: "01",
        name: "Beleziq",
        kind: "INDEPENDENT PRODUCT · SaaS",
        status: "Preparing for launch",
        description: "A multi-tenant management platform for salons, barbershops and beauty businesses, with scheduling, customer relationships, finance and daily operations.",
        challenge: "Designing and evolving a real product with tenant data isolation, consistent experience and integrations for payments and communication.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe Connect", "WhatsApp Cloud API"],
        link: "https://beleziq.com.br/",
        cta: "Explore Beleziq",
        palette: "mint"
      },
      {
        number: "02",
        name: "Open Sell",
        kind: "INDEPENDENT PRODUCT · Sales intelligence",
        status: "In development",
        description: "A private platform for sourcing resale and supply opportunities, connecting market research, suppliers and capital-aware decisions.",
        challenge: "Modeling business rules that emphasize financial feasibility and traceability before any sensitive action.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Business rules"],
        link: null,
        cta: null,
        palette: "lavender"
      }
,
      {
        number: "03",
        name: "BetDetox",
        kind: "CHROME EXTENSION · Published product",
        status: "Available on Chrome Web Store",
        description: "An independent browser extension that helps people add friction to gambling websites, with domain blocking, SOS pauses and local statistics of blocked attempts.",
        challenge: "Building blocking rules with Manifest V3 and on-device storage while balancing protection, privacy and clear user experience.",
        tags: ["React", "TypeScript", "Vite", "Manifest V3", "Chrome APIs"],
        link: "https://chromewebstore.google.com/detail/betdetox-bloqueador-de-ap/hheikdfbpbgilhojajgcodmpfejoplag",
        cta: "View on Chrome Web Store",
        palette: "cyan"
      }
    ],
    caseLabel: "Engineering challenge",
    privateLabel: "Private code · limited public details",
    workEyebrow: "EXPERIENCE",
    workTitle: "Experience built in production.",
    workDescription: "Over five years building for the web, with experience in financial products and independent software.",
    experiences: [
      {
        period: "JAN 2022 — PRESENT",
        role: "Mid-level React Front-end Developer",
        company: "Lina Open Finance",
        description: "Building and improving interfaces and workflows for financial products, using React, TypeScript, REST APIs and cross-system integrations while working with engineering and product teams. No internal information or proprietary code is disclosed.",
        tags: ["React", "TypeScript", "Integrations", "Quality"]
      },
      {
        period: "OCT — DEC 2021",
        role: "Front-end Developer",
        company: "Jonnpo Tecnologia",
        description: "Contributed to web applications, interfaces and feature delivery for real-world projects.",
        tags: ["React", "JavaScript", "Front-end"]
      },
      {
        period: "2019 — 2020",
        role: "Freelance Web Developer",
        company: "Independent projects",
        description: "Websites and interfaces for small businesses and digital initiatives.",
        tags: ["Web", "Interfaces", "Clients"]
      }
    ],
    expertiseEyebrow: "CAPABILITIES",
    expertiseTitle: "Tools are means. Engineering is the outcome.",
    expertise: [
      { title: "Frontend & experience", description: "Scalable, accessible interfaces tailored to real user needs.", items: ["React", "Next.js", "TypeScript", "Responsive design", "Accessibility"] },
      { title: "Applications & data", description: "Application layers, integrations and data consistency.", items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Authentication"] },
      { title: "Product & operations", description: "The product lifecycle, from modeling to production monitoring.", items: ["Multi-tenant SaaS", "Stripe", "WhatsApp API", "Testing", "CI/CD", "Vercel"] }
    ],
    educationTitle: "Education",
    education: "Information Systems · Estácio (2019–2022) | Computer Technology · ETERJ (2015–2018)",
    contactEyebrow: "CONTACT",
    contactTitle: "Let's build something meaningful.",
    contactText: "Happy to connect about software engineering, digital products and interesting technical challenges.",
    contactEmail: "Send an email",
    contactLinkedIn: "Connect on LinkedIn",
    footer: "Crafted with clarity, accessibility and continuous improvement in mind.",
    projectFootnote: "Product availability and scope may change during development."
  }
};
