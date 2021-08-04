const validate = require('../').validate;
const expect = require('chai').expect;

const emails = [
    '',
    'pranjal',
    '1pranjal@gmail.com',
    'Pranjal@gmail.com',
    'pranjal@gmail',
    'pranjal123@gmail.com',
    'pranjal@gmail.com',
    'test@test.com',
    'ok@GMAIL.com'
]

describe('Email validation', function () {
    it('Email validation should fail', function () {
        // console.log(should(validate(emails[0])))
        expect(validate(emails[0])).to.be.a('string');
    });

    it('Email validation should fail', function () {
        // console.log(should(validate(emails[0])))
        expect(validate(emails[1])).to.be.a('string');
    });

    it('Email validation should fail', function () {
        // console.log(should(validate(emails[0])))
        expect(validate(emails[0])).to.be.a('string');
    });

    it('Email validation should pass', function () {
        // console.log(should(validate(emails[0])))
        expect(validate(emails[5])).to.be.null;
    });

    it('Email validation should fail', function () {
        // console.log(should(validate(emails[0])))
        expect(validate(emails[8])).to.be.a('string');
    });
});


