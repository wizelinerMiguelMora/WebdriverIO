import Actions from '../API/Actions'

export default new class Checkout3Screen extends Actions {
    constructor() {
        super()
    }

    //Declaration of locators in the screen
    get placeOrderButton() { return '~Place Order button' }

    async tapPlaceOrder() { //Tap on place order button
        await this.tapElement(this.placeOrderButton)
    }
}
