/// <reference types="Cypress" />
describe("Check project", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("load project", () => {
    cy.viewport("ipad-2");
    cy.get("[data-cy=nav_button]").click();
    cy.get(`[href="#project"]`).click();
    cy.url().should("eq", "http://localhost:8000/#project");
    cy.get("#project > .container > .section_heading").should("be.visible");
    cy.get("#project > .container > .section_sub").should("be.visible");

    cy.get(".my-masonry-grid").should("be.visible");
    cy.get(".my-masonry-grid").children().should("have.length", 3);
    cy.get(".my-masonry-grid > :nth-child(1)")
      .children()
      .should("have.length", 2);
    cy.get(".my-masonry-grid > :nth-child(2)")
      .children()
      .should("have.length", 2);
    cy.get(".my-masonry-grid > :nth-child(3)")
      .children()
      .should("have.length", 2);
  });
  it("load project iphone", () => {
    cy.viewport("iphone-8");
    cy.get("#project > .container > .section_heading").should("be.visible");
    cy.get("#project > .container > .section_sub").should("be.visible");

    cy.get(".my-masonry-grid").should("be.visible");
    cy.get(".my-masonry-grid").children().should("have.length", 2);
    cy.get(".my-masonry-grid > :nth-child(1)")
      .children()
      .should("have.length", 3);
    cy.get(".my-masonry-grid > :nth-child(2)")
      .children()
      .should("have.length", 3);
  });
});
