const { I } = inject();
const assert = require('assert');

//this is a page fragment, just the top menu
module.exports = {
	//Methods
	//Actions
	clickMenu(menuOption) {
		I.click(menuOption);
	}, 	

	async clickErrorMenu(errorCode) {
		let logs = await I.grabBrowserLogs();
		//Assert that browser logs have error 404 in them
		assert.equal(JSON.stringify(logs).includes(errorCode), true);		
	}, 	

	//Asserts
	assertTabActive (button){
		I.seeElement('//li[contains(@class, "active") and ./a/text()="' + button +'"]');

	},
}