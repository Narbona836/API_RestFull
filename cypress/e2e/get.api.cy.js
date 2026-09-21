describe('Cadastro de dispositivos', () => {

  it('Cadastrar dispositivo especifico ', () => {
    const deviceId = '7'
    cy.cadastrarDispositivoEspecifico(deviceId)

    cy.get('@getDeviceResult').then((response) => {
    console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.id).equal(deviceId)
      expect(response.body.name).equal("Apple MacBook Pro 16")
      expect(response.body).not.empty
      expect(response.body.data).not.empty
      expect(response.body.data.year).equal(2019)
      expect(response.body.data.price).equal(1849.99)
      expect(response.body.data["CPU model"]).equal("Intel Core i9")
      expect(response.body.data["Hard disk size"]).equal("1 TB")
    })
  })
})