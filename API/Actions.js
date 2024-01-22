export default class Actions {

    async findElement(selector) { // Build the Selector
        const element = await $(selector)
        return element
    }
    
    async waitForElement(selector) { // Wait an Element to be Displayed with a timeout of 3000ms
        const element = await this.findElement(selector)
        return element.waitForDisplayed({ timeout: 3000 })
    }

    async elementDisplyed(selector) { // Returns a boolen wether the element is getting displayed or not
        const element = await $(selector)
        await this.waitForElement(selector)
        return element.isDisplayed()
    }

    async tapElement(selector) { // Tap an element in the DOM
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.click()
    }

    async writeOnElement(selector, text) { //Write in a element of the DOM
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.clearValue(selector)
        await element.setValue(text)
    }

    async swipeDownToElementAndclick(selector) { //Scroll the screen down untill the element is found and the tap it
        await this.swipeDownToElement(selector)
        await this.tapElement(selector)
    }

    async getElementLocation(selector, axis) { // Get the pixel location of the specific element
        const element = await $(selector)
        await this.elementDisplyed(selector)
        const location = await element.getLocation(axis)
        return location
    }

    async getElementText(selector) { //Get the text of an element
        const element = await $(selector)
        await this.elementDisplyed(selector)
        const text = await element.getText()
        return text
    }

    async swipeDownToElement(selector) { //Scroll the screen with a fix swipe
        const xStart = 360
        const yStart = 700
        const xEnd = 360
        const yEnd = 10
        await this.swipeToElement(selector, xStart, yStart, xEnd, yEnd)
    }

    async swipeToElement(selector, xStart, yStart, xEnd, yEnd) { //Scroll the screen until an element is exisiting
        const element = await $(selector)
        while (await element.isExisting() === false) {
           await this.swipeScreen(xStart, yStart, xEnd, yEnd) 
        }
    }

    async swipeScreen(xStart, yStart, xEnd, yEnd) { //Scroll the screen given the cordinates
        await driver.touchPerform([
            { 
                action: 'press', 
                options: { 
                    x: xStart, 
                    y: yStart 
                }
            },
            { 
                action: 'wait', 
                options: { 
                    ms: 1000
                }
            },
            { 
                action: 'moveTo', 
                options: { 
                    x: xEnd,
                    y: yEnd
                }
            },
            { action: 'release' }
        ])
    }
}