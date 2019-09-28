import User from './User';

let someBody = new User('Kate');

someBody.seyHi();
//debugger;
let elem = document.createElement('h1');

elem.innerHTML = 'Контакты';

document.body.appendChild(elem);

let button =  document.createElement('button');

button.innerHTML = 'Закгрузить контакты';

document.body.appendChild(button);

button.addEventListener('click', () => {
   /*  
   import('./contactList.js').then( contactList => {
      alert( contactList.default.getList() );      
   });  
   */
   /*
    require.ensure('./contactList.js', (require) => {     
       alert(  require('./contactList.js').default.getList() );
    });
   */
});