describe("Fixtures suite", ()=>{

    //direct access
   /*it.only("FixtureDemoTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture('orange.json').then((data)=>{

        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get(".oxd-button").click()
        cy.get(".oxd-main-menu-item").eq(1).should('have.text',data.expected)

        })
        

    }) */

    //access through hooks - for multiple it blocks
    let testdata;
    before(()=>{
        cy.fixture('orange').then((data)=>{
            testdata = data;
        })
    })

    it("Fixture_hooks", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(testdata.username)
        cy.get("input[placeholder='Password']").type(testdata.password)
        cy.get(".oxd-button").click()
        cy.get(".oxd-main-menu-item").eq(1).should('have.text',testdata.expected)
    
    })
})