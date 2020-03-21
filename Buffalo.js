function Buffalo(name) {
  this.name = name;
}

Buffalo.prototype.sayHi = function() {
  console.log("He he he he he");
};

module.exports = Buffalo;
