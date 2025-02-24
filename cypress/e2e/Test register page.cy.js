/// <reference types="cypress" />

describe ('Test register page', () => {
    it ('register page' , () => {
        cy.visit('/register')
        cy.get('[name = "username"]').type("solo2023")
        cy.get('[name="password"]').type("2025555")
        cy.get('[name="confirmPassword"]').type("2025555")
        cy.contains("button","Register").click()
        cy.wait(3000)
        cy.get('[name = "username"]').type("solo2023")
        cy.get('[name="password"]').type("2025555")
        cy.contains("button", "Login").click()
        cy.wait(4000)
        cy.contains("a", "Logout").click()
    })
})