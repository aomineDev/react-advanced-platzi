/* global describe, it, cy */

describe('Mi primer test', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/')
  })

  it('navegamos a un categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registradors ven el formulario de registro al inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })
})
