
# 📌 Zombie+  Resumo do Projeto by Glaucio J Silveira 
<hr>

Este repositório contém testes de regressão para o projeto Zombie+. Os casos de teste estão organizados para validar funcionalidades da landing page (fila de espera e autenticação de leads) e a área administrativa (gestão de filmes, séries e leads). O objetivo é garantir que o sistema cumpra os requisitos de negócio e ofereça uma experiência confiável ao usuário.
<hr>
## 📌 Principais áreas de teste (resumo):

- 🏠 Landing Page: cadastro de leads (fila de espera) e autenticação (login).
- 🎬 Admin: cadastro, busca e exclusão de filmes e séries.
- 👥 Gestão de Leads: busca e exclusão de leads.

Veja os casos completos em: [CasosDeTestes.md](CasosDeTestes.md)

## 🛠️ Tecnologias usadas no projeto
<hr>
- 🟢 Node.js: runtime principal para executar os testes, scripts e integrações do projeto.
- 📦 npm: gerenciamento de dependências e execução de comandos como `npx playwright test` e `npx playwright install`.
- 🎭 Playwright: framework de automação E2E usado para validar fluxos da landing page e da área administrativa.
- ✅ `@playwright/test`: runner oficial do Playwright, usado na configuração dos testes, assertions, fixtures e execução paralela.
- 📊 Playwright HTML Reporter: geração de relatórios em `playwright-report/`.
- 📜 JavaScript: linguagem base do projeto, usada na configuração, specs, Page Objects e helpers.
- 🧩 Page Object Model (POM): padrão adotado em `tests/pages/` para encapsular ações e validações das telas.
- 🎲 `@faker-js/faker`: geração de dados dinâmicos para cenários como cadastro e login.
- 🐘 `pg`: biblioteca cliente do PostgreSQL usada em `tests/support/database.js` para preparar e limpar dados de teste.
- 🗄️ PostgreSQL: banco acessado pelos testes de apoio para manipulação de massa de dados.
- 🌐 `node:http`: módulo nativo do Node.js referenciado nos testes, complementando o ecossistema usado no projeto.
- 🧾 JSON fixtures: massa de dados estruturada em arquivos como `tests/support/fixtures/movies.json`.
- 🔌 MCP Server do Playwright `@playwright/mcp`: servidor MCP configurado para automação assistida por ferramentas compatíveis com MCP.
- 🧪 Playwright Test MCP Server: servidor adicional configurado em `.vscode/mcp.json` com `npx playwright run-test-mcp-server`.
- 🤖 Codex CLI: cliente compatível com MCP citado no projeto para registrar e consumir o servidor Playwright com comandos como `codex mcp add` e `codex mcp list`.
- 💻 VS Code com MCP: ambiente de editor suportado pelo projeto por meio do arquivo `.vscode/mcp.json`.
<hr>

## 📋 Pré-requisitos

- Node.js (recomendado >= 16)
- npm (ou yarn)
- Acesso à internet para baixar navegadores Playwright

## ⚙️ Instalação passo a passo (Windows)
<hr>
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

## 🔌 MCP do Playwright neste projeto
<hr>
O workspace deste repositório já está configurado com o servidor MCP do Playwright em `.vscode/mcp.json`:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ],
      "type": "stdio"
    }
  },
  "inputs": []
}
```

O projeto também expõe um script opcional no `package.json`:

```bash
npm run mcp:playwright
```

Se for a primeira vez usando o ambiente, garanta também que os navegadores do Playwright estejam instalados:

```bash
npx playwright install
```

## 🧠 Como instalar e configurar no Roo, no Copilot e no Codex
<hr>
Todos os exemplos abaixo usam o mesmo servidor MCP do Playwright:

```json
{
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest"]
}
```

### 1. 🐾 Roo (Roo Code)

No Roo, adicione o servidor no arquivo `mcp_settings.json` do usuário.
No Windows, normalmente ele fica em:

```text
C:\Users\SEU_USUARIO\AppData\Roaming\Code\User\globalStorage\rooveterinaryinc.roo-cline\settings\mcp_settings.json
```

Exemplo:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

Depois de salvar, reabra o Roo ou recarregue a janela do VS Code para o servidor aparecer.

### 2. 🤝 GitHub Copilot no VS Code
<hr>
Para usar com o Copilot Chat no VS Code, mantenha ou crie o arquivo `.vscode/mcp.json` na raiz do projeto.
Este repositório já possui esse arquivo configurado, então normalmente basta abrir o projeto no VS Code e iniciar o servidor MCP pela interface do editor.

Arquivo usado neste projeto:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ],
      "type": "stdio"
    }
  },
  "inputs": []
}
```

Se quiser reutilizar a mesma configuração em outro repositório, copie este arquivo para `.vscode/mcp.json`.

### 3. 🤖 Codex
<hr>
No Codex CLI, você pode registrar o servidor MCP do Playwright com o comando abaixo:

```bash
codex mcp add playwright -- npx -y @playwright/mcp@latest
```

Para conferir se o servidor foi adicionado:

```bash
codex mcp list
```

Se preferir remover e recriar depois:

```bash
codex mcp remove playwright
```

## 🔗 Referências úteis

- GitHub Copilot Chat com MCP no VS Code: https://docs.github.com/en/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp
- GitHub Copilot Coding Agent com MCP: https://docs.github.com/en/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-coding-agent-with-mcp
- Roo Code Docs: https://docs.roocode.com/

## ▶️ Comandos úteis para executar os testes
<hr>
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
```

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

## 💡 Sugestão: adicionar script npm
<hr>
Para facilitar, adicione ao `package.json`:

```json
"scripts": {
  "test": "npx playwright test"
}
```

Assim você poderá executar `npm test`.

## 📁 Local de saída do relatório
<hr>
O Playwright gera por padrão a pasta `playwright-report/` com o relatório HTML quando executado com o reporter `html`.

Se quiser rodar apenas o teste renomeado, o arquivo de exemplo agora está em: [tests/leads.js](tests/leads.js)


# By Glauio
