import { Then } from "@wdio/cucumber-framework";
import chai from 'chai'

Then(/^Validate the page containing (.*)$/, async function(numberOfItems) {
    // Retreive qty of items
    const actualNumberOfItems = await $$('.inventory_item').length
    chai.expect(actualNumberOfItems).to.equal(parseInt(numberOfItems))
})

Then(/^Verify all prices are positive value$/, async function () {
    // Retreive Prices elements
    const pricesEl = await $$('.inventory_item_price')

    // Get prices values and push it to a number array
    const arrPrices = []
    for (let priceItem of pricesEl) {
        let price = await priceItem.getText()
        price = price.slice(1)
        arrPrices.push(parseFloat(price))
    }

    // Compare all prices values on the specific condition
    const actualResult = arrPrices.every(price => price > 0)

    chai.expect(actualResult).to.be.true
})