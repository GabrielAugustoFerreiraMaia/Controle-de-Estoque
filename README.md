# Controle de Estoque API

Este projeto é uma API REST para controle de estoque, desenvolvida com Node.js, Express, Sequelize e PostgreSQL. A API permite o gerenciamento de produtos, oferecendo funcionalidades de criação, leitura, atualização e exclusão (CRUD).

## Funcionalidades

- **Adicionar Produto**: Adiciona um novo produto ao estoque.
- **Listar Produtos**: Exibe todos os produtos no estoque.
- **Exibir Produto**: Exibe os detalhes de um produto específico.
- **Atualizar Produto**: Atualiza as informações de um produto existente.
- **Deletar Produto**: Remove um produto do estoque.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criação de servidores web em Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) para comunicação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os produtos do estoque.
- **Insomnia/Postman**: Ferramentas para teste de APIs REST.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## Requisitos

- Node.js (v16.x ou superior)
- PostgreSQL (v13.x ou superior)
- NPM ou Yarn

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/controle-estoque-api.git
2. Entre no diretório do projeto:

   Navegue até a pasta do projeto:

   ```bash
   cd controle-estoque-api
3. Instale as dependências:

   Instale as dependências do projeto utilizando npm ou yarn:
   ```bash
   npm install
4. Configure as variáveis de ambiente:

   Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

   ```bash
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco
   DB_PORT=5432