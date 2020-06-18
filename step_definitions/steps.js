const { I } = inject();
const mainContainer = require('../pages/mainContainer');
const formPage = require('../pages/formPage');
const helloPage = require('../pages/helloPage');
const errorPage = require('../pages/errorPage');
const topMenu = require('../pages/topMenu');


Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

When('user navigates to {string}', (menuOption) => topMenu.clickMenu(menuOption));

Then('user reads title {string}', (expectedTitle) => mainContainer.assertUiTesting(expectedTitle));

Then('user sees {string} button is active', (button) => topMenu.assertTabActive(button));

Then('user sees company logo', () => mainContainer.assertLogo);

Then('user sees {string} with format {string}', (text, tag) => mainContainer.readText (text, tag));

//Then('user sees {string} type {string}', () => );

When('user types {string} and click submit', (value) => formPage.writeNameAndSubmit(value));

Then('user has greeting {string}', (result) => helloPage.assertWelcome(result));
