function validate (email) {
    if (!email.trim()) {
        return "Email cannot be empty!"
    } else if (!email.includes('@')) {
        return "Email must include @"
    } else if (!email.match(/^[a-z][a-z0-9-]+@[a-z0-9-]+\.[a-z]/)) {
        return "Invalid Email!"
    }
    return null;
}

module.exports = {
    validate
}
