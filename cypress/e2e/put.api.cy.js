describe('Atualizar dispositivos', () => {

  it('Atualizar um dispositivo', () => {
    // Criando um dispositivo para atualizar
    const cadastrarDispositivo = require('../fixtures/cadastrarDispositivo_body.json')
    const atualizarDispositivoBody = require('../fixtures/atualizarDispositivo_Body.json')
  
    cy.criarDispositivoParaUpdate(cadastrarDispositivo)
    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)

cy.atualizarDispositivo(response.body.id, atualizarDispositivoBody)
      cy.get('@putResponseResult').then((responsePut) => {
        console.log('Status:', responsePut.status)
        expect(responsePut.status).equal(200)
          expect(responsePut.body.name).equal(atualizarDispositivoBody.name)
          expect(responsePut.body.data.year).equal(atualizarDispositivoBody.data.year)
          expect(responsePut.body.data.price).equal(atualizarDispositivoBody.data.price)
          expect(responsePut.body.data["CPU model"]).equal(atualizarDispositivoBody.data["CPU model"])
          expect(responsePut.body.data["Hard disk size"]).equal(atualizarDispositivoBody.data["Hard disk size"])
      })
      
    })
  })  
})