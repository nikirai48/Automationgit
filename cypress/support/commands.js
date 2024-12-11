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
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  cy.visit("https://prgloo-dev-admin-01.azurewebsites.net/login/");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#btn-submit").click();
});

