import { Given } from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^Login to the Inventory$/, async function() {
    await browser.url('https://www.saucedemo.com')
    await browser.setTimeout({implicit: 5000, pageLoad: 2000})
    await browser.maximizeWindow()

    // Retreive list of logins
    let loginList = await $('#login_credentials').getText()
    loginList = loginList.replace('Accepted usernames are:\n', '')

    // Convert logins into a usable formal in array
    const arrUsers = loginList.split('\n')
    
    // Retreive list of passwords
    let passwordSentence = await $('.login_password').getText()
    const password = passwordSentence.replace('Password for all users:\n', '')
    console.log(`>> password: ${password}`)

    // Filling the Usernames and Password fields with valid data
    const userNameField = await $('input[name="user-name"]')
    await userNameField.setValue(arrUsers[0])

    const passwordField = await $('input[name="password"]')
    await passwordField.setValue(password)

    // Clicking on the Submit button
    await $('input[type="submit"]').click()
    await browser.pause(2000)
})