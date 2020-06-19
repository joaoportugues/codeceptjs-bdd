const { I } = inject();
const mainPage = require('../pages/mainPage');
const formPage = require('../pages/formPage');
const fs = require('fs');
const path = require('path');
const directory = 'reports';

//Cleaning up reports folder before starting tests.
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});

Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

When('user navigates to {string}', (menuOption) => mainPage.clickMenu(menuOption));

Then('user reads title {string}', (expectedTitle) => mainPage.assertUiTesting(expectedTitle));

Then('user sees {string} button is active', (button) => mainPage.assertTabActive(button));

Then('user sees company logo', () => mainPage.assertLogo());

Then('user sees {string} with format {string}', (text, tag) => mainPage.readText (text, tag));

Then('user sees {string} element of type {string}', (amount, type) => formPage.countElements(amount, type));

When('user types {string} and click submit', (name) => formPage.writeNameAndSubmit(name));

Then('user has greeting {string}', (expectedText) => formPage.assertWelcome(expectedText));

Then('user gets {string} HTTP response code', (errorCode) => mainPage.clickErrorMenu(errorCode));
