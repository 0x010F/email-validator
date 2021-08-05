# email-validator

Dead simple email validation library made for learning purpose

## Motivation

- Learn how to create a module in Node.js
- Learn how to test your modules using Mocha & Chai
- Learn how to publish a module on npm
- Learn how to use regex

## Installation

```bash
npm install @ppamkcl/email-validator
```

## NPM link

https://www.npmjs.com/package/@ppamkcl/email-validator

## How to use

```js
// import the module
const validator = require("@ppamkcl/email-validator");

// Pass an email to validate function from validator
// returns an error if email is invalid
// returns null if email is valid
const error = validator.validate('example@example.com')
if (error) {
  console.log(error);
} else {
  console.log('Email is valid');
}
```
## Author

Pranjal Alone <pranjalalone@gmail.com>
