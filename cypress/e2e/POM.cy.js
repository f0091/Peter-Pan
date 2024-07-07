import orangelogin from "../PageObjects/loginPage"

describe("POM",()=>{

    //using POM
    it("Login with POM", ()=>{
       

            let ln = new orangelogin();
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            ln.Set_username("users");
            ln.Set_password("123456");
            ln.Entersubmit();
            
        })
        
    
        })

    