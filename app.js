const User = require('./User');

let someBody = new User('Jack');
debugger;
someBody.seyHi();

module.exports = {
   getTime() {
      return new Date().getTime();
   }
}