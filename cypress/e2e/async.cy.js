describe("async await",()=>{
    it("async await",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should(include, 'Practice Page')
        cy.log("Hello World")
    })
})