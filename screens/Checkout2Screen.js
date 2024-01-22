import Actions from '../API/Actions'

export default new class Checkout2Screen extends Actions {
    constructor() {
        super()
    }

    //Declaration of locators in the screen
    get fullNameField() { return '~Full Name* input field' }
    get creditCardField() { return '~Card Number* input field' }
    get expirationDate() { return '~Expiration Date* input field' }
    get cvvCode() { return '~Security Code* input field' }
    get reviewOrderButton() { return '~Review Order button' }

    async fillPaymentForm() { //Fill out the credit card form
        await this.writeOnElement(this.fullNameField, process.env.NAME)
        await this.writeOnElement(this.creditCardField, process.env.CREDIT_CARD)
        await this.writeOnElement(this.expirationDate, process.env.EXPIRATION)
        await this.writeOnElement(this.cvvCode, process.env.CVV)
    }

    async tapOnReviewOrder() { //Tap on the review order button
        await this.tapElement(this.reviewOrderButton)
    }
}
