const { I } = inject();
const assert = require('assert');

//this is a page fragment, just the top menu
module.exports = {
	//Methods
	//Actions
	clickMenu(menuOption) {
		I.click(menuOption);
	}, 	

	//Asserts
	assertTabActive (button){
		I.seeElement('//li[contains(@class, "active") and ./a/text()="' + button +'"]');

	},
}