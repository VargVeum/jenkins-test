describe('template spec', () => {
  it('1', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('contain', 'https://example.cypress.io')
  })
  it('2', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('contain', 'https://example.cypress.io')
  })
  it('3', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('contain', 'https://example.cypress.io')
  })
  it('4', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('contain', 'https://examplessss.cypress.io')
  })
})