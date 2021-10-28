/// <reference types="Cypress" />
describe("Check features", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("load features", () => {
    cy.viewport("ipad-2");
    cy.get("[data-cy=nav_button]").click();
    cy.get(`[href="#features"]`).click();
    cy.url().should("eq", "http://localhost:8000/#features");
    cy.get("#features > .container > .section_heading").should("be.visible");
    cy.get("#features > .container > .section_sub").should("be.visible");

    cy.get("#features > .container > .row").should("be.visible");
    cy.get("#features > .container > .row").children().should("have.length", 4);
  });
});
