const { I } = inject();
const assert = require('assert');


module.exports = {
	elements : {
		helloMsg: '//*[@id="hello-text"]',
		logo: '//*[@id="dh_logo"]',
	},

	//Assert
	async assertWelcome(result) {
		const currentText = await I.grabTextFrom(this.elements.helloMsg);
		assert.equal(currentText, result);
	}
}