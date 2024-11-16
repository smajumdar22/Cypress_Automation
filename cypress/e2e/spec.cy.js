describe('template spec', () => {
  it('Visits para bank', () => {
    cy.visit('/')
    // expect(true).to.equal(false)
    cy.contains('Forgot log').click();
    cy.url().should('include','lookup');
    cy.get('#firstName').type('test');
    cy.get('#firstName').should('have.value', 'test');
  })
})