function Buffalo(name) {
  this.name = name;
}

Buffalo.prototype.sayHi = function() {
  console.log("He he he he he");
};

Buffalo.prototype.run = function() {
  console.log("Run run run run");
};

module.exports = Buffalo;
