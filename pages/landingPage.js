const { I } = inject();
const assert = require('assert');

module.exports = {
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
	assertLogo() {
		I.see(this.elements.logo);
	},
}