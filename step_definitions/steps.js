const { I } = inject();
const landingPage = require('../pages/landingPage');
const formPage = require('../pages/formPage');

Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

Then('user reads title {string}', (title, nameField, name) => {
	landingPage.readTitle(title);
	landingPage.clickHome();
	landingPage.clickForm();
	formPage.readTitle(title);
	formPage.writeName(name);
	formPage.assertName(name);
	formPage.assertTabActive();
});
