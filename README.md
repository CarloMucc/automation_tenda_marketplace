# Documentação

Automação da jornada de cadastro de usuário com Cypress desenvolvido durante desafio técnico.

**link para acesso do relatório gerado:**  https://carlomucc.github.io/automation_tenda_marketplace/

![Animação](https://github.com/CarloMucc/automation_tenda_marketplace/assets/105242340/41e643e9-cb56-4832-b1f9-e6690f0429d4)

## Aplicação utilizada para os testes automatizados:
![Captura de tela 2024-01-24 001138](https://github.com/CarloMucc/automation_tenda_marketplace/assets/105242340/e496a2d6-6d26-459f-9d20-9b1986f67451)

A empresa Tenda, precisa garantir a integridade e a disponibilidade de seus serviços para clientes através de uma página de cadastro em seu site.

Essa funcionalidade é a de cadastro de clientes em seu marketplace, que possui diversos produtos disponíveis, categorias e promoções. Diariamente, novos clientes chegam ao site e precisam efetuar um cadastro para que possam comprar seus produtos, por isso essa funcionalidade é crítica para o negócio.

Para garantir a integridade deste serviço, foi construido um teste automatizado que simula a jornada de usuário ao realizar um cadastro. Foi criado um novo projeto, simulando os casos tanto de sucesso quanto de exceção, assim como feitas as devidas configurações e desenvolvidos os scripts necessários para completar essa tarefa.

**Requisitos e boas práticas seguidos para o projeto:**

- Utilização de asserções no teste.
- Abastração de dados utilizados durante o teste com o uso de fixtures.
- Testes deterministicos e independentes, o que indica a certeza de que os testes sempre serão executados da mesma forma a não ser que a aplicação mude.
- Definição de uma URL global.
- Escrita de cenários com boa legibilidade.
- Utilização do mochawesome como relatório de execução.
- Criação de estrutura de CI utilizando o Github Actions.
- Publicação do relatório de execução dos teste de fácil acesso, usando o Github Pages.


## Dependências instaladas e execução do projeto:

-  Instalar o Node Js (ambiente de execução Javascript) que contém o gerenciador de pacotes NPM.

- Para realizar a instalação do projeto e dependências execute o comando:


npm install

------------

- Para execução do projeto em modo Headless:


npm run cy:run

------------

- Para mesclar os relatórios gerados das specs em um único arquivo:

npm run report:merge

------------

-  Para gerar o relátorio em html dos resultados mergeados:

npm run report:mocha

------------

- Após o relatório ser gerado, execute o seguinte comando para excluir do projeto o arquivo anteriormente gerado:

npm run report:clean

------------

- Para execução dos testes em modo interativo, execute:

npm run cy:open

------------
