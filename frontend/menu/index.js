import './menu.css'

const template = (items = [], title = 'Menu') => 
   `  <ul class="my-Menu">
         <span class="my-Menu__arrow"></span>
         ${title}
         ${items.map( (item) => `<li>${item}</li>`).join('')}       
      </ul>
   `

export default class Menu {
   constructor({items = [], title = 'Menu'} = {}) {
      this.title = title;
      this.items = items;
      this.isOpened = true;
   }
   
   render() {
      let elem = document.createElement('span');
      
      elem.innerHTML = template(this.items, this.title);
      elem.getElementsByClassName('my-Menu__arrow')[0]
      .addEventListener('click', function() {         
         this.isOpened = !this.isOpened;
         elem.firstElementChild.classList.toggle('close');          
      });
      
      return elem;
   }      
}