/// <reference types="Cypress" />
describe("Check hero", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("load hero", () => {
    cy.viewport("ipad-2");
    cy.get("[data-cy=nav_button]").click();
    cy.get(`[href="#hero"]`).click();
    cy.url().should("eq", "http://localhost:8000/#hero");
    cy.get("h1").should("be.visible");
    cy.get(".col-lg-7 > .lead").should("be.visible");
    cy.get(".button_wrapper > .text-capitalize").should("be.visible");
    cy.get(".hero_wrapper").should("be.visible");
    cy.get(".hero_wrapper").children().should("have.length", 5);
    cy.get(".hero_socials").should("be.visible");
    cy.get(
      ".mt-5 > .image_wrapper > .gatsby-image-wrapper > picture > img"
    ).should("be.visible");
  });
});
