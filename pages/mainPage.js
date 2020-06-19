const { I } = inject();
const assert = require('assert');
const resemble = require("resemblejs");

module.exports = {
	elements: {
		logo: '//*[@id="dh_logo"]',
	},

	//Methods
	//Read
	clickMenu(menuOption) {
    	I.click(menuOption);
    },

	async clickErrorMenu(errorCode) {
		let logs = await I.grabBrowserLogs();
		//Assert that browser logs have error 404 in them
		assert.equal(JSON.stringify(logs).includes(errorCode), true);
	},

	readText(text, tag) {
		I.see(text, tag);
	},

	//Asserts
	assertTabActive (button){
		I.seeElement('//li[contains(@class, "active") and ./a/text()="' + button +'"]');
	},

	async assertUiTesting(expectedTitle) {
		const currentTitle = await I.grabTitle();
		assert.equal(expectedTitle, currentTitle);
	},

	async assertLogo() {
		I.seeElement(this.elements.logo);
		I.seeVisualDiffForElement(this.elements.logo, "testImage.png", {prepareBaseImage: false, tolerance: 3});		
	},
}