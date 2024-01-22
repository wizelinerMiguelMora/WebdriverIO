import Actions from '../API/Actions'

export default new class CartScreen extends Actions {
    constructor() {
        super()
    }

    //Declaration of locators in the screen
    get checkoutButton() { return '~Proceed To Checkout button' }

    async clickOnCheckOut() { //Tap on Checkout button
        await this.tapElement(this.checkoutButton)
    }

}
