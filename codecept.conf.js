exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://uitest.duodecadits.com',
      show: true,
      windowSize: '1200x900'
    },
  "HTTP" : {
       "require": "codeceptjs-http",
       "endpoint": "http://localhost:8080"
     },
  "ResembleHelper" : {
       "require": "codeceptjs-resemblehelper",
       "screenshotFolder" : "./tests/output/",
       "baseFolder": "./tests/screenshots/base/",
       "diffFolder": "./tests/screenshots/diff/"
     }
  },
  include: {
    I: './steps_file.js',
    Page: './pages/*.js'
  },
  mocha: {},
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
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-bdd'
}
