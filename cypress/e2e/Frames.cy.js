/// <reference types="cypress-iframe" />
import ('cypress-iframe')

describe("Handling frame", ()=>{
    it("Approach 1", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('iframe') //loads the frame
        cy.iframe().find("a[href='mentorship']").eq(1).click({force: true})
        

    })


})