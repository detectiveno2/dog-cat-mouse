function Buffalo(name) {
  this.name = name;
}

Buffalo.prototype.sayHi = function() {
  console.log("He he he he he");
};

Buffalo.prototype.jump = function() {
  console.log("Jump jump jump");
Buffalo.prototype.run = function() {
  console.log("Run run run run");
};

module.exports = Buffalo;
