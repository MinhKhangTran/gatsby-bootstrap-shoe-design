/// <reference types="Cypress" />
import { navlinks } from "../../src/navigation.json";
describe("Check if nav toggle in mobile view", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check for toggleable nav in mobile view", () => {
    cy.viewport("iphone-8");
    cy.get("[data-cy=nav_button]").click();
    cy.get("[data-cy=nav_collapse]").should("be.visible");
  });
  context("Check each navlink", () => {
    navlinks.forEach((navlink) => {
      it(`"${navlink.navlink}" should work properly`, () => {
        cy.viewport("iphone-8");
        cy.get("[data-cy=nav_button]").click();
        cy.get(`[href="#${navlink.href}"]`).click();
        cy.url().should("eq", `http://localhost:8000/#${navlink.href}`);
        cy.get("[data-cy=nav_collapse]").should("not.be.visible");
        cy.get(`[href="#${navlink.href}"]`).should("have.class", "active");
        cy.get(`#${navlink.href}`).should("be.visible");
      });
    });
  });
  it("Check if contact button is working", () => {
    cy.viewport("iphone-8");
    cy.get("[data-cy=nav_button]").click();
    cy.get("[data-cy=nav_collapse] > .btn").click();
    cy.url().should("eq", "http://localhost:8000/#contact");
    cy.get("#contact > .section_heading").scrollIntoView();
  });
});
