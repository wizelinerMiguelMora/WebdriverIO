import Actions from '../API/Actions'

export default new class BackpackScreen extends Actions {
    constructor() {
        super()
    }

    //Declaration of locators in the screen
    get blueButton() { return 'android= new UiSelector().descriptionContains("blue circle")' }
    get plusButton() { return 'android= new UiSelector().descriptionContains("counter plus button")' }
    get addToCartButton() { return 'android= new UiSelector().text("Add To Cart")' }
    get cartIcon() { return 'android=new UiSelector().descriptionContains("cart badge")' }

    async changeToBlue() { //Tap on the blue dot to change the color of the product
        await this.tapElement(this.blueButton)
    }

    async addAnItem() { //Tap on the add icon
        await this.tapElement(this.plusButton)
    }

    async addToCart() { //Tap to add the product to the cart
        await this.tapElement(this.addToCartButton)
    }

    async tapOnCartIcon() { //Tap on the Cart Icon
        await this.tapElement(this.cartIcon)
    }
}
