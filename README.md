# API RestFull — Testes Automatizados com Cypress

Suíte de testes automatizados de API construída com **Cypress**, cobrindo o ciclo CRUD completo (`GET`, `POST`, `PUT`, `DELETE`) contra a API pública [restful-api.dev](https://restful-api.dev/), usada como ambiente de prática de testes de API.

## 🎯 Objetivo

Validar o comportamento do recurso `/objects` (dispositivos) em cenários de:

- Consulta de um recurso específico
- Cadastro com dados válidos e cenários de borda (campos ausentes/vazios)
- Atualização completa de um recurso
- Exclusão de um recurso existente e de um inexistente

## 🧰 Tecnologias

- [Cypress](https://www.cypress.io/) `^16.0.0`
- JavaScript
- `cy.request()` para chamadas HTTP diretas (testes de API, sem interface)

## 📁 Estrutura do projeto

```
API_RestFull-main/
├── cypress/
│   ├── e2e/
│   │   ├── get.api.cy.js      # GET /objects/{id}
│   │   ├── post.api.cy.js     # POST /objects (casos válidos e de borda)
│   │   ├── put.api.cy.js      # PUT /objects/{id}
│   │   └── delete.api.cy.js   # DELETE /objects/{id}
│   ├── fixtures/
│   │   └── example.json       # fixture padrão do Cypress (não utilizada nos specs)
│   └── support/
│       ├── commands.js        # comandos customizados (não utilizados ainda)
│       └── e2e.js
├── cypress.config.js
├── package.json
└── package-lock.json
```

## ✅ Cobertura de testes

| Spec | Cenários cobertos |
|---|---|
| `get.api.cy.js` | Buscar dispositivo específico por ID e validar corpo da resposta |
| `post.api.cy.js` | Cadastrar dispositivo válido; sem corpo; com nome vazio; sem `year`; sem `price` |
| `put.api.cy.js` | Criar um dispositivo e em seguida atualizá-lo por completo (`PUT`) |
| `delete.api.cy.js` | Criar e excluir um dispositivo existente; tentar excluir um ID inexistente (`404`) |

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado LTS)
- npm

## 📦 Instalação

```bash
git clone <url-do-repositorio>
cd API_RestFull-main
npm install
```

## ▶️ Como executar os testes

O `package.json` ainda não possui um script `test` configurado, então rode o Cypress diretamente:

```bash
# Interface interativa (Test Runner)
npx cypress open

# Modo headless (linha de comando)
npx cypress run
```

> 💡 Sugestão: adicionar ao `package.json` os scripts abaixo para facilitar a execução:
> ```json
> "scripts": {
>   "test": "cypress run",
>   "test:open": "cypress open"
> }
> ```

## ⚠️ Limitações conhecidas

- **Cota da API pública:** a `restful-api.dev` limita o uso da API pública a **50 requisições por dia por usuário/IP**, resetando a cada 24h. Ao atingir o limite, requisições de escrita (`POST`/`PUT`/`DELETE`) podem passar a retornar `405` em vez do corpo esperado — não é falha do teste, é o servidor bloqueando por cota. Evite rodar a suíte completa repetidamente em um curto intervalo de tempo.

## 🗺️ Possíveis melhorias futuras

- [ ] Migrar URLs e IDs fixos para variáveis de ambiente / `cypress.config.js` (`baseUrl`)
- [ ] Criar fixtures reutilizáveis para os payloads de dispositivo
- [ ] Adicionar comandos customizados (ex: `cy.criarDispositivo()`, `cy.excluirDispositivo()`) para reduzir repetição entre specs
- [ ] Configurar scripts de execução no `package.json`
- [ ] Integrar execução em pipeline de CI (GitHub Actions)

## 👤 Autor

Willian — QA Automation, com foco em testes de API (Cypress, Playwright, Robot Framework, Supertest).
