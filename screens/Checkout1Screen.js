import Actions from '../API/Actions'

export default new class Checkout1Screen extends Actions {
    constructor() {
        super()
    }
    //Declaration of locators in the screen
    get fullNameField() { return 'android= new UiSelector().descriptionContains("Full Name* input field")' }
    get fullNameField() { return '~Full Name* input field' }
    get address1Field() { return '~Address Line 1* input field' }
    get address2Field() { return '~Address Line 2 input field' }
    get cityField() { return '~City* input field' }
    get regionField() { return '~State/Region input field' }
    get zipCodeField() { return '~Zip Code* input field' }
    get countryField() { return '~Country* input field' }
    get paymentButton() { return '~To Payment button' }

    async fillShippingForm() { //Fill out the personal information of the buyer
        await this.writeOnElement(this.fullNameField, process.env.NAME)
        await this.writeOnElement(this.address1Field, process.env.ADDRESS1)
        await this.writeOnElement(this.address2Field, process.env.ADDRESS2)
        await this.writeOnElement(this.cityField, process.env.CITY)
        await this.writeOnElement(this.regionField, process.env.REGION)
        await this.writeOnElement(this.zipCodeField, process.env.ZIP_CODE)
        await this.writeOnElement(this.countryField, process.env.COUNTRY)
    }

    async tapOnPayment() { //Tap on the pay button
        await this.tapElement(this.paymentButton)
    }
}
