<div align="center">

# 🏭 AutoFlex

### Sistema de Gestão de Produtos e Matérias-Primas

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![NestJS](https://img.shields.io/badge/NestJS-Backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)

</div>

---

## 📋 Sobre o Projeto

O **AutoFlex** é uma aplicação full-stack para gerenciamento de **Produtos** e **Matérias-Primas**, com operações completas de CRUD (criação, leitura, atualização e remoção).

A solução foi desenvolvida como teste prático, demonstrando boas práticas de arquitetura frontend com React + TypeScript, integração com APIs REST, e UI moderna e responsiva.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 📦 **Gestão de Produtos** | Cadastro, edição, exclusão e listagem de produtos com nome, descrição, preço e data |
| 🧱 **Gestão de Matérias-Primas** | CRUD completo de matérias-primas com nome e descrição |
| 🔗 **Vínculo Produto × Matéria-Prima** | Associação de produtos a uma matéria-prima (relação ManyToOne) |
| 🔍 **Filtro por Matéria-Prima** | Filtragem de produtos por matéria-prima vinculada |
| 🔔 **Feedback Visual** | Notificações de sucesso e erro com `react-toastify` |
| ⏳ **Indicadores de Carregamento** | Spinners durante requisições assíncronas com `react-spinners` |
| 🪟 **Modais de Formulário** | Abertura de formulários em modal com `reactjs-popup` |

---

## 🖼️ Screenshots

> _Em breve: adicione aqui capturas de tela das páginas Home, Produtos e Matérias-Primas._

---

## 🛠️ Stack Tecnológica

### Frontend

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://reactjs.org/) | 19.2 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 7.x | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilização utilitária |
| [React Router DOM](https://reactrouter.com/) | 7.x | Roteamento SPA |
| [Axios](https://axios-http.com/) | 1.x | Requisições HTTP |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.x | Notificações |
| [Reactjs Popup](https://react-popup.elazizi.com/) | 2.x | Modais e popups |
| [React Spinners](https://www.davidhu.io/react-spinners/) | 0.17 | Indicadores de carregamento |
| [Phosphor Icons](https://phosphoricons.com/) | 2.x | Ícones |

### Backend

| Tecnologia | Uso |
|---|---|
| [NestJS](https://nestjs.com/) | Framework Node.js |
| [TypeORM](https://typeorm.io/) | ORM para banco de dados |
| [PostgreSQL](https://www.postgresql.org/) | Banco de dados relacional |
| TypeScript | Tipagem estática |

---

## 🗂️ Modelo de Dados

```
RawMaterial
├── id          (number)
├── name        (string)
├── description (string)
└── products    (Product[]) → OneToMany

Product
├── id          (number)
├── name        (string)
├── description (string)
├── price       (number)
├── createdAt   (Date)
└── rawMaterial (RawMaterial) → ManyToOne
```

---

## 📁 Estrutura do Projeto

```
autoflex-react-ts-vite/
├── backend/
│   ├── src/
│   │   ├── raw-materials/       # Módulo de matérias-primas
│   │   ├── products/            # Módulo de produtos
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   ├── products/
│   │   │   │   ├── cardproducts/
│   │   │   │   ├── deleteproducts/
│   │   │   │   ├── formproducts/
│   │   │   │   ├── listproducts/
│   │   │   │   └── modalproducts/
│   │   │   └── rawmaterials/
│   │   │       ├── cardrawmaterial/
│   │   │       ├── delelerawmaterial/
│   │   │       ├── formrawmaterial/
│   │   │       └── listrawmaterial/
│   │   ├── models/
│   │   │   ├── Procucts.ts
│   │   │   └── RawMaterials.ts
│   │   ├── pages/
│   │   │   └── home/
│   │   ├── services/
│   │   │   └── Service.ts       # Axios + endpoints
│   │   ├── utils/
│   │   │   └── ToastAlert.ts    # Helper de notificações
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) em execução

---

### 1️⃣ Backend (NestJS)

```bash
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install
```

Configure as variáveis de ambiente criando um arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=autoflex
PORT=4000
```

```bash
# Inicie o servidor em modo desenvolvimento
npm run start:dev
```

> **Backend disponível em:** `http://localhost:4000`

---

### 2️⃣ Frontend (React + Vite)

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install
```

Configure a URL da API criando um arquivo `.env`:

```env
VITE_API_URL=http://localhost:4000
```

```bash
# Inicie a aplicação em modo desenvolvimento
npm run dev
```

> **Frontend disponível em:** `http://localhost:5173`

---

## 🔌 Endpoints da API

**Base URL:** `http://localhost:4000`

### 🧱 Raw Materials (`/raw-materials`)

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/raw-materials` | Lista todas as matérias-primas |
| `GET` | `/raw-materials/:id` | Busca matéria-prima por ID |
| `POST` | `/raw-materials` | Cria nova matéria-prima |
| `PUT` | `/raw-materials/:id` | Atualiza matéria-prima |
| `DELETE` | `/raw-materials/:id` | Remove matéria-prima |

### 📦 Products (`/products`)

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/products` | Lista todos os produtos |
| `GET` | `/products/:id` | Busca produto por ID |
| `POST` | `/products` | Cria novo produto |
| `PUT` | `/products` | Atualiza produto |
| `DELETE` | `/products/:id` | Remove produto |
| `GET` | `/products/name/:name` | Busca produtos por nome |
| `GET` | `/products/raw-material/:id` | Lista produtos por matéria-prima |

---

## 🧭 Rotas do Frontend

| Rota | Componente | Descrição |
|---|---|---|
| `/` ou `/home` | `Home` | Página inicial com listagem de produtos |
| `/products` | `ListProducts` | Listagem e filtro de produtos |
| `/products/cadastrar` | `FormProducts` | Formulário de criação de produto |
| `/editarproduto/:id` | `FormProducts` | Formulário de edição de produto |
| `/deletarproduto/:id` | `DeleteProducts` | Confirmação de exclusão de produto |
| `/materia` | `ListRawMaterials` | Listagem de matérias-primas |
| `/rawmaterials/cadastrar` | `FormRawMaterials` | Formulário de criação de matéria-prima |
| `/editarrawmaterial/:id` | `FormRawMaterials` | Formulário de edição de matéria-prima |
| `/deletarrawmaterial/:id` | `DeleteRawMaterials` | Confirmação de exclusão de matéria-prima |

---

## 👤 Autor

Desenvolvido por **Assis Pires Neto**

[![GitHub](https://img.shields.io/badge/GitHub-Lancellot-181717?style=flat-square&logo=github)](https://github.com/Lancellot)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-assispiresneto-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/assispiresneto/)
[![Instagram](https://img.shields.io/badge/Instagram-assis.p.n-E4405F?style=flat-square&logo=instagram)](https://www.instagram.com/assis.p.n)

---

## 📄 Licença

Este projeto está sob a licença definida pelo autor. Consulte o repositório para mais detalhes.

---

<div align="center">
  <sub>Feito com ❤️ — Teste Prático Autoflex</sub>
</div>
