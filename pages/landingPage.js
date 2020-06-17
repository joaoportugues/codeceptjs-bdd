const { I } = inject();

module.exports = {
	elements : {
		title: ('UI Testing','a'),
		welcomeMsg: ('Welcome to the Docler Holding QA Department', 'h1'),
		subHeader: ('This site is dedicated to perform some exercises and demonstrate automated web testing.', 'h2'),
		home: 'Home',
		//Or home: '//*[@id="home"]',
		form: 'Form',
		error: 'Error',
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
		I.click(this.elements.home)
	}, 	
	clickForm() {
		I.click(this.elements.form)
	},
	clickError() {
		I.click(this.elements.error)
	}
}