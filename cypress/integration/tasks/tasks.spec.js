/// <reference types="cypress" />

context('Tasks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to create, update and remove tasks', () => {
    cy.clearLocalStorage().should(ls => {
      // eslint-disable-next-line
      expect(ls.getItem('vieMedAuthToken')).to.be.null;
    });

    cy.findByRole('textbox', { name: /Username/i }).type('CypressUser');
    cy.findByRole('button', { name: /Login/i }).click();

    cy.findByRole('textbox', { name: /Task/i }).type('New Task');
    cy.findByRole('button', { name: /Add/i }).click();

    cy.get('li').should('have.length', 1);

    cy.findByRole('button', { name: /Not Done/i }).click();
    cy.findByText('New Task').should('have.class', 'line-through');

    cy.findByRole('button', { name: /Done/i }).click();
    cy.findByText('New Task').should('not.have.class', 'line-through');

    cy.findByRole('button', { name: /Remove/i }).click();

    cy.get('li').should('have.length', 0);
  });
});
