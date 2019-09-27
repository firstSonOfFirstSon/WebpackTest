//export default
'use script';

module.exports = class User {
   constructor(name){
      this.name = name;
   }

   seyHi() {
      console.log(`Hi, a'm ${this.name}!!!!`)
   }
}

