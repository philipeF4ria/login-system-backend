# Login System Backend
Back-end desenvolvido em NodeJS e Typescript para um sistema de cadastro e login de uma aplicação para organizar viagens.

### Como a aplicação funciona ###

#### Cadastro de usuário ####
O back-end recebe as informações do cliente para cadastrar o usuário. 
Após as devidas verificações (se os dados estão corretos ou se o email informado está disponível), os dados são inseridos na tabela do banco de dados Postgres. <br />

#### Login de usuário ####
O back-end recebe as credenciais do usuário e faz as verificações pertinentes. 
Caso os dados estejam corretos, é retornado ao cliente as informações do usuário
e um token de autenticação JWT.

### Tecnologias utilizadas ###

1) Typescript
2) NodeJS + Express
3) BcryptJS
4) JWT
5) PostgreSQL :elephant:
6) Docker :whale:

### Como executar a aplicação ###

Para executar esta aplicação na sua máquina, basta clonar o repositório , dar o comando `yarn` para que as dependências sejam instaladas,
executar `yarn dev:server` e utilizá-la em `localhost:3333`
