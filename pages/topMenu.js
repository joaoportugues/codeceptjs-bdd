const { I } = inject();
const assert = require('assert');

//this is a page fragment, just the top menu
module.exports = {
	elements : {
		uiTesting: ('UI Testing', 'a'),
	},

	//Actions
	clickMenu(menuOption) {
		I.click(menuOption);
	}, 	

	assertTabActive (button){
		I.seeElement('//li[contains(@class, "active") and ./a/text()="' + button +'"]');

	},
}