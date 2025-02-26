/// <reference types="cypress" />
beforeEach(()=> {
    cy.visit("/register")
  })
describe ('Test register page', () => {
    it ('register page' , () => {
        cy.get('[name = "username"]').type("solo884500")
        cy.get('[name="password"]').type("2025555")
        cy.get('[name="confirmPassword"]').type("2025555")
        cy.contains("button","Register").should("be.visible").click()
        cy.get('[name = "username"]').type("solo884500")
        cy.get('[name="password"]').type("2025555")
        cy.contains("button", "Login").should("be.visible").click()
        cy.contains("a", "Logout").should("be.visible").click()
        cy.url().should("include", "/login")
    })
})