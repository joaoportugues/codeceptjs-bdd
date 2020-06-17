const { I } = inject();

module.exports = {
	elements : {
		home: 'Home',
		//Or home: '//*[@id="home"]',
		aciveTab: '//li[contains(@class, "active") and ./a/text()="Name"]',
		form: 'Form',
		error: 'Error',
		title: ('UI Testing','a'),
		welcomeMsg: ('Welcome to the Docler Holding QA Department', 'h1'),
		subHeader: ('This site is dedicated to perform some exercises and \
		demonstrate automated web testing.', 'p'),
		logo: '//*[@id="dh_logo"]',
	},

	//Methods
	//Read
	readTitle(title) {
		I.see(title);
	},
	readWelcome(welcomeMsg) {
		I.see(welcomeMsg);
	},
	readSubHeader(subHeader) {
		I.see(subHeader);
	},

	//Actions
	clickHome() {
		I.click(this.elements.home);
	}, 	
	clickForm() {
		I.click(this.elements.form);
	},
	clickError() {
		I.click(this.elements.error);
	}
}