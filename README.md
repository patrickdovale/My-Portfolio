# Portfólio — Patrick Vasconcellos do Vale

Site pessoal atualizado para refletir minha atuação em **engenharia de software, front-end e produtos SaaS**.

O conteúdo destaca experiência na **Lina Open Finance** e o trabalho independente em **Beleziq** (pré-lançamento) e **Open Sell** (em desenvolvimento, repositório privado). Projetos de aprendizado e placeholders deixaram de ser a vitrine principal.

## Destaques da interface

- Identidade visual editorial com contraste, tipografia e hierarquia de informação.
- Layout responsivo, menu mobile e navegação por âncoras.
- Conteúdo em português e inglês, com preferência de idioma salva localmente.
- Navegação por teclado, `skip link`, foco visível, HTML semântico e suporte a `prefers-reduced-motion`.
- Metadados para SEO e compartilhamento, JSON-LD de pessoa e favicon próprio.
- Conteúdo editorial centralizado em `src/data/portfolioContent.js`.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `src/Pages/Portfolio2026/index.js` | Nova página, componentes e interações |
| `src/data/portfolioContent.js` | Textos, projetos e histórico em PT/EN |
| `src/Styles/portfolio-2026.css` | Design system visual e responsividade |
| `src/App.js` | Ponto de entrada da nova interface |
| `public/index.html` | Metadados e SEO |
| `src/Pages/Main`, `src/Components` e outras pastas antigas | Implementação anterior, preservada por enquanto |

## Executar localmente

```bash
npm install
npm start
```

O app ficará disponível em `http://localhost:3000`. Para criar a versão de produção:

```bash
npm run build
```

### Estado da modernização

Este repositório nasceu em 2022 com **Create React App 4 e React 17**. A revisão atual prioriza visual, acessibilidade e posicionamento profissional sem misturar essa mudança com uma migração arriscada de dependências.

**Próximos passos técnicos:** migrar para Vite/TypeScript e versão suportada de React, remover componentes e assets legados, atualizar dependências, criar testes automatizados e validar o build/SEO no deploy de preview.

> A mudança atual está sendo revisada em uma branch. Nenhum deploy de produção é necessário para avaliá-la no código.

## Privacidade e conteúdo

- **Lina:** apenas informações gerais e públicas da atuação profissional; sem código ou dados internos.
- **Beleziq:** funcionalidades e integrações descritas como parte de produto em preparação; não como funcionalidades já lançadas.
- **Open Sell:** repositório privado, sem link para código.
- Nenhuma métrica de negócio, certificação ou título profissional foi inventado.

## Contato

[GitHub](https://github.com/patrickdovale) · [LinkedIn](https://www.linkedin.com/in/patrickdovale/) · [E-mail](mailto:patrickdovale1@hotmail.com)
