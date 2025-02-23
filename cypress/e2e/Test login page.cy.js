/// <reference types="cypress" />


describe('login test', () => {
    it('login and logout pages', () => {
      cy.visit('/login')
      cy.get('[name="username"]').type("practice")
      cy.get('[name="password"]').type("SuperSecretPassword!")
      cy.wait(3000)
      cy.contains("button","Login").click()
      cy.wait(3000)
      cy.contains("a", "Logout").click()
    })
  })