# AutoFlex — Sistema de Gestão de Produtos e Matérias-Primas

## Descrição do projeto

Aplicação full-stack para gerenciamento de **Produtos** e **Matérias-Primas**, com operações completas de cadastro, consulta, edição e remoção (CRUD).

O sistema permite:

- Gerenciar matérias-primas com nome e descrição.
- Gerenciar produtos com nome, descrição, preço, data de criação e vínculo com matéria-prima.
- Filtrar produtos por matéria-prima.
- Buscar produtos por nome.

Arquitetura composta por:

- **Backend** em NestJS com TypeORM e PostgreSQL.
- **Frontend** em React + TypeScript + Vite, com interface responsiva e feedback visual para ações do usuário.

---

## Tecnologias utilizadas

### Backend

- NestJS
- TypeORM
- PostgreSQL
- TypeScript

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- react-toastify
- reactjs-popup
- react-spinners

---

## Modelo de dados

### Entidade: RawMaterial

- `id`
- `name`
- `description`

### Entidade: Product

- `id`
- `name`
- `description`
- `price`
- `createdAt`
- `rawMaterial` (relação **ManyToOne** com `RawMaterial`)

---

## Como rodar o projeto localmente

## Pré-requisitos

- Node.js 18+
- npm ou yarn
- PostgreSQL em execução

### 1) Backend

1. Acesse a pasta do backend.
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente (exemplo):

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=autoflex
PORT=3000
```

4. Execute o servidor:

```bash
npm run start:dev
```

Backend disponível em: `http://localhost:3000`

### 2) Frontend

1. Acesse a pasta do frontend.
2. Instale as dependências:

```bash
npm install
```

3. Configure a URL da API (exemplo em `.env`):

```env
VITE_API_URL=http://localhost:3000
```

4. Execute a aplicação:

```bash
npm run dev
```

Frontend disponível em: `http://localhost:5173`

---

## Endpoints disponíveis (API)

Base URL: `http://localhost:3000`

### Raw Materials

- `GET /raw-materials` — Lista todas as matérias-primas
- `GET /raw-materials/:id` — Busca matéria-prima por ID
- `POST /raw-materials` — Cria matéria-prima
- `PUT /raw-materials/:id` — Atualiza matéria-prima
- `DELETE /raw-materials/:id` — Remove matéria-prima

### Products

- `GET /products` — Lista todos os produtos
- `GET /products/:id` — Busca produto por ID
- `POST /products` — Cria produto
- `PUT /products/:id` — Atualiza produto
- `DELETE /products/:id` — Remove produto
- `GET /products/name/:name` — Busca produtos por nome
- `GET /products/raw-material/:rawMaterialId` — Lista produtos por matéria-prima

---

## Funcionalidades do frontend

- Páginas:
  - Home
  - ListProducts
  - ListRawMaterials
- CRUD completo de Produtos
- CRUD completo de Matérias-Primas
- Filtro de produtos por matéria-prima
- Feedback visual com notificações (`react-toastify`)
- Modais para ações de formulário/confirmação (`reactjs-popup`)
- Indicadores de carregamento (`react-spinners`)

---

## Estrutura de pastas (exemplo)

```text
autoflex-react-ts-vite/
├── backend/
│   ├── src/
│   │   ├── raw-materials/
│   │   ├── products/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── ListProducts.tsx
│   │   │   └── ListRawMaterials.tsx
│   │   ├── components/
│   │   ├── services/
│   │   ├── routes/
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

> Ajuste os nomes das pastas conforme a organização real do seu repositório.

---

## Screenshots

> _Em breve: adicione aqui capturas de tela das páginas Home, ListProducts e ListRawMaterials._

---

## Licença

Este projeto está sob a licença definida pelo autor/repositório.
