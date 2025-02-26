
beforeEach(()=> {
  cy.visit('/login')
})

describe('login test', () => {
    it('login and logout pages', () => {
      cy.get('[name="username"]').type("practice")
      cy.get('[name="password"]').type("SuperSecretPassword!")
      cy.contains("button","Login").should("be.visible").click()
      cy.contains("a", "Logout").should("be.visible").click()
      cy.url().should("include", "/login")
    })
  })