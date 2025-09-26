describe('Create Accommodation Form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog')
    })
  })

  it('should fill and submit the accommodation form successfully', () => {
    cy.get('[data-testid="create-accommodation-form-test-id-field-name-input"]')
      .type('Casa de la Playa')
      .should('have.value', 'Casa de la Playa')

    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-address-input"]'
    )
      .type('Calle Mayor 15, Valencia')
      .should('have.value', 'Calle Mayor 15, Valencia')

    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-description-textarea"]'
    )
      .type(
        'Una casa muy bonita en el centro de Valencia. Tiene tres habitaciones, dos baños y una cocina grande. Perfecta para una familia.'
      )
      .should(
        'have.value',
        'Una casa muy bonita en el centro de Valencia. Tiene tres habitaciones, dos baños y una cocina grande. Perfecta para una familia.'
      )

    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-type-dropdown"]'
    )
      .select('house')
      .should('have.value', 'house')

    cy.wait(5000)
    cy.get('[data-testid="create-accommodation-form-test-id-action-1"]')
      .should('contain', 'Next')
      .should('not.be.disabled')
      .click()

    cy.wait(200)
    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-ownerName-input"]'
    )
      .type('Juan Pérez')
      .should('have.value', 'Juan Pérez')

    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-ownerEmail-input"]'
    )
      .type('juan.perez@gmail.com')
      .should('have.value', 'juan.perez@gmail.com')

    cy.get(
      '[data-testid="create-accommodation-form-test-id-field-ownerPhone-input"]'
    )
      .type('666123456')
      .should('have.value', '666123456')

    cy.wait(5000)
    cy.get('[data-testid="create-accommodation-form-test-id-action-1"]')
      .should('contain', 'Next')
      .should('not.be.disabled')
      .click()

    cy.wait(200)
    cy.get('[data-testid="create-accommodation-form-summary-test-id"]').should(
      'be.visible'
    )

    cy.get(
      '[data-testid="create-accommodation-form-summary-section-title-test-id"]'
    )
      .first()
      .should('contain', 'Accommodation')

    cy.contains('Casa de la Playa').should('be.visible')
    cy.contains('Calle Mayor 15, Valencia').should('be.visible')
    cy.contains('Casa').should('be.visible')

    cy.get(
      '[data-testid="create-accommodation-form-summary-section-title-test-id"]'
    )
      .last()
      .should('contain', 'Owner')

    cy.contains('Juan Pérez').should('be.visible')
    cy.contains('juan.perez@gmail.com').should('be.visible')
    cy.contains('666123456').should('be.visible')

    cy.wait(5000)
    cy.get('[data-testid="create-accommodation-form-test-id-action-2"]')
      .should('contain', 'Submit')
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('The accommodation has been created successfully.')
    })

    cy.get('@consoleLog').should('have.been.called')
    cy.get('@consoleLog').should(
      'have.been.calledWith',
      'Submit payload',
      Cypress.sinon.match({
        name: 'Casa de la Playa',
        address: 'Calle Mayor 15, Valencia',
        description:
          'Una casa muy bonita en el centro de Valencia. Tiene tres habitaciones, dos baños y una cocina grande. Perfecta para una familia.',
        type: 'house',
        ownerName: 'Juan Pérez',
        ownerEmail: 'juan.perez@gmail.com',
        ownerPhone: '666123456'
      })
    )
  })
})
