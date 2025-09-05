# 🌐 Meu Portfólio Pessoal

Este projeto é um **portfólio pessoal** dividido em duas partes:  

- **Frontend:** desenvolvido em **React + Vite**, responsivo, moderno e com boa usabilidade.  
- **Backend:** desenvolvido em **Node.js com Express**, responsável por fornecer os dados dos meus projetos já criados (tanto de frontend quanto de backend).  

---

## 🎨 Funcionalidades do Frontend

- Página inicial apresentando meu nome, foto de perfil, título (ex: *"Desenvolvedor Fullstack"*) e uma breve descrição.  
- Seção **Sobre mim** com informações profissionais, cursos e habilidades.  
- Seção **Projetos** que consome a API do backend e exibe meus projetos em **cards** (com título, descrição, tags, link para GitHub e link para demo).  
- Seção **Contato** com formulário funcional (nome, e-mail, mensagem), que envia os dados para o backend.  
- Layout moderno com **TailwindCSS**.  
- Rotas dinâmicas para exibir página de um projeto específico (`/projects/:id`).  
- Animações leves com **Framer Motion**.  

---

## ⚙️ Funcionalidades do Backend

- API em **Node.js + Express**.  
- Endpoint `GET /projects` → retorna todos os projetos.  
- Endpoint `GET /projects/:id` → retorna detalhes de um único projeto.  
- Endpoint `POST /contact` → recebe mensagens do formulário e salva em arquivo JSON ou banco de dados simples (SQLite ou MongoDB).  
- Estrutura organizada em **rotas, controllers e middlewares**.  

---

## 📂 Estrutura de Pastas

meu-portfolio/
│── backend/ # API Node.js + Express
│── frontend/ # Site React + Vite
│── README.md


### 📂 Backend


backend/
│── package.json
│── server.js
│── config/
│ └── db.js
│── routes/
│ ├── projects.js
│ └── contact.js
│── controllers/
│ ├── projectsController.js
│ └── contactController.js
│── models/
│ ├── Project.js
│ └── Message.js
│── data/
│ └── projects.json
│── utils/
│ └── logger.js


### 📂 Frontend


frontend/
│── package.json
│── vite.config.js
│── index.html
│── src/
│ ├── main.jsx
│ ├── App.jsx
│ ├── assets/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ProjectCard.jsx
│ │ └── ContactForm.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── ProjectDetails.jsx
│ │ └── Contact.jsx
│ ├── services/
│ │ └── api.js
│ ├── styles/
│ │ └── global.css
│ ├── hooks/
│ │ └── useFetch.js


---

## 🌐 Endpoints da API

- `GET /projects` → lista todos os projetos.  
- `GET /projects/:id` → retorna detalhes de um projeto específico.  
- `POST /contact` → recebe dados do formulário de contato.  

---

## 🚀 Deploy

- **Frontend:** recomendado usar [Vercel](https://vercel.com/).  
- **Backend:** recomendado usar [Render](https://render.com/) ou [Railway](https://railway.app/).  

---

## 📌 Observações

- Código bem organizado, com comentários explicando as partes principais.  
- Estrutura pensada para ser **escalável** e fácil de manter.  
- Ideal para mostrar seus **projetos de frontend e backend** em um só lugar.  

---