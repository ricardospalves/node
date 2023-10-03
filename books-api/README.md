# 📚 Books API

✔️ Desafio concluído.

Neste desafio foi criada uma aplicação simples para gerenciar livros.

No back-end foi criado uma API Rest que cadastra, lê, atualiza e deleta livros do banco de dados através dos seguintes _endpoints_:

- Cadastrar (POST): http://localhost:8080/api/create
- Ler (GET): http://localhost:8080/api/books
- Ler pelo ID (GET): http://localhost:8080/api/book/:id
- Atualizar (PATCH): http://localhost:8080/api/update/:id
- Deletar (DELETE): http://localhost:8080/api/delete/:id

No front-end foi criado a interface para gerenciar os livros de forma simples através das páginas:

- Listar os livros cadastrados: http://localhost:5173
- Cadastrar: http://localhost:5173/cadastrar
- Editar: http://localhost:5173/editar/:id
- Deletar: http://localhost:5173/deletar/:id

## 🎥 Preview

[Books API Preview](https://github.com/ricardospalves/node/assets/7684963/ccc3e544-6259-4f25-aad6-c6ca6ccebdfa)

## ✅ Checklist

### API

- [x] Rota para cadastrar os livros
- [x] Rota para consultar os livros cadastrados
- [x] Rota para consultar os livros
- [x] Rota para editar as informações dos livros
- [x] Rota para deletar os livros

### Web

- [x] Cadastrar os livros
- [x] Listar os livros cadastrados
- [x] Editar as informações dos livros
- [x] Deletar os livros

## ✨ Tecnologias

### Back-end

- [Node.js](https://nodejs.org) com [Express](https://expressjs.com/) e [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/) (banco de dados)

### Front-end

- [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [zod](https://zod.dev/)

## 🛠️ Como usar

Antes de tudo é preciso ter o MySQL instalado na sua máquina, pois este é o banco de dados usado nesta aplicação.

Você pode baixar o MySQL gratuitamente pelo site oficial: [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/).

Uma vez instalado, agora é preciso criar o banco para a aplicação no MySQL. Isso será necessário para os passos seguintes.

---

Clonar o repositório:

```bash
git clone git@github.com:ricardospalves/node.git

```

Entrar na pasta do projeto:

```bash
cd books-api

```

Instalar as dependências do back-end:

```bash
cd api
npm install

```

Rodar o back-end:

```bash
npm run dev

```

Criar o arquivo **.env** na raíz da pasta api/ com o seguinte conteúdo:

```env
DATABASE_HOST=localhost
DATABASE_USER=<seu_usuario_no_mysql>
DATABASE_PASSWORD=<sua_senha_do_mysql>
DATABASE_NAME=<nome_do_banco_criado_no_mysql>
```

Instalar as dependências do front-end:

```bash
cd web
npm install

```

Rodar o front-end:

```bash
npm run dev

```

Agora é só acessar a aplicação: **http://localhost:5173**.

Lembre-se que para a aplicação funcionar, o back-end e o front-end precisam estar rodando, por tanto é preciso rodar os comandos para rodar os projetos em abas ou terminais diferentes.
