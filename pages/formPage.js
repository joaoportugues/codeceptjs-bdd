const { I } = inject();
const assert = require('assert');


module.exports = {
	elements : {
		nameField: 'myName',
		//or xpath nameField: '//*[@id="hello-input"]'
		okBtn: 'Go!',
		helloMsg: '//*[@id="hello-text"]'
	},

	//Methods
	//Actions
	writeNameAndSubmit(value) {
		I.fillField(this.elements.nameField, value);
		//Assert name is writen 
		I.seeInField(this.elements.nameField, value);
		I.click(this.elements.okBtn);
	}
}