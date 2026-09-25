describe('Cadastro de dispositivos', () => {

  it('Cadastrar dispositivo', () => {
    const cadastroDispositivoBody = require('../fixtures/cadastrarDispositivo_body.json')
    cy.cadastrarDispositivo(cadastroDispositivoBody)

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.name).equal(cadastroDispositivoBody.name)
      expect(response.body.data.year).equal(cadastroDispositivoBody.data.year)
      expect(response.body.data.price).equal(cadastroDispositivoBody.data.price)
      expect(response.body.data["CPU model"]).equal(cadastroDispositivoBody.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(cadastroDispositivoBody.data["Hard disk size"])
    })
  })  

  it('Cadastrar dispositivo sem dados', () => {
    cy.cadastrarDispositivoSemDados()

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(400)
      expect(response.body.error).equal( "Request body is missing")
    })
  })  

  it('Cadastrar dispositivo sem nome', () => {
    const cadastroDispositivoSemNomeBody = require('../fixtures/cadastrarDispositivoSemNome_body.json')
    
    cy.cadastrarDispositivoSemNome(cadastroDispositivoSemNomeBody)

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.name).equal(cadastroDispositivoSemNomeBody.name)
      expect(response.body.data.year).equal(cadastroDispositivoSemNomeBody.data.year)
      expect(response.body.data.price).equal(cadastroDispositivoSemNomeBody.data.price)
      expect(response.body.data["CPU model"]).equal(cadastroDispositivoSemNomeBody.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(cadastroDispositivoSemNomeBody.data["Hard disk size"])
    })
  }) 

  it('Cadastrar dispositivo sem year', () => {
    const cadastroDispositivoSemYearBody = require('../fixtures/cadastraDispositivoSemYear_body.json')
    
    cy.cadastrarDispositivoSemYear(cadastroDispositivoSemYearBody)

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.name).equal(cadastroDispositivoSemYearBody.name)
      expect(response.body.data.price).equal(cadastroDispositivoSemYearBody.data.price)
      expect(response.body.data["CPU model"]).equal(cadastroDispositivoSemYearBody.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(cadastroDispositivoSemYearBody.data["Hard disk size"])
    })
  }) 

  it('Cadastrar dispositivo sem price', () => {
    const cadastrarDispositivoSemPrice = require('../fixtures/cadastrarDispositivoSemPrice_body.json')
    
    cy.cadastrarDispositivoSemPrice(cadastrarDispositivoSemPrice)

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.body.status).equal(200)
      expect(response.body.name).equal(cadastrarDispositivoSemPrice.body.name)
      expect(response.body.data.year).equal(cadastrarDispositivoSemPrice.data.year)
      expect(response.body.data.price).equal(cadastrarDispositivoSemPrice.data.price)
      expect(response.body.data["CPU model"]).equal(cadastrarDispositivoSemPrice.body.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(cadastrarDispositivoSemPrice.body.data["Hard disk size"])
    })
  }) 
})