exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://uitest.duodecadits.com',
      show: true,
	  browser: 'chrome',
    },
    "ResembleHelper" : {
       "require": "codeceptjs-resemblehelper",
       "screenshotFolder" : "./screenshots/",
       "baseFolder": "./screenshots/base/",
       "diffFolder": "./screenshots/diff/"
     }
  },
  include: {
    I: './steps_file.js',
    Page: './pages/*.js'
  },
    "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    allure: {
      enabled: true,
      outputDir: "./reports"
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-bdd'
}
