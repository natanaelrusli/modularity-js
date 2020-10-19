//  function without parameter
const log = () => {
    console.log("This is from logger.js without parameter")
}

// function with parameter
const logParam = (msg) => {
    console.log(msg)
}

// Returning a value
const getName = () => {
    return 'Koding Next'
}

exports.log = log
exports.logParam = logParam
exports.getName = getName