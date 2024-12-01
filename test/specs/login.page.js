import LoginPage from '../pageobjects/login.page.js'


describe('Home Page Application', () => {
    
    it('should successfully, login with email and password valid', async () => {
        //Click Menu Login
        await LoginPage.menuLogin.click()

        //Input Email
        await LoginPage.inputUsername.setValue("automation1@yopmail.com")

        //Input Password
        await LoginPage.inputPassword.setValue("asdfghjkl")

        //Click Button Login
        await LoginPage.btnLogin.click()

        //Verify Message Login Success
        await expect(await LoginPage.msgLogin).toHaveText("You are logged in!")
    })

})