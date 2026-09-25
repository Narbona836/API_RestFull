// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('cadastrarDispositivoEspecifico', (deviceId) => { 
    cy.request({
    method: 'GET',
    url: `objects/${deviceId}`,
    failOnStatusCode: false
}).as('getDeviceResult')

})

Cypress.Commands.add('cadastrarDispositivo', (body) => { 
cy.request({
    method: 'POST',
    url: 'objects/',
    failOnStatusCode: false,
    body: body
}).as('postResponseResult')

})

Cypress.Commands.add('cadastrarDispositivoSemDados', () => { 
cy.request({
    method: 'POST',
    url: 'objects/',
    failOnStatusCode: false,
}).as('postResponseResult')
})

Cypress.Commands.add('cadastrarDispositivoSemNome', (body) => {
    cy.request({
        method: 'POST',
        url: 'objects/',
        failOnStatusCode: false,
        body: body
    }).as('postResponseResult')
})

Cypress.Commands.add('cadastrarDispositivoSemYear', (body) => {
    cy.request({
    method: 'POST',
    url: 'objects/',
    failOnStatusCode: false,
    body: body
    }).as('postResponseResult')
})

Cypress.Commands.add('cadastrarDispositivoSemPrice', (body) => {
    cy.request({
        method: 'POST',
        url: 'objects/',
        failOnStatusCode: false,
        body: body
    }).as('postResponseResult')
})

Cypress.Commands.add('criarDispositivoParaUpdate', (body) => {
    cy.request({
    method: 'POST',
    url: 'objects/',
    failOnStatusCode: false,
    body: body
    }).as('postResponseResult')
})

Cypress.Commands.add('atualizarDispositivo', (id, body) => {
cy.request({
        method: 'PUT',
        url: `objects/${id}`,
        failOnStatusCode: false,
        body: body
        
    }).as('putResponseResult')
})

Cypress.Commands.add('criarDisposiivoParaDeletar', (body) => {
    cy.request({
    method: 'POST',
    url: '/objects/',
    failOnStatusCode: false,
    body: body
    }).as('postResponseResult')
})

Cypress.Commands.add('deletarDispositivoCriado', (deviceId) => {
    cy.request({
        method: 'DELETE',
        url: `/objects/${deviceId}`,
        failOnStatusCode: false
}).as('deleteResponseResult')
})

Cypress.Commands.add('deletarDispositivoInexistente', (idInesistente) => {
    cy.request({
        method: 'DELETE',
        url: `objects/${idInesistente}`,
        failOnStatusCode: false
}).as('deleteResponseResult')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })