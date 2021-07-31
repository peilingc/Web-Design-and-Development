'use strict';
(function iife() {
    const list = document.querySelector('.names'); 
    const status = document.querySelector('.status');
    const add = document.querySelector('.add'); 
    const toAdd = document.querySelector('.add-name'); 

    let names = {}; 

    const errMsgs = { 
        'duplicate': 'That item already exists',
        'network-error': 'There was a problem connecting to the network, try again',
    };
    
    function disableButtonIfNoInput() {
        toAdd.addEventListener('input', () => {
          add.disabled = !toAdd.value;
        });
    }
    
    function disableDecreaseButton( names ){
        Object.keys(names).forEach(key => {
            if (names[key].quantity <= 0){
                let decreaseBtnEl = document.querySelector(`button[data-index="${key}"]`);
                decreaseBtnEl.disabled = true;
                return;
            }
        })
    }

    function updateStatus( message ) {
        status.innerText = message;
    }
    
    function render( names ) {
        const html = Object.keys(names).map( function (key) {
            return `
                <li>
                    <span class="name" data-index="${key}">${names[key].name}</span>
                    <span class="delete" data-index="${key}">X</span> 
                    <button class="decrease" type="button" data-index="${key}">-</button>
                    <span class="todo-quantity" data-index="${key}">${names[key].quantity}</span>
                    <button class="increase" type="button" data-index="${key}">+</button>
                </li>
            `
        }).join('');
        
        list.innerHTML = html;
        add.disabled = !toAdd.value;
        disableDecreaseButton(names);
        disableButtonIfNoInput();
    };

    function convertError(response) {
        if(response.ok) {
            return response.json();
        }
        return response.json()
        .then( err => Promise.reject(err) );
    }

    list.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete') ) {
        const index = e.target.dataset.index;
        fetch(`/item/${index}`, {
            method: 'DELETE',
        })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( names => {
            render(names);
            updateStatus('');
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
        }
    });

    add.addEventListener('click', () => {
            const name = toAdd.value;
            if(name) {
                fetch(`/item/${name}`, {
                    method: 'POST',
                })
                .catch( () => Promise.reject( { error: 'network-error' }) )
                .then( convertError)
                .then( names => {
                    toAdd.value = '';
                    render(names);
                    updateStatus('');
                })
                .catch( err => {
                    updateStatus(errMsgs[err.error] || err.error);
                });
            }
    });

    list.addEventListener('click', (e) => {
        if(e.target.classList.contains('increase') ) {
        const index = e.target.dataset.index;
        fetch(`/item/${index}`, {
            method: 'PUT',
            body: JSON.stringify({
                change: "increase"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( names => {
            render(names);
            updateStatus('');
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
        }
    });

    list.addEventListener('click', (e) => {
        if(e.target.classList.contains('decrease') ) {
        const index = e.target.dataset.index;
        fetch(`/item/${index}`, {
            method: 'PUT',
            body: JSON.stringify({
                change: "decrease"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( names => {
            render(names);
            updateStatus('');
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
        }
    });
        
    fetch('/item/', {
        method: 'GET',
    })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( names => {
        render(names);
        updateStatus('');
        })
        .catch( err => {
        updateStatus(errMsgs[err.error] || err.error);
        });
})();