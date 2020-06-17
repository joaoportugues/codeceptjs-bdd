const { I } = inject();

module.exports = {
	title: 'UI Testing',

	checkTitle(title) {
		I.waitForText(title);
	}
}