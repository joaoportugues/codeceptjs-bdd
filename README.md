# Codeceptjs Testing Framework
> Simple tests in codeceptj using BDD


## Installation

OS X & Linux:

```sh
npm install codeceptjs puppeteer --save-dev

```

```sh
npm install codeceptjs-resemblehelper --save
```

```sh
npm install codeceptjs-http --save
```

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

## Usage example

Write Gherkin scenarios in features/basic.feature

And generate the respective steps using from the project root folder:

```sh
npx codeceptjs gherkin:snippets
```

Generate sample page object file
```sh
npx codeceptjs gpo
```

To run:
To see not only the business steps but the actual performed steps use the --debug flag:
```sh
npx codeceptjs run --steps
```

By using the `debug` flag you can see the execution of step definitions and it is very useful for debugging purposes.
```sh
npx codeceptjs run --debug
```

To run only features use --features option:
```sh
npx codeceptjs run --features
```

You can run a specific feature file by its filename or by grepping by name or tag.
