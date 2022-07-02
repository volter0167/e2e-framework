import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^Google page is opened$/, async function() {
    await browser.url('https://www.google.com');
    await browser.pause(7000)
})

When(/^Search by (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: ${searchItem}`)
    const searchBox = await $('input[name="q"]')
    await searchBox.setValue(searchItem)
    await browser.keys('Enter')
})

Then(/^Click on the first link$/, async function() {
    const link = await $('.LC20lb.MBeuO.DKV0Md')
    await link.click()
})

Then(/^The url matches the (.*)$/, async function(expectedUrl) {
    console.log(`>> expectedURL: ${expectedUrl}`);
    const url = await browser.getUrl()
    chai.expect(url).to.equal(expectedUrl)
})

//Second test case

Given(/^Wdio site is opened on the home page$/, async function() {
    await browser.url('https://webdriver.io/')
})

When(/^Click on the Get Started btn$/, async function() {
    const getStartedBtn = await $('.buttons_pzbO [href="/docs/gettingstarted"]')
    await getStartedBtn.click()
})

Then(/^Click on System requirements$/, async function() {
    await browser.setWindowSize(1920, 1080)
    await browser.pause(2000)
    const sysRequirements = await $('ul a[href="#system-requirements"]')
    await sysRequirements.click()
})

Then(/^Verify sentence matches (.*)$/, async function(expectedValue) {
    console.log(`>> expectedValue: ${expectedValue}`)
    const requirement = await (await $('//div[@class="theme-doc-markdown markdown"]/p[15]')).getText()
    chai.expect(requirement).to.include(expectedValue)
})