# Zombie+ — Resumo do Projeto by Glaucio J Silveira

Este repositório contém testes de regressão para o projeto Zombie+. Os casos de teste estão organizados para validar funcionalidades da landing page (fila de espera e autenticação de leads) e a área administrativa (gestão de filmes, séries e leads). O objetivo é garantir que o sistema cumpra os requisitos de negócio e ofereça uma experiência confiável ao usuário.

Principais áreas de teste (resumo):

- Landing Page: cadastro de leads (fila de espera) e autenticação (login).
- Admin: cadastro, busca e exclusão de filmes e séries.
- Gestão de Leads: busca e exclusão de leads.

Veja os casos completos em: [CasosDeTestes.md](CasosDeTestes.md)

**Pré-requisitos**

- Node.js (recomendado >= 16)
- npm (ou yarn)
- Acesso à internet para baixar navegadores Playwright

**Instalação passo a passo (Windows)**

1. Verifique versões:

```bash
node --version
npm --version
```

2. No diretório do projeto, instale dependências do projeto (se houver `package.json`):

```bash
npm install
```

3. Instale o Playwright Test (dev dependency):

```bash
npm install --save-dev @playwright/test
```

4. Instale os navegadores necessários gerenciados pelo Playwright:

```bash
npx playwright install
```

Observações:
- Em Linux pode ser necessário `npx playwright install-deps` antes de instalar navegadores.
- Não é necessário instalar o Playwright globalmente; usar `npx` garante a versão do projeto.

**Comandos úteis para executar os testes**

- Executar todos os testes:

```bash
npx playwright test
```

- Executar um arquivo de teste específico:

```bash
npx playwright test tests/leads.js
```

- Executar em modo visível (headed):

```bash
npx playwright test --headed
```

- Executar em um navegador específico (ex.: Chromium):

```bash
npx playwright test --project=chromium
```

- Gerar relatório HTML e abrir em seguida:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

- Executar com trace para depuração (gera traces por teste):

```bash
npx playwright test --trace on
```

- Rodar um teste filtrando pelo título (ex.: rodar teste cujo título contenha "has title"):

```bash
npx playwright test -g "has title"
```

**Sugestão: adicionar script npm**

Para facilitar, adicione ao `package.json`:

```json
"scripts": {
  "test": "npx playwright test"
}
```

Assim você poderá executar `npm test`.

**Local de saída do relatório**

O Playwright gera por padrão a pasta `playwright-report/` com o relatório HTML quando executado com o reporter `html`.

Se quiser rodar apenas o teste renomeado, o arquivo de exemplo agora está em: [tests/leads.js](tests/leads.js)

By Glauio
