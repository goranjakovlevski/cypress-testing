 describe('SEEU Website Tests', () => {

  // Test to check if the home page loads successfully
  it('should load the home page', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.url().should('include', 'seeu.edu.mk');
  });

  // Test to check if the title is correct
  it('should have the correct title', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.title().should('include', 'South East European University');
  });

  // Test to check the navigation bar
  it('should display the navigation bar', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.get('.navbar').should('be.visible');
  });

  // Test to check if the language switcher works
  it('should switch languages', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.get('.language-switcher').click();
    cy.get('.language-options').contains('EN').click();
    cy.url().should('include', '/en');
  });

  // Test to check if the search functionality works
  it('should search for a term', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.get('.search-input').type('academic programs{enter}');
    cy.url().should('include', 'search');
    cy.get('.search-results').should('contain', 'academic programs');
  });

  // Test to check if the "About Us" page loads
  it('should load the About Us page', () => {
    cy.visit('https://www.seeu.edu.mk');
    cy.get('a').contains('About Us').click();
    cy.url().should('include', 'about');
    cy.get('h1').should('contain', 'About Us');
  });

});
