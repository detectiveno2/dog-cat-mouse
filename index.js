var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var dog1 = new Dog('Tom');
var cat1 = new Cat();

dog1.sayHi();

dog1.eatCat(cat1);

console.log(dog1);
