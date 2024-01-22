import Actions from '../API/Actions'

export default new class ProductsScreen extends Actions {
    constructor() { 
        super()
    }

    //Declaration of locators in the screen
    get burguerButton() { return 'android= new UiSelector().className("android.widget.ImageView").instance(0)' }
    get burgerOptions() { return ['~menu item catalog',
                                  '~menu item webview',
                                  '~menu item qr code scanner',
                                  '~menu item geo location',
                                  '~menu item drawing',
                                  '~menu item about',
                                  '~menu item reset app',
                                  '~menu item biometrics',
                                  '~menu item log in',
                                  '~menu item log out',
                                  '~menu item api calls',
                                  '~menu item bot video'] }
    get backpackItem() { return 'android= new UiSelector().textContains("Backpack")' }
    async clickOnBurgerButton() { //Tap on the burger button
        await this.tapElement(this.burguerButton)
    }

    async clickOnBurgerOptions(menu) { //Function to select any option of the burger button
        switch (menu) {
            case 'Catalog':
                await this.tapElement(this.burgerOptions[0])
                break;
            case 'Webview':
                await this.tapElement(this.burgerOptions[1])
                break;
            case 'QR':
                await this.tapElement(this.burgerOptions[2])
                break;
            case 'Geo Location':
                await this.tapElement(this.burgerOptions[3])
                break;
            case 'Drawing':
                await this.tapElement(this.burgerOptions[4])
                break;
            case 'About':
                await this.tapElement(this.burgerOptions[5])
                break;
            case 'Reset':
                await this.tapElement(this.burgerOptions[6])
                break;
            case 'FingerPrint':
                await this.tapElement(this.burgerOptions[7])
                break;
            case 'LogIn':
                await this.tapElement(this.burgerOptions[8])
                break;
            case 'LogOut':
                await this.tapElement(this.burgerOptions[9])
                break;
            case 'Api Calls':
                await this.tapElement(this.burgerOptions[10])
                break;
            case 'Video:':
                await this.tapElement(this.burgerOptions[11])
                break;
            default:
                break;
        }
    }

    async selectBackpack() { //Select the backpack producto of the catalog
        await this.tapElement(this.backpackItem)
    }
}
