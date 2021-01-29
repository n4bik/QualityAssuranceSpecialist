describe('User can upload music file', () => {
    it('Create new beat', () => {
        cy.visit('http://localhost:4200/beats')
        cy.contains('New Beat')
            .click()
        cy.get("#creatorFirstName")
            .type("Tomasz")
        cy.get("#creatorLastName")
            .type("Buga")
        cy.get('#1stNextButton')
            .click()
        cy.get("#beatName")
            .type("Adrift")
        cy.get("#description")
            .type("Pretty nice vibe")
        cy.get('#2ndNextButton')
            .click()
        cy.get('#saveBeatButton')
            .click()
        cy.contains('Adrift')
            .click()
        cy.contains('Edit')
            .click()
        cy.contains('Files Management')
            .click()

        const fileName = 'Adrift.mp3';

        cy.fixture(fileName, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get("input[type='file']").attachFile({
                    fileContent,
                    fileName,
                    mimeType: 'audio/mpeg',
                    encoding: 'binary'
                })
            })

        cy.contains("Upload")
            .click()
        cy.reload()
        cy.contains('Files Management')
            .click()
        cy.contains("Delete")
            .click()
    })
})