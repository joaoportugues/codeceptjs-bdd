const { I } = inject();
const assert = require('assert');
const resemble = require("resemblejs");

module.exports = {
	elements: {
		logo: '//*[@id="dh_logo"]',
	},
	//Methods
	//Read
	readText(text, tag) {
		I.see(text, tag);
	},

	//Asserts
	async assertUiTesting(expectedTitle) {
		const currentTitle = await I.grabTitle();
		assert.equal(expectedTitle, currentTitle);
	},
	async assertLogo() {
		I.seeElement(this.elements.logo);
		I.seeVisualDiffForElement(this.elements.logo,"testImage.png", {prepareBaseImage: false, tolerance: 3});		
	},
}