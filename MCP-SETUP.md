# MCP Playwright - Cola Rapida

## Ordem de preferencia

1. VS Code pelo workspace
2. Codex
3. Prompt / terminal

## 1. VS Code

Este projeto ja esta configurado em `.vscode/mcp.json`.

Passos:

1. Abra a pasta do projeto no VS Code.
2. Se for a primeira vez, rode `npx playwright install`.
3. Abra o chat/agente com suporte a MCP.
4. Inicie ou autorize o servidor `playwright` quando ele aparecer.

Arquivo usado pelo projeto:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"],
      "type": "stdio"
    }
  },
  "inputs": []
}
```

Comando util se quiser subir manualmente:

```bash
npm run mcp:playwright
```

## 2. Codex

Passos:

1. Confira se o servidor esta cadastrado:

```bash
codex mcp list
```

2. Se precisar cadastrar:

```bash
codex mcp add playwright -- npx -y @playwright/mcp@latest
```

3. Abra o Codex no projeto.
4. Use a sessao normalmente com o servidor MCP habilitado.

Comandos uteis:

```bash
codex mcp get playwright
codex mcp remove playwright
```

## 3. Prompt / terminal

Passos:

1. Abra um terminal na raiz do projeto.
2. Se necessario, rode:

```bash
npx playwright install
```

3. Inicie o servidor MCP:

```bash
npx -y @playwright/mcp@latest
```

Observacao:

- O servidor fica ativo apenas enquanto o terminal estiver aberto.

## Resumo rapido

```text
Melhor no dia a dia: VS Code
Melhor para usar com o Codex: Codex
Melhor para teste rapido: Prompt / terminal
```
2. Usando Playwright MCP com Agentes de IA
O Playwright MCP permite que agentes de IA interajam com páginas web para automatizar tarefas ou gerar testes sem a necessidade de codificação manual.

A. Configurar o Servidor MCP
Você pode instalar o servidor Playwright MCP através da paleta de comandos do VS Code:

Abra a Paleta de Comandos (Ctrl+Shift+P) e selecione MCP: Add Server.

Escolha "npm package" e digite playwright como o nome do pacote.

O servidor será adicionado automaticamente ao seu arquivo .vscode/mcp.json.

Alternativa: O servidor Playwright Test MCP é utilizado automaticamente ao inicializar agentes do Playwright:

Bash
npx playwright init-agents --loop=vscode
Este comando configura tudo o que é necessário para usar agentes do Playwright dentro do VS Code.

B. Interagir Usando Prompts
Com o servidor rodando, você pode usar a visualização de Chat (Ctrl+Alt+I ou o ícone de chat) no VS Code para dar instruções em linguagem natural:

Digite um prompt descrevendo a ação (ex: "Vá para code.visualstudio.com, recuse o banner de cookies e tire um print da página inicial").

O agente de IA usará as ferramentas do Playwright para executar o pedido no navegador.

3. Gerando Código de Teste Manualmente (Codegen)
Para gerar código de teste padrão do Playwright sem a interface de chat da IA, utilize a ferramenta Codegen integrada:

Execute o seguinte comando no terminal:

Bash
npx playwright codegen https://sua-app.com
Isso abrirá um navegador e uma janela separada que gera o código do teste em tempo real conforme você clica e interage com a página.

Você também pode iniciar o Codegen clicando no botão "Record New" na barra lateral de testes (Testing) do VS Code.

Dica de Especialista para o seu Cenário:
Como você está configurando o servidor MCP para o projeto "Zombie", o comando npx playwright init-agents --loop=vscode é o caminho mais rápido para integrar o Chat do VS Code diretamente com o motor do Playwright, permitindo que a IA "dirija" o navegador para você enquanto você valida os cenários de teste.

