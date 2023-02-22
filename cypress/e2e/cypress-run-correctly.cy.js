describe('first test', () => {
  it('cypress runs correctly', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('children').click();
    cy.url().should('contains', 'traversal');
  });

  //on met xit si on veut ignorer le test
  /*it('app runs correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type(`Lorem ipsum`);
  })*/
})