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

  cy.visit("https://gor-pathology.web.app/");
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore the specific error related to Firestore or any other unhandled errors
  if (
    err.message.includes(
      "Function CollectionReference.doc() requires its first argument to be of type non-empty string",
    )
  ) {
    // Returning false will prevent Cypress from failing the test
    return false;
  }
  // Let other errors fail the test
  return true;
});
