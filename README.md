# Zombie+ — Resumo do Projeto by Glaucio J Silveira

Este repositório contém testes de regressão para o projeto Zombie+. Os casos de teste estão organizados para validar funcionalidades da landing page (fila de espera e autenticação de leads) e a área administrativa (gestão de filmes, séries e leads). O objetivo é garantir que o sistema cumpra os requisitos de negócio e ofereça uma experiência confiável ao usuário.

Principais áreas de teste (resumo):

- Landing Page: cadastro de leads (fila de espera) e autenticação (login).
- Admin: cadastro, busca e exclusão de filmes e séries.
- Gestão de Leads: busca e exclusão de leads.

Veja os casos completos em: [CasosDeTestes.md](CasosDeTestes.md)
Veja os cenários BDD em: [CenariosBDD.md](CenariosBDD.md)

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

## Dependência adicional: Faker (compatível com CommonJS)

Neste projeto usamos a versão **`@faker-js/faker@^9.6.0`** porque ela é distribuída em **CommonJS**, o que evita o erro:

> `require() of ES Module ... not supported`

As versões 10+ do Faker são ES Modules e exigem que o projeto esteja em modo ESM (`"type": "module"` no `package.json`) ou que se use `import()` dinâmico.

Instalação:

```bash
npm install @faker-js/faker@^9.6.0
```

Uso em testes (CommonJS):

```js
const { faker } = require('@faker-js/faker')
const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()
```

Observações:
- Se você migrar o projeto para ESM (`"type": "module"`), poderá atualizar para `@faker-js/faker` 10+ e usar `import { faker } from '@faker-js/faker'`.
- A versão `9.6.0` garante compatibilidade com a estrutura atual de testes do Playwright (CommonJS).

Observações:
- Em Linux pode ser necessário `npx playwright install-deps` antes de instalar navegadores.
- Não é necessário instalar o Playwright globalmente; usar `npx` garante a versão do projeto.

**Comandos úteis para executar os testes**

- Executar todos os testes:

```bash
npx playwright test
```

- Executar todos os testes na interface visual:

```bash
npx playwright test --ui
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

- Executar em modo debug:

```bash
npx playwright test --debug
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
