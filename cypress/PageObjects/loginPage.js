class orangelogin
{
      constructor(){
        this.username = "input[placeholder='Username']";
        this.password = "input[placeholder='Password']";
        this.submitbtn= ".oxd-button";
    }
    Set_username(userN){
        cy.get(this.username).type(userN)
    }
    Set_password(pwd){
        cy.get(this.password).type(pwd)
    }
    Entersubmit(){
        cy.get(this.submitbtn).click()
    } 

    // combined method
   /*  LoginNew(username,password){
        this.Set_username(username)
        this.Set_password(password)
        this.submitbtn()
    } */
}

export default orangelogin