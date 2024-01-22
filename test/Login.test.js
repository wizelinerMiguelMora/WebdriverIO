import ProductsScreen from '../screens/ProductsScreen'
import LoginScreen from '../screens/LoginScreen'
import { CREDENTIALS } from '../data/LoginData'
import dotenv from 'dotenv'
dotenv.config()

describe('🧪 Test Login features', async () => {

    beforeEach(async () => {
        await driver.reset()
        await ProductsScreen.clickOnBurgerButton()
        await ProductsScreen.clickOnBurgerOptions('LogIn')
    })

    it('TC001 Login using a valid username and password', async () => {
        await LoginScreen.fillLoginForm(CREDENTIALS.USERNAME.VALID, CREDENTIALS.PASSWORD.VALID)
        await expect($(ProductsScreen.backpackItem)).toBeDisplayed() //Assert of the success login
    })

    it('TC002 Login with missing username and password', async () => {
        await LoginScreen.fillLoginForm('', '')
        await expect($(LoginScreen.usernameErrorMessage)).toBeDisplayed() //Assert of the expected message
    })

    it('TC003 Login with valid username but missing password', async () => {
        await LoginScreen.fillLoginForm(CREDENTIALS.USERNAME.VALID, '')
        await expect($(LoginScreen.passwordErrorMessage)).toBeDisplayed() //Assert of the expected message
    })

    it('TC004 Login with missing username but valid password', async () => {
        await LoginScreen.fillLoginForm('', CREDENTIALS.PASSWORD.VALID)
        await expect($(LoginScreen.usernameErrorMessage)).toBeDisplayed() //Assert of the expected message
    })

    it('TC005 Login with locked username', async () => {
        await LoginScreen.fillLoginForm(CREDENTIALS.USERNAME.LOCKED_USER, CREDENTIALS.PASSWORD.VALID)
        await expect($(LoginScreen.lockedMessage)).toBeDisplayed() //Assert of the expected message
    })

    it('TC006 Login with invalid credentials', async () => {
        await LoginScreen.fillLoginForm(CREDENTIALS.USERNAME.INVALID, CREDENTIALS.PASSWORD.INVALID)
        await expect($(LoginScreen.invalidMessage)).toBeDisplayed() //Assert of the expected message
    })

    after(async ()=> {
        await driver.removeApp(process.env.APP_PACKAGE) //Hook to uninstall the app
    })

})
