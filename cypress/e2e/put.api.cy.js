describe('Atualizar dispositivos', () => {

  it('Atualizar um  dispositivo', () => {
    // Criando um dispositivo para atualizar
    const body = {
      "name": "xiaome redime 9S",
      "data": {
        "year": 2026,
        "price": 1500.00,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
    const updatedBody = {
          "name": "xiaomi redmi 10 PRO ",
          "data": {
            "year": 2025,
            "price": 2500.00,
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
        method: 'PUT',
        url: `https://api.restful-api.dev/objects/${response.body.id}`,
        failOnStatusCode: false,
        body: updatedBody
        
      }).as('putResponseResult')

      cy.get('@putResponseResult').then((responsePut) => {
        console.log('Status:', responsePut.status)
        expect(responsePut.status).equal(200)
          expect(responsePut.body.name).equal(updatedBody.name)
          expect(responsePut.body.data.year).equal(updatedBody.data.year)
          expect(responsePut.body.data.price).equal(updatedBody.data.price)
          expect(responsePut.body.data["CPU model"]).equal(updatedBody.data["CPU model"])
          expect(responsePut.body.data["Hard disk size"]).equal(updatedBody.data["Hard disk size"])
      })

      
    })
  })  
})