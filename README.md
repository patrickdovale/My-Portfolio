# Portfólio — Patrick Vasconcellos do Vale

Portfólio profissional focado em engenharia de software, experiência com produtos financeiros e construção de plataformas SaaS. Apresenta o trabalho na Lina e os produtos independentes Beleziq (pré-lançamento) e Open Sell (desenvolvimento privado).

## Stack e publicação

- **React 19** com **Vite 8** e JavaScript/JSX.
- **React Icons**, CSS responsivo e conteúdo em português e inglês.
- **Netlify:** build `npm run build`, diretório `dist/` e Node 22; configuração versionada em `netlify.toml`.
- **CI:** GitHub Actions instala dependências usando `npm ci` e executa `npm run build`.
- `package-lock.json` regenerado para permitir instalações reproduzíveis.

## Executar localmente

Requer Node.js 22.12 ou posterior.

```bash
npm ci
npm run dev
```

O Vite disponibiliza a aplicação normalmente em `http://localhost:5173`.

```bash
npm run build
npm run preview
```

O build produz os arquivos estáticos em `dist/`, diretório publicado pelo Netlify.

## Estrutura principal

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Metadados, SEO e entrada Vite |
| `src/main.jsx` | Montagem do React 19 |
| `src/App.jsx` | Roteamento principal para o portfólio |
| `src/Pages/Portfolio2026/index.jsx` | Interface e componentes |
| `src/data/portfolioContent.js` | Conteúdo PT/EN e projetos |
| `src/Styles/portfolio-2026.css` | Layout, estilos e responsividade |
| `vite.config.js` | Plugin React e configuração do build |
| `netlify.toml` | Configuração do deploy estático |
| `.github/workflows/portfolio-build.yml` | CI da instalação e build |

## Características

- Visual editorial escuro com seções de projetos, experiência profissional, competências e contato.
- Layout responsivo, navegação por âncoras e alternância PT/EN com preferência local.
- Acessibilidade básica: navegação por teclado, skip link, foco visível, elementos semânticos e preferência de movimento reduzido.
- Metadados Open Graph, JSON-LD e favicon vetorial.
- Dados profissionais apresentados sem métricas inventadas; conteúdos privados e corporativos protegidos.

## Histórico e próximos passos

Este projeto começou em 2022 com React 17 e Create React App 4. Em novembro de 2026 recebeu uma reformulação de conteúdo e visual, seguida de migração para React 19 + Vite 8 para corrigir problemas de instalação e deploy.

O código legado ainda permanece em pastas não importadas. Melhorias futuras: limpeza dos componentes e assets antigos, TypeScript, testes de navegação e de acessibilidade, imagens reais dos cases e revisão visual em dispositivos físicos.

## Publicação

A versão de produção é publicada a partir da branch `main` no Netlify. Pull requests geram deploys de preview separados; para produção, é necessário um commit sem diretivas de pular o CI e confirmar a publicação no painel do Netlify.

## Contato

[GitHub](https://github.com/patrickdovale) · [LinkedIn](https://www.linkedin.com/in/patrickdovale/) · [E-mail](mailto:patrickdovale1@hotmail.com)
