import BackpackScreen from '../screens/BackpackScreen'
import CartScreen from '../screens/CartScreen'
import Checkout1Screen from '../screens/Checkout1Screen'
import Checkout2Screen from '../screens/Checkout2Screen'
import Checkout3Screen from '../screens/Checkout3Screen'
import CheckoutCompleteScreen from '../screens/CheckoutCompleteScreen'
import LoginScreen from '../screens/LoginScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { CREDENTIALS } from '../data/LoginData'
import dotenv from 'dotenv'
dotenv.config()

describe('🧪 Test Checkout features', async () => { //Namme the test suite

    beforeEach(async () => { //Hook to reset the app like were just installed
        await driver.reset()
    })

    it('TC001 Login using a valid username and password', async () => { //NAme the Test Case
        await ProductsScreen.selectBackpack()
        await BackpackScreen.changeToBlue()
        await BackpackScreen.addAnItem()
        await BackpackScreen.addToCart()
        await BackpackScreen.tapOnCartIcon()
        await CartScreen.clickOnCheckOut()
        await LoginScreen.fillLoginForm(CREDENTIALS.USERNAME.VALID, CREDENTIALS.PASSWORD.VALID)
        await Checkout1Screen.fillShippingForm()
        await Checkout1Screen.tapOnPayment()
        await Checkout2Screen.fillPaymentForm()
        await Checkout2Screen.tapOnReviewOrder()
        await Checkout3Screen.tapPlaceOrder()
        await expect($(CheckoutCompleteScreen.continueShoppingButton)).toBeDisplayed() //Assert of the e2e Flow
    })

    after(async ()=> {
        await driver.removeApp(process.env.APP_PACKAGE) //Hook to uninstall the app
    })

})
