# API REST — Testes Automatizados com Cypress

Projeto de **automação de testes de API REST** desenvolvido com **Cypress e JavaScript**, utilizando a API pública [RESTful API](https://restful-api.dev/) como ambiente de testes.

A suíte foi desenvolvida com foco na validação de operações HTTP, comportamento dos endpoints, códigos de status e conteúdo das respostas, contemplando operações do ciclo **CRUD**.

---

## 🎯 Objetivo

O objetivo do projeto é aplicar conceitos de **QA Automation e API Testing** na validação do endpoint `/objects`, simulando diferentes comportamentos de uma API REST.

A suíte contempla:

- Validação de consultas de dispositivos;
- Cadastro de dispositivos;
- Validação de cenários com dados ausentes;
- Atualização de dispositivos;
- Exclusão de dispositivos;
- Validação de recursos inexistentes;
- Validação de códigos HTTP;
- Validação do corpo das respostas;
- Criação de dados durante a execução dos testes;
- Uso de `cy.request()` para automação de APIs.

---

## 🧪 Cobertura da Automação

A automação está organizada de acordo com os principais métodos HTTP utilizados pela API.

| Método | Endpoint | Cobertura |
|---|---|---|
| `GET` | `/objects/{id}` | Consulta de dispositivo específico |
| `POST` | `/objects` | Cadastro de dispositivo |
| `POST` | `/objects` | Validação de requisição sem corpo |
| `POST` | `/objects` | Cadastro com nome vazio |
| `POST` | `/objects` | Cadastro sem campo `year` |
| `POST` | `/objects` | Cadastro sem campo `price` |
| `PUT` | `/objects/{id}` | Atualização completa de dispositivo |
| `DELETE` | `/objects/{id}` | Exclusão de dispositivo existente |
| `DELETE` | `/objects/{id}` | Tentativa de exclusão de dispositivo inexistente |

### Validações realizadas

Os testes não se limitam à validação do status HTTP.

Também são realizadas asserções sobre:

- `status code`;
- `id`;
- `name`;
- `year`;
- `price`;
- `CPU model`;
- `Hard disk size`;
- mensagens de erro;
- mensagens de confirmação da API;
- estrutura do objeto retornado.

---

## 🛠️ Tecnologias e Ferramentas

- **JavaScript**
- **Cypress 16**
- **Node.js**
- **npm**
- **Git / GitHub**
- **REST API**
- **HTTP / JSON**

### Principais recursos do Cypress utilizados

- `cy.request()`
- `cy.get()`
- Aliases com `.as()`
- Assertions com `expect()`
- `failOnStatusCode: false`
- `baseUrl`
- Cypress Test Runner
- Execução headless

---

## 🏗️ Estrutura do Projeto

```text
API_RestFull-main/
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── get.api.cy.js
│   │   ├── post.api.cy.js
│   │   ├── put.api.cy.js
│   │   └── delete.api.cy.js
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
