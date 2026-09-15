describe('Cadastro de dispositivos', () => {

  it('Cadastrar dispositivo', () => {
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

    get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.name).equal(body.name)
      expect(response.body.data.year).equal(body.data.year)
      expect(response.body.data.price).equal(body.data.price)
      expect(response.body.data["CPU model"]).equal(body.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(body.data["Hard disk size"])
    })
  })  

  it('Cadastrar dispositivo sem dados', () => {
    
    cy.request({
      method: 'POST',
      url: 'https://api.restful-api.dev/objects/',
      failOnStatusCode: false,
      
    }).as('postResponseResult')

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(400)
      expect(response.body.error).equal( "Request body is missing")

    })
  })  

  it('Cadastrar dispositivo sem nome', () => {
    const body = {
      "name": " ",
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
      expect(response.body.name).equal(body.name)
      expect(response.body.data.year).equal(body.data.year)
      expect(response.body.data.price).equal(body.data.price)
      expect(response.body.data["CPU model"]).equal(body.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(body.data["Hard disk size"])
    })
  }) 

  it.only('Cadastrar dispositivo sem year', () => {
    const body = {
      "name": "xiaome redime 9S",
      "data": {
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
      expect(response.body.name).equal(body.name)
      expect(response.body.data.price).equal(body.data.price)
      expect(response.body.data["CPU model"]).equal(body.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(body.data["Hard disk size"])
    })
  }) 

  it('Cadastrar dispositivo sem price', () => {
    const body = {
      "name": "xiaome redime 9S",
      "data": {
        "year": 2026,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
    
    cy.request({
      method: 'POST',
      url: 'https://api.restful-api.dev/objects',
      failOnStatusCode: false,
      body: body
    }).as('postResponseResult')

    cy.get('@postResponseResult').then((response) => {
      console.log('Status:', response.status)
      expect(response.status).equal(200)
      expect(response.body.name).equal(body.name)
      expect(response.body.data.year).equal(body.data.year)
      expect(response.body.data.price).equal(body.data.price)
      expect(response.body.data["CPU model"]).equal(body.data["CPU model"])
      expect(response.body.data["Hard disk size"]).equal(body.data["Hard disk size"])
    })
  }) 
})