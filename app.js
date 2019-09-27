import User from './User';

let someBody = new User('Jack');
//debugger;
someBody.seyHi();

export default {
   getTime() {
      return new Date().getTime();
   }
}