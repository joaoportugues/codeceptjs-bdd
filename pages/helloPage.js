const { I } = inject();

module.exports = {
	elements : {
		helloMsg: '//*[@id="hello-text"]',
		logo: '//*[@id="dh_logo"]',
	},

	//Methods
	//Read
	readMsg(helloMsg) {
		I.see(helloMsg);
	},
	readName(helloMsg) {
		const helloName = I.grabTextFrom(helloMsg);
	},

	//Actions
	clickHome() {

	}
}