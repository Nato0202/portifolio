# Portfolio Frontend

Um portfólio pessoal moderno construído com React, apresentando projetos, informações de contato e design responsivo.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool e dev server ultra-rápido
- **React Router** - Roteamento para aplicações React
- **Framer Motion** - Animações fluidas e interativas
- **CSS3** - Estilização moderna e responsiva

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── data/          # Dados mockados dos projetos
│   ├── services/      # Serviços e utilitários
│   ├── styles/        # Estilos globais
│   └── assets/        # Imagens e recursos estáticos
├── index.html         # Template HTML principal
└── vite.config.js     # Configuração do Vite
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
cd frontend
npm install
```

### Execução em Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📱 Funcionalidades

- **Página Inicial** - Apresentação pessoal com animações
- **Projetos** - Galeria de projetos com dados mockados
- **Sobre** - Informações pessoais e habilidades
- **Contato** - Formulário de contato (simulado)
- **Design Responsivo** - Compatível com desktop e mobile
- **Animações Suaves** - Transições fluidas com Framer Motion

## 🎨 Personalização

### Adicionar Novos Projetos
1. Edite o arquivo `src/data/projects.json`
2. Adicione um novo objeto seguindo o formato existente:
```json
{
  "id": 5,
  "title": "Nome do Projeto",
  "description": "Descrição do projeto",
  "tags": ["React", "Node.js"],
  "githubUrl": "https://github.com/...",
  "demoUrl": "https://demo.com",
  "imageUrl": "/images/projeto.jpg"
}
```

### Modificar Dados Pessoais
- Edite os componentes em `src/pages/` para atualizar informações pessoais
- Modifique `src/pages/Home.jsx` para alterar a apresentação inicial

## 📄 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar código

## 🚀 Deploy

O projeto pode ser facilmente deployado em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor web estático

## 📝 Notas

- Este projeto foi convertido de uma aplicação full-stack para frontend-only
- Os dados dos projetos são mockados localmente
- O formulário de contato é simulado (não envia emails reais)
- Todas as dependências do backend foram removidas
