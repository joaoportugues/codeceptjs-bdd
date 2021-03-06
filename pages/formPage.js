const { I } = inject();
const assert = require('assert');

module.exports = {
	elements : {
		nameField: 'myName',
		//or xpath nameField: '//*[@id="hello-input"]'
		okBtn: 'Go!',
		helloMsg: '//*[@id="hello-text"]',
		textBox: '//*[@type="text"]',
		submitButton: '//button[@type="submit"]'
	},

	//Methods
	//Actions
	async countElements(amount, type) {
		var count = 0;
		//can be used to handle different spellings too
		switch (type.toLowerCase()) {
			case 'input box': count = await I.grabNumberOfVisibleElements(this.elements.textBox);
				break;
			case 'submit': count = await I.grabNumberOfVisibleElements(this.elements.submitButton);
				break;
		}
		assert.equal(amount, count);
	},

	writeNameAndSubmit(name) {
		I.fillField(this.elements.nameField, name);
		//Assert name is writen 
		I.seeInField(this.elements.nameField, name);
		I.click(this.elements.okBtn);
	},

	//Assert
	async assertWelcome(expectedText) {
		const currentText = await I.grabTextFrom(this.elements.helloMsg);
		assert.equal(currentText, expectedText);
	}
}