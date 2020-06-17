const { I } = inject();
const assert = require('assert');


module.exports = {
	elements : {
		helloMsg: '//*[@id="hello-text"]',
		logo: '//*[@id="dh_logo"]',
	},

	//Methods
	//Read
	readMsg(helloMsg) {
		I.see(this.elements.helloMsg);
	},
	readName(helloMsg) {
		const helloName = I.grabTextFrom(helloMsg);
	},

	//Actions
	clickHome() {

	}
}