var Mouse = require('./Mouse.js');
var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var dog1 = new Dog('Tom');
var cat1 = new Cat();
var mouse1 = new Mouse('brown');

cat1.eat(mouse1);
console.log(cat1);

try {
	cat1.eat(dog1);
} catch (error) {
	console.log('Error when cat eat something that\' not mouse!');
}

