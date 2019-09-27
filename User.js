'use script';

export default class User {
   constructor(name){
      this.name = name;
   }

   seyHi() {
      console.log(NODE_ENV);
      console.log(`Hi, a'm ${this.name}!!!! NODE_ENV = ${NODE_ENV}`)
   }
}

