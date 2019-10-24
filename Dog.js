var chalk = require('chalk');

function Dog(name) {
	this.name = name;
}

Dog.prototype.sayHi = function() {
	console.log('Hi, welcome to my house, I am ' + chalk.red(this.name));
};

module.exports = Dog;