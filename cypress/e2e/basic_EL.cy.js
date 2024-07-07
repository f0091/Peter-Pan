
describe('Web elements test suite', ()=>{
    it.only('Assertions', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //asserting title
        cy.title().should('include', 'Practice Page')
        //radio button
        cy.get('input[value="radio2"]').check().should('be.checked')
        //dynamic drop down
        cy.get('.inputs.ui-autocomplete-input').type('aus')
        //wrapping in jquery
        cy.get('.ui-menu-item div').each(($suggest)=>{
            if($suggest.text().includes('Australia')){
                cy.wrap($suggest).click({force : true})
            }
        })
        cy.get('#autocomplete.inputs.ui-autocomplete-input').should('have.value','Australia')
        //dropdown with select option //static dropdown
        cy.get('#dropdown-class-example').select("option2").should('have.value', "option2")
        //checkbox
        cy.get('label input[type="checkbox"]').check(["option2","option3"]).should('be.checked')
        //hide and show
        cy.get('.inputs.displayed-class').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('.inputs.displayed-class').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('.inputs.displayed-class').should('be.visible')
        //mouse hover
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('contains','#Top')

    })

    it('Child tab suite', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.btn-style.class1.class2').invoke('removeAttr','Target').click()
        cy.origin("https://www.qaclickacademy.com/", ()=>{
            cy.url().should('include','https://www.qaclickacademy.com/')
            cy.wait(5000)
            cy.go('back');

        })
        
    })


    it('Alert message suite', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        //launching an event window alert is an cypress inbuilt event
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.eq('Hello , share this practice page and share your knowledge')
        })
        //launching an event | window confirm is an cypress inbuilt event
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(confirmText)=>{
            expect(confirmText).to.eq('Hello , Are you sure you want to confirm?')
            return false;
        })

    })

})
