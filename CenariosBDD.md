# Cenários BDD (Gherkin) para Zombie+

## Funcionalidade: Cadastro de leads na fila de espera

Cenário: Lead se cadastra com dados válidos
  Dado que estou na landing page do Zombie+
  Quando eu preencho o formulário de cadastro com um nome válido e um email válido
  E clico em "Cadastrar"
  Então o lead deve ser cadastrado com sucesso no sistema

Cenário: Lead tenta se cadastrar com campos em branco
  Dado que estou na landing page do Zombie+
  Quando eu deixo o campo de nome ou email em branco
  E clico em "Cadastrar"
  Então devo ver uma mensagem de erro informando que os campos obrigatórios devem ser preenchidos

Cenário: Lead tenta se cadastrar com email inválido
  Dado que estou na landing page do Zombie+
  Quando eu preencho o nome corretamente e insiro um email em formato inválido
  E clico em "Cadastrar"
  Então devo ver uma mensagem de erro informando que o formato do email é inválido

## Funcionalidade: Autenticação (Login)

Cenário: Usuário faz login com credenciais válidas
  Dado que existe um usuário registrado com email e senha válidos
  E estou na página de login
  Quando eu informo o email e a senha válidos
  E clico em "Login"
  Então devo ser redirecionado para a área logada do sistema

Cenário: Usuário faz login com email inválido
  Dado que estou na página de login
  Quando eu informo um email inválido e uma senha válida
  E clico em "Login"
  Então devo ver uma mensagem de erro informando que o email é inválido

Cenário: Usuário faz login com senha incorreta
  Dado que existe um usuário registrado com um email válido
  E estou na página de login
  Quando eu informo o email válido e uma senha incorreta
  E clico em "Login"
  Então devo ver uma mensagem de erro informando que a senha está incorreta

Cenário: Usuário não registrado tenta fazer login
  Dado que estou na página de login
  Quando eu informo um email que não está registrado e uma senha qualquer
  E clico em "Login"
  Então devo ver uma mensagem de erro informando que o usuário não está registrado

## Funcionalidade: Gestão de Filmes (Admin)

Cenário: Cadastro de filme válido
  Dado que estou na área administrativa de filmes
  Quando eu preencho todos os campos obrigatórios do formulário de cadastro de filme com informações válidas
  E clico em "Cadastrar"
  Então o filme deve ser cadastrado com sucesso no sistema

Cenário: Cadastro de filme com campos em branco
  Dado que estou na área administrativa de filmes
  Quando eu deixo pelo menos um campo obrigatório em branco no formulário de cadastro de filme
  E clico em "Cadastrar"
  Então devo ver uma mensagem de erro informando que os campos obrigatórios devem ser preenchidos

Cenário: Cadastro de filme duplicado
  Dado que já existe um filme cadastrado no sistema
  E estou na área administrativa de filmes
  Quando eu tento cadastrar o mesmo filme novamente
  Então devo ver uma mensagem de erro informando que o filme já está cadastrado no sistema

Cenário: Cadastro de filme como destaque
  Dado que estou na área administrativa de filmes
  Quando eu preencho os campos obrigatórios e marco o filme como destaque
  E clico em "Cadastrar"
  Então o filme marcado como destaque deve ser exibido na landing page

## Funcionalidade: Busca de Filmes (Admin)

Cenário: Busca por filme existente
  Dado que existem filmes cadastrados no sistema
  Quando eu realizo uma busca por um título de filme existente
  Então devo ver a lista de filmes correspondentes ao critério de busca

Cenário: Busca por termo não encontrado
  Dado que existem filmes cadastrados no sistema
  Quando eu realizo uma busca por um título de filme que não existe
  Então devo ver uma mensagem de erro informando que a busca não retornou dados

## Funcionalidade: Exclusão de Filmes (Admin)

Cenário: Exclusão de filme
  Dado que existe um filme cadastrado no sistema
  E estou na lista de filmes
  Quando eu seleciono o filme e clico em "Excluir"
  Então o filme deve ser removido com sucesso do sistema

## Funcionalidade: Gestão de Séries (Admin)

Cenário: Cadastro de série válida
  Dado que estou na área administrativa de séries
  Quando eu preencho todos os campos obrigatórios do formulário de cadastro de série com informações válidas
  E clico em "Cadastrar"
  Então a série deve ser cadastrada com sucesso no sistema

Cenário: Cadastro de série com dados duplicados
  Dado que já existe uma série cadastrada no sistema
  E estou na área administrativa de séries
  Quando eu tento cadastrar a mesma série novamente
  Então devo ver uma mensagem de erro informando que a série já está cadastrada no sistema

Cenário: Cadastro de série com campos em branco
  Dado que estou na área administrativa de séries
  Quando eu deixo pelo menos um campo obrigatório em branco no formulário de cadastro de série
  E clico em "Cadastrar"
  Então devo ver uma mensagem de erro informando que os campos obrigatórios devem ser preenchidos

Cenário: Cadastro de série como destaque
  Dado que estou na área administrativa de séries
  Quando eu preencho os campos obrigatórios e marco a série como destaque
  E clico em "Cadastrar"
  Então a série marcada como destaque deve ser exibida na landing page

## Funcionalidade: Busca de Séries (Admin)

Cenário: Busca por série existente
  Dado que existem séries cadastradas no sistema
  Quando eu realizo uma busca por um título de série existente
  Então devo ver a lista de séries correspondentes ao critério de busca

Cenário: Busca por termo não encontrado
  Dado que existem séries cadastradas no sistema
  Quando eu realizo uma busca por um título de série que não existe
  Então devo ver uma mensagem de erro informando que a busca não retornou dados

## Funcionalidade: Gestão de Leads (Admin)

Cenário: Busca de leads
  Dado que existem leads cadastrados no sistema
  Quando eu realizo uma busca por nome de lead existente
  Então devo ver a lista de leads correspondentes ao critério de busca

Cenário: Exclusão de lead
  Dado que existe um lead cadastrado no sistema
  E estou na lista de leads
  Quando eu seleciono o lead e clico em "Excluir"
  Então o lead deve ser removido com sucesso do sistema
