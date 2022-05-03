/// <reference types="cypress" />

// const BASE_URL = 'localhost:3000'

describe('Exercise', () => {
  it('loads', () => {
    /** Your code below */
    cy.visit('/')
    //1. Use cy.visit('/') to go to the app url
    cy.get('.App-link').should('be.visible')
    /** Your code above */
  });

  it('link goes to ultimateqa', () => {
    /** Your code below */
    cy.visit('/')
    cy.get('a.App-link').should('have.attr', 'href').and('equals', 'https://www.ultimateqa.com')
    /** Your code above */
  });

  it('should open link in new tab', () => {
    /** Your code below */
    cy.visit('/')
    cy.get('a.App-link').should('have.attr', 'target').and('equal', '_blank')
    /** Your code above */
  });
});
