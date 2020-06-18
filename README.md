# Codeceptjs Testing Framework
> Simple tests in codeceptj using BDD

```sh
npm -v
6.14.4

node -v
v12.18.0
```

## Installation

OS X & Linux:

Codeceptjs and Puppeteer

```sh
npm install codeceptjs puppeteer --save-dev

```

Visual testing

```sh
npm install codeceptjs-resemblehelper --save
```

Reports

```sh
npm install -g allure-commandline --save-dev
```

clone this project and from the terminal
```sh
cd codeceptjs-bdd
```

## Usage example

To run:
from root folder of the project:
```sh
npx codeceptjs run
```
and
```sh
allure serve reports
```
to get the testing report which is enabled by default


You can use tags as well:
```sh
npx codeceptjs run --grep "@REQ-UI-01"
```
You can run a specific feature file by its filename or by grepping by name or tag.

Running headless by default - to enable visualization change condecept.conf.js

```sh
Puppeteer: {
      url: 'http://uitest.duodecadits.com',
      show: true,
      windowSize: '1200x900'

	  ...
```

## Detailed project creation and helper tools

```sh
mkdir your_dir_name
cd your_dir_name
```

```sh
npx codeceptjs init
```

Choose Helper Puppeteer - all rest default

Configure website undertest in the file condecept.conf.js

```sh
npx codeceptjs gherkin:init
```

Write Gherkin scenarios in features/your_feature.feature

And generate the respective steps using from the project root folder:

```sh
npx codeceptjs gherkin:snippets
```

Generate sample page object file
```sh
npx codeceptjs gpo
```

Happy testing!!!
