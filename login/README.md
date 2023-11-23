# 🔐 Login

✔️ Desafio concluído.

Neste desafio foi criado uma API (back-end) para cadastro e login de usuários
usando, **Fastify (Node.js)** com **TypeScript**, **JWT** e **Prisma**. Também
foi criado aplicação web para o usuário cadastrar e realizar o login, usando
**Next.js (React)** com **TypeScript** e **shadcn/ui**.

## Tabela de conteúdos

- [✨ Tecnologias](#-tecnologias)
- [✅ Checklist](#-checklist)
- [🛠️ Instalação](#-instalação)
- [📖 Como usar](#-como-usar)
- [💬 Sobre o desenvolvimento](#-sobre-o-desenvolvimento)

## 🎥 Preview

[Books API Preview](https://github.com/ricardospalves/node/assets/7684963/116638a8-ee6d-422c-b10a-eb0661a9b7f7)

## ✨ Tecnologias

### Back-end

- [Node.js](https://nodejs.org) com [Fastify](https://fastify.dev) e [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io) (banco de dados)
- [JWT](https://jwt.io)

### Front-end

- [Next.js](https://nextjs.org) ([React](https://react.dev) com [TypeScript](https://www.typescriptlang.org))
- [shadcn/ui](https://ui.shadcn.com)

## ✅ Checklist

### API

- [x] Rota de login (http://localhost:3333/login)
- [x] Rota para cadastrar usuários (http://localhost:3333/register)
- [x] Rota para consultar os dados do usuário (http://localhost:3333/user/:id)
- [x] Rota para desconectar o usuário (http://localhost:3333/logout)
- [x] Rota para checar o token JWT (http://localhost:3333/verify-token)

### Web

- [x] Página de login (http://localhost:3000/login)
- [x] Página de cadastro (http://localhost:3000/cadastro)
- [x] Página inicial (http://localhost:3000)
- [x] Página de perfil do usuário (http://localhost:3000)

## 🛠️ Instalação

Clonar o repositório:

```bash
git clone git@github.com:ricardospalves/node.git

```

Entrar na pasta do projeto:

```bash
cd login

```

### Back-end

Instalar as dependências do back-end:

```bash
cd api
npm install

```

Criar o arquivo **.env** na raíz da pasta api/. Na pasta do projeto existe o
arquivo [.env.example](https://github.com/ricardospalves/node/blob/main/login/api/.env.example),
então basta remover a extensão **.example**.

Criar os arquivos do Prisma:

```bash
npx prisma migrate dev --name db

```

### Front-end

Instalar as dependências do front-end:

```bash
cd web
npm install

```

## 📖 Como usar

Rodar o back-end:

```bash
npm run dev

```

Rodar o front-end:

```bash
npm run dev

```

Agora é só acessar a aplicação: **http://localhost:3000**.

Lembre-se que para a aplicação funcionar, o back-end e o front-end precisam estar rodando simultaneamente, por tanto é preciso rodar os comandos em abas ou janelas diferentes do terminal.

## 💬 Sobre o desenvolvimento

> Senta que lá vem história
> — Rá-Tim-Bum

Este projeto foi mais desafiador do que eu imaginava, principalmente no momento
de lidar com os cookies no front-end. Minha ideia inicial era focar totalmente
na API (que é o propósito geral deste repositório) e deixar o front-end o mais
simples possível, mas foi justamente o front-end que mais me desafiou.

Começando pelo back-end, escolhi trabalhar com o _Fastify_ por ser algo novo
para mim e por estar em alta no momento. De modo geral, foi bem fácil; talvez a
parte mais complicada de trabalhar com o _Fastify_ tenha sido no momento de
lidar com as _middlewares_, que são completamente diferentes do _Express_. No
entanto, com um pouco de pesquisa, foi fácil contornar. Também decidi usar o JWT
para a autenticação do usuário, o que também foi bem fácil, uma vez que já havia
utilizado o JWT em projetos pessoais anteriores.

Para o banco de dados, optei pelo _Prisma_, usando o _SQLite_, para facilitar
para mim e também para outras pessoas que queiram rodar o projeto, uma vez que
não é preciso instalar algum banco de dados na máquina. Tomei essa decisão por
causa de um desafio anterior, o[Books API](https://github.com/ricardospalves/node/tree/main/books-api)
(deste mesmo repositório). Naquele desafio, estou usando o MySQL, o que obriga a
ter o MySQL instalado na máquina, o que pode desencorajar algumas pessoas.

No geral, o desenvolvimento da API foi tranquilo, e pude notar a minha evolução
no back-end, como consigo escrever códigos de forma mais fluída e como os
conceitos já estão bem fixos na minha cabeça.

Agora, sobre o front-end, que em teoria seria a parte mais fácil, já que venho
da área, mas acabou sendo a parte mais desafiadora. Não o front-end em si, mas a
parte de integração do front-end com o back-end, especialmente a parte de
cookies.

Meu objetivo desde o começo do projeto era deixar toda a responsabilidade para o
back-end. A única responsabilidade do front-end seria servir como uma interface
para a API. Por ser uma página de login e usar o _JWT_ para criar os tokens de
autenticação, inevitavelmente teria que trabalhar com cookies para persistir os
dados no navegador. Claro que também teria a opção de usar o _Web Storage API_,
mas isso afetaria o objetivo de deixar toda a responsabilidade para o back-end,
uma vez que apenas o navegador pode manipular o _localStorage_. Com isso em
mente, o meu back-end deveria gerar um token _JWT_ que iria conter apenas o ID
do usuário. Esse token seria então armazenado em um cookie, e a API ficaria
responsável por armazenar esse token no navegador quando solicitado. Foi aí que
surgiu o maior desafio do projeto.

O objetivo era que o back-end teria a responsabilidade de armazenar e remover os
cookies do navegador quando fosse solicitado. Mas quando coloquei isso em
prática, não funcionou. Tentei de todas as formas possíveis fazer funcionar, mas
não conseguia. Então, fui pesquisar em todos os lugares e não achava a resposta
de jeito nenhum. Pesquisei no Google, no Stackoverflow, perguntei para o
ChatGPT, procurei por projetos no GitHub, mas ainda não conseguia resolver o
problema. Isso acabou me frustrando bastante. Até pensei em mudar a abordagem,
delegando ao front-end a responsabilidade de gerenciar os cookies, mas sempre
que pensava em fazer isso, parecia que eu estava "roubando" e que não era o
certo a se fazer. Continuei tentando resolver o problema até que finalmente tive
uma ideia.

O meu projeto é dividido em duas partes: a API (back-end) e o Web (front-end).
No entanto, cada um deles é disponibilizado de forma independente. Ou seja, o
meu back-end não é responsável por servir o front-end. Foi com isso em mente que
veio a minha ideia. Através do back-end, fiz uma rota simples que iria servir
uma página HTML (inclusive acabei subindo esse teste sem querer no repositório
😅: https://github.com/ricardospalves/node/commit/f9cba03cab05503431fc53078d77426399878bae)
e iria testar se, nesse caso, o back-end conseguiria armazenar o cookie no
navegador. Bingo, o cookie estava lá, armazenado no navegador. Então,
finalmente, tive ideia de onde estava o problema. O problema muito provavelmente
era com o _CORS_, que apesar de já estar configurado no back-end, ainda faltava
alguma coisa para permitir que ele gravasse os cookies em aplicações terceiras.
Depois de algumas pesquisas e mais alguns testes, finalmente consegui resolver o
problema. Basicamente, como a minha API e o meu website são fornecidos de fontes
diferentes, era preciso habilitar a opção `Access-Control-Allow-Credentials` no
servidor e a opção `credentials: include` no cliente. E finalmente estava
pronto. Eu tinha resolvido um problema que foi uma baita “pedra no sapato” mas
me senti muito bem quando consegui passar por esse obstáculo. Depois disso,
ainda tive alguns problemas menores, mas nada comparado com o problema anterior.

Este projeto definitivamente foi o mais desafiador (até o momento), e saí muito
melhor dele. Fiquei muito orgulhoso do resultado final, mas fiquei muito mais
orgulhoso de não ter desistido e ter conseguido superar um obstáculo que,
naquele momento, pensei que não fosse conseguir.

Que venham os próximos desafios! 💪
