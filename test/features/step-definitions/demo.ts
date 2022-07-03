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

/*
    System Requirements
*/

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

/*
    WebInteractions
*/

Given(/^A web page is opened$/, async function() {
    await browser.url('/iframe')
    await browser.setTimeout({implicit: 5000, pageLoad: 2000})
    await browser.maximizeWindow()
})

When(/^Perform WebInteractions$/, async function() {
    // await browser.url('https://www.ebay.com/')
    // await browser.maximizeWindow()
    // const section = await $('(//h2)[9]')
    // await section.scrollIntoView()
    // await browser.pause(2000)
    // await section.click()

    // const searchBar = await $('input[type="text"]')
    // await searchBar.click()
    // await browser.keys(["1", "2", "3"])
    // await browser.pause(2000)
    /* Assert the default selected option */
        // const defOptionEl = await $('#dropdown option[selected=selected]')
        // const defOptionValue = await defOptionEl.getText()
        // chai.expect(defOptionValue).to.equal('Please select an option')

    /* Select by attribute, text, index */
        // const ddEl = await $('#dropdown ')
        // await ddEl.selectByAttribute('value', '2')
        // await ddEl.selectByIndex(1)
        // await ddEl.selectByVisibleText('Option 1')
        // await browser.pause(2000)

    /* Get List of Options */
        // const optionsArr = await $$('#dropdown option')
        // const arr = [];
        // let i = 0;
        // for(let option of optionsArr) {
        //     const text = await option.getText()
        //     arr.push(text)
        //     console.log(`Text #${i++}: ${text}`)
        // }
        // console.log(`<< arr: ${arr}`)
    
    /* Checkboxes */
    /* Assert checkbox is selected */
        // const selectedEl = await $('//form[@id="checkboxes"]/input[2]')
        // const isChecked = await selectedEl.isSelected()
        // chai.expect(isChecked).to.be.true

    /* Unselect selected checkbox */
        // const selectedEl = await $('//form[@id="checkboxes"]/input[2]')
        // if(await selectedEl.isSelected()) {
        //     await selectedEl.click()
        // }
        // const isChecked = await selectedEl.isSelected()
        // chai.expect(isChecked).to.be.false
    /* Select checkbox */
        // const checkbox = await $('//form[@id="checkboxes"]/input[1]')
        // if(!await checkbox.isSelected()) {
        //     await checkbox.click()
        // }
        // const isChecked = await checkbox.isSelected()
        // chai.expect(isChecked).to.be.true

    /* Select all checkboxes */
        // const checkboxEl = await $('//form[@id="checkboxes"]/input[2]')
        // await checkboxEl.click()
        // await browser.pause(2000)
        // const checkboxesArr = await $$('//form[@id="checkboxes"]/input')
        // for(let checkbox of checkboxesArr) {
        //     if(!await checkbox.isSelected()) {
        //         await checkbox.click()
        //     }
        // }
        // await browser.pause(2000)

    /* Windows (tabs) */
        /* Open different windows */
            // await $('//div[@class="example"]/a').click()
            // await $('//div[@id="page-footer"]//a').click()
            // const currTitleWindow = await browser.getTitle()
            // const initialWindowId = await browser.getWindowHandle()
            // console.log(`>> currTitleWindow: ${currTitleWindow}`)

        /* Switch to another window */
            // const arrWindows = await browser.getWindowHandles()
            // let i = arrWindows.length - 1
            // while(i >= 0) {
            //     console.log(`>> windowId: ${arrWindows[i]}`)
            //     await browser.switchToWindow(arrWindows[i])
            //     const winTitle = await browser.getTitle()
            //     i--
            //     if(winTitle === 'Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro') {
            //         break
            //     } 
            // }
            // const mainHeader = await $('<h1>').getText()
            // console.log(`>> titleSite: ${mainHeader}`) 
        /* Switch back to the initial window*/
            // await browser.switchToWindow(initialWindowId)
            // const parentWindowHeader = await $('//div[@class="example"]/h3').getText()
            // console.log(`>> parentWindowHeader: ${parentWindowHeader}`)

        // Window Methods:
            // browser.getWindowHandles()
            // browser.getWindowHandle()
            // browser.switchToWindow(windowID)

        /* Alerts */
        /* Accept the default alert */
            // await $('//div[@class="example"]//button[@onclick="jsAlert()"]').click()
            // if(await browser.isAlertOpen()) {
            //     await browser.acceptAlert()
            // }
        /* Dismiss the alert */
            // await $('//div[@class="example"]//button[@onclick="jsConfirm()"]').click()
            // if(await browser.isAlertOpen()) {
            //     await browser.dismissAlert()
            // }
        /* Retreive alert message and Send message in the alert pop up */
            // await $('//div[@class="example"]//button[@onclick="jsPrompt()"]').click()
            // if(await browser.isAlertOpen()) {
            //     const alertText = await browser.getAlertText()
            //     console.log(`>> alertText: ${alertText}`)
            //     await browser.sendAlertText('checking value 112')
            //     await browser.acceptAlert()
            // }

        /* Alert methods:
            - isAlertOpen()
            - acceptAlert()
            - dismissAlert()
            - getAlertText()
            - sendAlertText()
        */

        /* File uploading */
            // await $('#file-upload').addValue(`${process.cwd()}/data/uploading/dummy.txt`)
            // await $('#file-submit').click()
            // await browser.pause(3000)

        /* Frames */
        /* Typing into the frame */
            // const frameObj = await $('#mce_0_ifr')
            // await browser.switchToFrame(frameObj)
            // await $('#tinymce').setValue('testing purposes for iframes...')
            // const content = await $('body p').getText()
            // console.log(`>> content: ${content}`) 
            
            // await browser.switchToParentFrame()
            // const headerParent = await $('<h3>').getText()
            // console.log(`>> headerParent: ${headerParent}`)

            // await browser.pause(2000)
})