describe('Get All Products List', () => {
  it('Get All Products List', () => {
    cy.request({
      url: 'https://petstore.swagger.io/v2/pet/2',
      followRedirect: false,
       }).then((resp) => {
         cy.log(resp.body)
        expect(resp.body.category.name).to.eq("dog")

    })
  })
})
