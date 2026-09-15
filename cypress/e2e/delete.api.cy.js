describe('Deletar dispositivos', () => {

  it('Deletar um  dispositivo', () => {
    // Criando um dispositivo para deletar
    const body = {
      "name": "xiaome redime 9S",
      "data": {
        "year": 2026,
        "price": 1500.00,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
    cy.request({
      method: 'POST',
      url: 'https://api.restful-api.dev/objects/',
      failOnStatusCode: false,
      body: body
    }).as('postResponseResult')

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)



cy.request({
        method: 'DELETE',
        url: `https://api.restful-api.dev/objects/${response.body.id}`,
        failOnStatusCode: false
}).as('deleteResponseResult')
      
      cy.get('@deleteResponseResult').then((responseDel) => {
        console.log('Status:', responseDel.status)
        expect(responseDel.status).equal(200)
        expect(responseDel.body.message).equal(`Object with id = ${response.body.id} has been deleted.`)
      })

      
    })
  })  

  const idInesistente = 'jksdbshcjsbcjknjk'

  it('Deletar um  dispositivo inexistente', () => {
  cy.request({
        method: 'DELETE',
        url: `https://api.restful-api.dev/objects/${idInesistente}`,
        failOnStatusCode: false
}).as('deleteResponseResult')
      
      cy.get('@deleteResponseResult').then((responseDel) => {
        console.log('Status:', responseDel.status)
        expect(responseDel.status).equal(404)
        expect(responseDel.body.error).equal(`Object with id = ${idInesistente} doesn't exist.`)
      })

      
    })
  })
