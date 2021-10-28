/// <reference types="Cypress" />
describe("Check testimonials", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("load testimonials", () => {
    cy.viewport("ipad-2");
    cy.get("[data-cy=nav_button]").click();
    cy.get(`[href="#testimonials"]`).click();
    cy.url().should("eq", "http://localhost:8000/#testimonials");
    cy.get("#testimonials").should(
      "have.css",
      "background-color",
      "rgb(240, 255, 255)"
    );
    cy.get("#testimonials > .container > .section_heading").should(
      "be.visible"
    );
    cy.get("#testimonials > .container > .section_heading").should(
      "be.visible"
    );

    cy.get("#testimonials > .container > .wrapper").should("be.visible");
    cy.get("#testimonials > .container > .wrapper")
      .children()
      .should("have.length", 3);
  });
});
