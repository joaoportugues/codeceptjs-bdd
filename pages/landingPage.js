const { I } = inject();

module.exports = {
	elements: {
		title: String('UI Testing')
	},
	checkTitle(title) {
		I.waitForText(title);
	}
  // insert your locators and methods here
}
