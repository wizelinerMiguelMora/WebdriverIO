import Actions from '../API/Actions'

export default new class CheckoutCompleteScreen extends Actions {
    constructor() {
        super()
    }

    //Declaration of locators in the screen
    get continueShoppingButton() { return '~Continue Shopping button' }
    
}
