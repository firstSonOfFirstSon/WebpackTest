import User from './User';
import Menu from './Menu'

let someBody = new User('Kate');

someBody.seyHi();
//debugger;
let 
   menu = new Menu({
      title: 'Contact list',
      items: ['Luci 5555555', 'Sara 12467', 'Ameli 653234']
   }),
   elem = document.createElement('h1');

elem.innerHTML = 'Контакты';

document.body.appendChild(elem);

let button =  document.createElement('button');

button.innerHTML = 'Закгрузить контакты';

document.body.appendChild(button);

button.addEventListener('click', () => {
     
   import('./contactList.js').then( contactList => {
      alert( contactList.default.getList() );      
   });  
   
   /*
    require.ensure('./contactList.js', (require) => {     
       alert(  require('./contactList.js').default.getList() );
    });
   */
});

document.body.appendChild(menu.render());