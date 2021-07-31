'use strict';
(function IIFE(){
    const todos = [
        {
            name: 'chocolate',
            quantity: 2,
        },
        {
            name: 'candy',
            quantity: 0,
        },
    ];

    const listEl = document.querySelector('#todo-app .todos');
    const inputEl = document.querySelector('#todo-app input');
    const addButtonEl = document.querySelector('#todo-app .add-button');

    disableButtonIfNoInput();
    addAbilityToAddItems();
    addAbilityToDeleteItems();
    addAbilityToIncreaseQuantity();
    addAbilityToDecreaseQuantity();

    render(todos);
    
    //////
    function render( todos ) {
        const html = todos.map( (todo, index) => {
        return `
            <li>
            <span class="todo" data-index="${index}">${todo.name}</span>
            <span class="delete" data-index="${index}">X</span> 
            <button class="decrease" type="button" data-index="${index}">-</button>
            <span class="todo-quantity" data-index="${index}">${todo.quantity}</span>
            <button class="increase" type="button" data-index="${index}">+</button>
            </li>
        `;

        }).join('');

        // push the html we just generated into the DOM
        // replacing the previous list contents
        listEl.innerHTML = html;

        // set initial disable for button after render
        addButtonEl.disabled = !inputEl.value;

        // Try disable by balue
        let index =0;
        todos.forEach( e => {
            if (e.quantity <= 0){
                let decreaseBtnEl = document.querySelector(`button[data-index="${index}"]`);
                decreaseBtnEl.disabled = true;
            }
            index +=1; 
        })
    };

    function disableButtonIfNoInput() {
        inputEl.addEventListener('input', () => {
          addButtonEl.disabled = !inputEl.value;
        });
    }

    function addAbilityToAddItems() {
        addButtonEl.addEventListener('click', (e) => {
          const newTodo = {
            name: inputEl.value,
            quantity: 0,
          };
          todos.push(newTodo);
          
          inputEl.value = '';
          render(todos);
        });
    }

    function addAbilityToDeleteItems() {
        listEl.addEventListener('click', (e) => {
          if(!e.target.classList.contains('delete')) {
            return;
          }
    
          const index = e.target.dataset.index; 
          todos.splice(index, 1); 
          render(todos);
        });
    }

    function addAbilityToIncreaseQuantity() {
        listEl.addEventListener('click', (e) => {
            if(!e.target.classList.contains('increase')) {
                return;
            }
            
            const index = e.target.dataset.index; 
            todos[index].quantity++;
            render(todos); 
        });
    }

    function addAbilityToDecreaseQuantity() {
        listEl.addEventListener('click', (e) => {
          if(!e.target.classList.contains('decrease')) {
              return;
          }
          
          const index = e.target.dataset.index;
          todos[index].quantity--;
          render(todos);
        });
    }
        
})();