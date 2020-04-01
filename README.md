<p align="center">
  <img  src="https://raw.githubusercontent.com/TulioCaz/be_the_hero-api/master/temp/logoOmnistack.svg?sanitize=true">
</p>
</br>
<p align="center">
  <img  src="https://raw.githubusercontent.com/TulioCaz/be_the_hero-api/master/temp/logo.svg?sanitize=true">
</p>
</br>

<h2 align="center" style="font-weight: bold;">API Rest for  applications </h2>

<p align="center">"Quem cumpre somente a meta estipulada, nunca se supera. Vá sempre além."!</p>
</br>
<p align="center">
  <img        src="https://camo.githubusercontent.com/dda2124efff062e38068943c6e848540387df6e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d253233303444333631" alt="licenceMIT">
</p>
</br>

## :rocket: Tecnologias

Este projeto foi desenvolvido com a ajuda das seguintes tecnologias.

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Yup](https://github.com/jquense/yup)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

## 💻 Projeto

Esta api faz parte do projeto Be The Hero, uma aplicação desenvolvida durante a semana Omnistack 11.0 da [RocketSeat](https://rocketseat.com.br/). A aplicação visa ajudar Ongs a levantar fundos para custear diversos casos que elas se propõe a resolver.

## 🔖 Layout

Uma API Rest, que retorna o conteudo em JSON que vai ser consumida tanto por um Front-end em [ReactJS](https://reactjs.org/) quanto por uma aplicação Mobile Hibrido com [React Native](https://reactnative.dev/).

  - #### Banco de dados
    O Banco de dados escolhido foi o **Postgres** por ser open source e por ser muito poderoso. Para ajudar no desenvolvimento foi usado o query builder **Sequelize**.

  - #### Rotas
    Para desenvolver as rotas da aplicação foi usada a funcionalidade de Rotas do **Express**.

  - #### Autenticação JWT
    Foi implementado uma rota de autenticação JWT para trazer mais segurança para os usuarios

  - #### Middlewares de Validações
    Foi implementa do validações em todos os formularios usando a lib **Yup** retornando messagens de erro personalizadas para todas as validações.

## :ok_hand: Como Testar

1. Git clone.
2. Instale as dependecias do projeto :  ```yarn add``` ou ```npm install```
3. Copie o conteudo do arquivo **.env.example** para um novo arquivo **.env**.
4. Configure as variáveis de ambiente (arquivo .env) de acordo com seu ambiente local.
5. Rodar as migrations:
      ```
      npx knex migrate:run
      ```
6. Rode as minhas configuração do insominia: [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=BeTheHero&uri=https%3A%2F%2Fraw.githubusercontent.com%2FTulioCaz%2Fbe_the_hero-api%2Fmaster%2Fexport_insomnia.json)

7. Após finalizar as configurações, inicie a aplicação com o comando ```yarn dev``` ou ````npm dev```.

Agora é só testar as rotas e funcionalidades.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido por [Tulio Camargo](https://github.com/TulioCaz).
