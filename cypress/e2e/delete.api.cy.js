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
    cy.criarDisposiivoParaDeletar(body)

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)

cy.deletarDispositivoCriado(response.body.id)
      
      cy.get('@deleteResponseResult').then((responseDel) => {
        console.log('Status:', responseDel.status)
        expect(responseDel.status).equal(200)
        expect(responseDel.body.message).equal(`Object with id = ${response.body.id} has been deleted.`)
      }) 
    })
  })  

  const idInesistente = 'jksdbshcjsbcjknjk'

  it('Deletar um  dispositivo inexistente', () => {
  cy.deletarDispositivoInexistente(idInesistente)
      
      cy.get('@deleteResponseResult').then((responseDel) => {
        console.log('Status:', responseDel.status)
        expect(responseDel.status).equal(404)
        expect(responseDel.body.error).equal(`Object with id = ${idInesistente} doesn't exist.`)
      })   
    })
  })
