import 'cypress-file-upload';
describe("File Upload", ()=>{
    beforeEach("Webiste login",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
    })
    it("Single File Upload",()=>{
        cy.get('#file-upload').attachFile('BHA.pdf')
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')
    })
    it("Multiple File Upload",()=>{
        cy.get('#file-upload').attachFile(['BHA.pdf','Fathima-Cypress-5.1.docx'])
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')
    })













})