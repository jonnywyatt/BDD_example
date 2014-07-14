BDD example
==========================

* basic RequireJS config including jQuery and a sample module
* a test spec for the module
* installer for a test setup using Karma, Mocha, Sinon and Chai

To install the test components just open a command prompt in the top level folder of the project and run:
```
npm install
```

## Running the tests

```sh
$ ./node_modules/karma/bin/karma start test/karma.conf.js --single-run
```