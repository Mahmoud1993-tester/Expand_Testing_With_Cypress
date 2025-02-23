/// <reference types="cypress" />


describe('first test', () => {
  it('web inputs page', () => {
    cy.visit('/inputs')
    cy.wait(3000)
    cy.get("#input-number").type("1")
    cy.get("#input-text").type("Mahmoud2020")
    cy.get("#input-password").type("2020")
    cy.get('[name="input-date"]').type("1993-09-29")
    cy.wait(3000)
    cy.contains("button", "Display Inputs").click()
    cy.wait(2000)
    cy.contains("button","Clear Inputs").click()

  })
})