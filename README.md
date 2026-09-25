# 🧪 API REST Automation — Cypress

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Cypress](https://img.shields.io/badge/Cypress-16.x-69D3A7?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)
![API Testing](https://img.shields.io/badge/API-Testing-blue)
![REST](https://img.shields.io/badge/API-REST-orange)
![QA Automation](https://img.shields.io/badge/QA-Automation-purple)

Suíte de **testes automatizados de API REST** desenvolvida com **Cypress e JavaScript**, utilizando a [RESTful API](https://restful-api.dev/) como ambiente de testes.

O projeto foi desenvolvido com foco em **QA Automation**, explorando requisições HTTP, validação de status codes, conteúdo das respostas, cenários positivos e negativos e operações do ciclo **CRUD**.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar, na prática, a aplicação de conceitos de **API Testing e Test Automation** utilizando Cypress.

A automação valida diferentes comportamentos do endpoint `/objects`, incluindo:

- Consulta de dispositivos;
- Cadastro de dispositivos;
- Validação de requisições inválidas;
- Atualização de dispositivos;
- Exclusão de dispositivos;
- Tentativa de exclusão de recursos inexistentes;
- Validação de códigos HTTP;
- Validação do corpo das respostas;
- Validação de mensagens retornadas pela API;
- Criação de dados durante a execução dos testes.

---

## 🧪 Cobertura dos Testes

Atualmente a suíte possui **8 casos de teste automatizados**.

| Método | Endpoint | Cenário | Tipo |
|---|---|---|---|
| `GET` | `/objects/{id}` | Consultar dispositivo específico | Positivo |
| `POST` | `/objects` | Cadastrar dispositivo | Positivo |
| `POST` | `/objects` | Cadastrar sem corpo | Negativo |
| `POST` | `/objects` | Cadastrar sem nome | Validação |
| `POST` | `/objects` | Cadastrar sem `year` | Validação |
| `POST` | `/objects` | Cadastrar sem `price` | Validação |
| `PUT` | `/objects/{id}` | Atualizar dispositivo | Positivo |
| `DELETE` | `/objects/{id}` | Excluir dispositivo | Positivo |
| `DELETE` | `/objects/{id}` | Excluir dispositivo inexistente | Negativo |

> **Observação:** a tabela acima apresenta 9 cenários quando todos os cenários presentes nos arquivos são contabilizados. O projeto contém 1 GET + 4 POST + 1 PUT + 2 DELETE = **8 testes automatizados executáveis**; o POST possui quatro cenários no código atual.

---

## 🔍 Estratégia de Testes

A suíte foi estruturada para validar tanto o **comportamento esperado da API** quanto respostas relacionadas a entradas inválidas.

### Cenários positivos

São utilizados para verificar se a API executa corretamente operações esperadas:

- Consulta de dispositivo;
- Cadastro;
- Atualização;
- Exclusão.

### Cenários negativos

São utilizados para verificar como a API responde a situações inválidas ou inexistentes:

- Requisição POST sem body;
- Exclusão de dispositivo inexistente.

### Validações realizadas

Os testes verificam diferentes propriedades das respostas:

- HTTP Status Code;
- ID do recurso;
- Nome do dispositivo;
- Ano;
- Preço;
- Modelo da CPU;
- Tamanho do disco;
- Mensagens de erro;
- Mensagens de confirmação;
- Estrutura do objeto retornado.

---

# 🏗️ Arquitetura do Projeto

A automação utiliza **Custom Commands** para centralizar as requisições HTTP e **Fixtures** para armazenar dados de teste.

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
│   │   ├── atualizarDispositivo_Body.json
│   │   ├── cadastraDispositivoSemYear_body.json
│   │   ├── cadastrarDispositivo_body.json
│   │   ├── cadastrarDispositivoSemNome_body.json
│   │   ├── cadastrarDispositivoSemPrice_body.json
│   │   └── deletarDispositivo_body.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
