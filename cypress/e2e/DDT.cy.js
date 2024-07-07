describe("Data Driven Testing", ()=>{
    beforeEach(() => {
        // Handle any uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });
    });

    it("DDT", ()=>{
        cy.fixture("orange.json").then((dataz)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            dataz.forEach((userz)=>{
                cy.get("input[placeholder='Username']").type(userz.username)
                cy.get("input[placeholder='Password']").type(userz.password)
                cy.get(".oxd-button").click()

                if(userz.username=="Admin" && userz.password=="admin123")
                    {
                        cy.get(".oxd-main-menu-item").eq(1).should('have.text',userz.expected)
                        cy.get('.oxd-userdropdown-tab').click(); //logout
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //logout
                    }
                    else{
                        cy.get('.oxd-alert-content > .oxd-text').should('have.text',userz.expected)
                    }

                    cy.wait(4000) //wait for logout to complete or else it will through uncaught exception
                
            
            })

        })
    })
})