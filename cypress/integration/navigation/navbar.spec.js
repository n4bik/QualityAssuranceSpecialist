describe('Navbar menu redirects to Activities page', () => {
    it('Redirects to Activities page', () => {
        cy.visit('http://localhost:4200')

        cy.contains('Activities').click()
        cy.url().should('include', '/activities')
    })
})

describe('Navbar menu redirects to Beat-o-matic page', () => {
    it('Redirects to Activities page', () => {
        cy.visit('http://localhost:4200')

        cy.contains('Beat-o-matic').click()
        cy.url().should('include', '/beats')
    })
})

describe('Navbar menu redirects to Bills page', () => {
    it('Redirects to Bills page', () => {
        cy.visit('http://localhost:4200')

        cy.contains('Bills').click()
        cy.url().should('include', '/bills')
    })
})