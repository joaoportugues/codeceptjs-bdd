const { I } = inject();
const landingPage = require('../pages/landingPage');
const formPage = require('../pages/formPage');
const helloPage = require('../pages/helloPage');
const errorPage = require('../pages/errorPage');
const topMenu = require('../pages/topMenu');


Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

Then('user navigates to {string}', (menuOption) => topMenu.clickMenu(menuOption));

Then('user reads title {string}', (expectedTitle) => landingPage.assertUiTesting(expectedTitle));

Then('user sees {string} button is active', (button) => topMenu.assertTabActive(button));

Then('user sees company logo', () => landingPage.assertLogo);

Then('user sees {string} with format {string}', (text, tag) => landingPage.readText (text, tag));

//Then('user sees {string} type {string}', () => );
