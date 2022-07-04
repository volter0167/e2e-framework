import { Given } from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^Login to the Inventory$/, async function() {
    // await browser.url('https://www.saucedemo.com')
    // await browser.maximizeWindow()

    // // Retreive list of logins
    // let loginList = await $('#login_credentials').getText()
    // loginList = loginList.replace('Accepted usernames are:\n', '')

    // // Convert logins into a usable formal in array
    // const arrUsers = loginList.split('\n')
    
    // // Retreive list of passwords
    // let passwordSentence = await $('.login_password').getText()
    // const password = passwordSentence.replace('Password for all users:\n', '')
    // console.log(`>> password: ${password}`)

    // // Filling the Usernames and Password fields with valid data
    // const userNameField = await $('input[name="user-name"]')
    // await userNameField.setValue(arrUsers[0])

    // const passwordField = await $('input[name="password"]')
    // await passwordField.setValue(password)

    // // Clicking on the Submit button
    // await $('input[type="submit"]').click()
    // await browser.pause(2000)

    // /* Login with another user through a new session */
    // await browser.reloadSession()
    // await browser.url('https://www.saucedemo.com')

    // await $('input[name="user-name"]').setValue('problem_user')
    // await $('input[name="password"]').setValue('secret_sauce')

    // await $('input[type="submit"]').click()
    // await browser.pause(2000)

    /* refresh the page in try catch block code */
    // await browser.url('https://www.saucedemo.com')
    // await browser.maximizeWindow()

    // try {
    //     await $('input[name="user-nam"]').setValue('problem_user')
    //     await $('input[name="password"]').setValue('secret_sauce')
    //     await $('input[type="submit"]').click()
    // } catch (err) {
    //     console.log('>> Error. Retry again...')
    //     await browser.refresh()
    //     await $('input[name="user-name"]').setValue('problem_user')
    //     await $('input[name="password"]').setValue('secret_sauce')
    
    //     await $('input[type="submit"]').click()
    // }
    // await browser.pause(2000)
    
    /* Back and forward button in browser */
        // await browser.url('https://www.saucedemo.com')
        // await browser.maximizeWindow()
        // await $('input[name="user-name"]').setValue('problem_user')
        // await $('input[name="password"]').setValue('secret_sauce')
        // await $('input[type="submit"]').click()
        // await browser.pause(2000)
        // await browser.back()
        // await browser.pause(2000)
        // await browser.forward()
        // await browser.pause(2000)
})