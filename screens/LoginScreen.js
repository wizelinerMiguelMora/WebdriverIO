import Actions from '../API/Actions'

export default new class LoginScreen extends Actions {
    constructor() { 
        super()
    }

    //Declaration of locators in the screen
    get usernameField() { return '~Username input field' }
    get passwordField() { return '~Password input field' }
    get loginButton() { return '~Login button' }
    get usernameErrorMessage() { return 'android= UiSelector().text("Username is required")' }
    get passwordErrorMessage() { return 'android= UiSelector().text("Password is required")' }
    get lockedMessage() { return 'android= new UiSelector().text("Sorry, this user has been locked out.")'}
    get invalidMessage() {return 'android= new UiSelector().textContains("Provided credentials")' }

    async fillLoginForm(user, password) { //Fill the login form
        await this.writeOnElement(this.usernameField, user)
        await this.writeOnElement(this.passwordField, password)
        await this.tapElement(this.loginButton)
    }
}
