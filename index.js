// const validator = require('./lib');

// const emails = [
//     '',
//     'pranjal',
//     '1pranjal@gmail.com',
//     'Pranjal@gmail.com',
//     'pranjal@gmail',
//     'pranjal@gmail.com'
// ]

// // console.log(validator.validate('1pranjal@gmail.com'))
// emails.forEach(email => {
//     console.log(validator.validate(email))
// })

const validator = require('./lib')

console.log(validator.validate(''))

module.exports = validator;