// Podemos utilizar assim e de outra forma.

/*function printName(name) {
    console.log(name)
}

const lastName = 'Macedo'

module.exports = {printName, lastName}*/

exports.printName = (name) => {
    console.log(name)
}

exports.lastName = 'Macedo'