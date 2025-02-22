// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// cypress/support/commands.js

Cypress.Commands.add("Credentials", () => {
  const username = Cypress.env("USERNAME"); // Passed from GitHub Actions
  const password = Cypress.env("PASSWORD"); // Passed from GitHub Actions
  const appURL = Cypress.env("APPLICATION_URL"); 

  
  cy.visit(appURL);
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#btn-submit").click();
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle specific errors here
  if (err.message.includes('Cannot redefine property: cookie')) {
    // Prevent Cypress from failing the test
    return false;
  }
  
  // If you want to suppress all uncaught exceptions, return false unconditionally
  return false;
});

Cypress.Commands.add('ContactsTab', () => {
  return cy.get('li#module-influencer')
});