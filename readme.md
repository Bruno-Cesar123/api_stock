<h1 align="center">API STOCK</h1>

<p align="center">
  <a href="#-descricao">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 📜 Descrição

- Projeto backend para cadastro de ações.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSON Web Token](https://jwt.io/)
- [Typeorm](https://typeorm.io/#/)
- [Postgres](https://www.postgresql.org/)

## 🎲 Como executar

```bash
# Clone este repositório
$ git clone https://github.com/Bruno-Cesar123/api_stock.git

# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Faça uma copia do arquivo `.env.example` para `.env` e preencha com as informações
# Faça uma copia do arquivo `ormconfig.example.json` para `ormconfig.json` e preencha com as informações

# Instale as dependências
$ npm install ou yarn

# Execute as migrations do Typeorm
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ $ npm run dev ou yarn dev
# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](license) para mais detalhes.

---

Feito por **Bruno Cesar** [**LinkedIn**](https://www.linkedin.com/in/bruno-cesar-b0039715a/)