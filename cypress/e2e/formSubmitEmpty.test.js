/// <reference types="Cypress" />
describe("Form submit with empty inputs test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check if feedback appears when submitting empty inputs", () => {
    cy.contains("Submit").click();
    cy.contains("Please provide a message").should("be.visible");
  });
});
