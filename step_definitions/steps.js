const { I } = inject();

Given('the user has browsed to the homepage', () => I.amOnPage ('/'));

Then('user reads title {string}', (title) => {
	I.waitForText(title)
});
