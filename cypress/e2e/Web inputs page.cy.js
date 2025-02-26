
beforeEach(()=> {
  cy.visit('/inputs')
})

describe('first test', () => {
  it('web inputs page', () => {
    cy.get('[name="input-number"]').type("1")
    cy.get('[name="input-text"]').type("Mahmoud2020")
    cy.get('[name="input-password"]').type("2020")
    cy.get('[name="input-date"]').type("1993-09-29")
    cy.contains("button", "Display Inputs").should("be.visible").wait(3000).click()
    cy.contains("button","Clear Inputs").should("be.visible").click()
    

  })
})