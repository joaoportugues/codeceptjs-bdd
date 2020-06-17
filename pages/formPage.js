const { I } = inject();

module.exports = {
	elements : {
		form: 'Form',
		title: ('UI Testing','a'),
		formTitle: ('Simple Form Submission', 'h1'),
		logo: '//*[@id="dh_logo"]',
		nameField: 'myName',
		//or nameField: '//*[@id="hello-input"]'
		okBtn: 'Go!',
		aciveTab: '//li[contains(@class, "active") and ./a/text()="Form"]',
	},

	//other vars
	name: 'Justin Time',

	//Methods
	//Read
	readTitle(title) {
		I.see(title);
	},
	readFormTitle(formTitle) {
		I.see(formTitle);
	},

	//Actions
	clickForm() {
		I.click(this.elements.form);
	},
	writeName(name) {
		I.fillField(this.elements.nameField, this.name);
	},

	//Asserts
	assertTabActive (){
		I.seeElement(this.elements.aciveTab);

	},
	assertName(name){
		I.seeInField(this.elements.nameField, this.name);
	}
}