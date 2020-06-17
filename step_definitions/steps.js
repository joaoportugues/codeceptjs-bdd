const { I } = inject();
const landingPage = require('../pages/landingPage');

Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

Then('user reads title {string}', (title) => {
	landingPage.checkTitle(title);
	landingPage.clickHome();
});
