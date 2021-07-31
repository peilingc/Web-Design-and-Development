import {
    checkLoginStatus,
    performAdd,
    performDelete,
    performLogin,
    performLogout,
    performIncrease,
    performDecrease,
    performRefresh,
  } from './services';
  
  const toAdd = document.querySelector('#todo-app .logged-in input');
  const add = document.querySelector('#todo-app .add-button');
  const list = document.querySelector('#todo-app .todos'); 
  let todos = {}; 
  let curSort ='';
  
  const errMsgs = { 
    'login-required': 'Please log in!',
    'login-invalid' : 'Invalid login, please try again!',
    'network-error': 'There was a problem connecting to the network, try again!',
    'empty-username' : 'Username should not be empty.',
    'disallowed-characters' : 'Username should not contain any disallowed characters.',
    'bad-username' : 'Username cannot be dog.',
    'duplicate' : 'That item already exists.',
    'missing-item' : 'Item does not exist.',
  };
  
  addLogin();
  addLogout();
  addItem();
  deleteItem();
  increaseRanking();
  decreaseRanking();
  ascSort();
  descSort();
  
  checkLoginStatus()
  .then( userInfo => {
    showContent();
    const username = Object.keys(userInfo);
    todos = userInfo[username[0]].todos;
    renderTodos(todos);
  })
  .catch( err => {
    updateStatus(errMsgs[err.error] || err.error);
    showLogin();
  });
  
  function showContent() {
    document.querySelector('#todo-app .login').classList.add('hidden');
    document.querySelector('#todo-app .logged-in').classList.remove('hidden');
  }
  
  function showLogin() {
    document.querySelector('#todo-app .login').classList.remove('hidden');
    document.querySelector('#todo-app .logged-in').classList.add('hidden');
  }

  function updateStatus( message ) {
    document.querySelector('#todo-app .status').innerText = message;
  } 
  
  function addLogin() {
    document.querySelector('#todo-app .login button').addEventListener('click', () => {
      const usernameEl = document.querySelector('#todo-app .login input');
      const username = usernameEl.value;
      // call service
      performLogin(username)
      .then( userInfo => {
        showContent();
        todos = userInfo[username].todos;
        renderTodos(todos);
      })
      .catch( err => {
        updateStatus(errMsgs[err.error] || err.error);
      })
    });
  }

  function addLogout() {
    document.querySelector('#todo-app .logout-button').addEventListener('click', () => {
      document.querySelector('#todo-app .login input').value = "";
      performLogout()
      .then( info => {
        showLogin();
      })
      .catch( err => {
        updateStatus(errMsgs[err.error] || err.error);
      })
    });
  }

  function disableButtonIfNoInput() {
    toAdd.addEventListener('input', () => {
      add.disabled = !toAdd.value;
    });
  }

  function addItem() {
    add.addEventListener('click', () => {
      const name = toAdd.value;
      performAdd(name)
      .then( userInfo => {
        const username = Object.keys(userInfo);
        todos = userInfo[username[0]].todos;
        toAdd.value = '';
        renderTodos(todos);
      })
      .catch( err => {
        updateStatus(errMsgs[err.error] || err.error);
      })
    })
  }

  function deleteItem() {
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('delete') ) {
        const index = e.target.dataset.index;
        performDelete(index)
        .then( userInfo => {
          const username = Object.keys(userInfo);
          todos = userInfo[username[0]].todos;
          renderTodos(todos);
        })
        .catch( err => {
          updateStatus(errMsgs[err.error] || err.error);
        })
      }
    })
  }

  function increaseRanking() {
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('increase') ) {
        const index = e.target.dataset.index;
        performIncrease(index)
        .then( userInfo => {
          const username = Object.keys(userInfo);
          todos = userInfo[username[0]].todos;
          renderTodos(todos);
        })
        .catch( err => {
          updateStatus(errMsgs[err.error] || err.error);
        })
      }
    })
  }

  function decreaseRanking() {
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('decrease') ) {
        const index = e.target.dataset.index;
        performDecrease(index)
        .then( userInfo => {
          const username = Object.keys(userInfo);
          todos = userInfo[username[0]].todos;
          renderTodos(todos);
        })
        .catch( err => {
          updateStatus(errMsgs[err.error] || err.error);
        })
      }
    })
  }

  function disableDecreaseButton(todos) {
    for (let index in todos) {
      if (todos[index].ranking == 1){
        let decreaseBtnEl = document.querySelector(`.decrease[data-index="${index}"]`);//
        decreaseBtnEl.disabled = true;
      }
    }
  }

  function disableIncreaseButton(todos) {
    for (let index in todos) {
      if (todos[index].ranking == 5){
        let increaseBtnEl = document.querySelector(`.increase[data-index="${index}"]`);//
        increaseBtnEl.disabled = true;
      }
    }
  }
  
  function ascSort() {
    document.querySelector('#todo-app .asc-sort').addEventListener('click', () => {
      curSort = 'asc';
      sortAscList();

      return true;
    })
  }

  function descSort(todos) {
    document.querySelector('#todo-app .desc-sort').addEventListener('click', () => {
      curSort = 'desc';
      sortDescList();
      return false;
    })
  }
  
  function sortAscList() {
    var list, i, switching, b, litag, shouldSwitch;
    list = document.querySelector('.todos');
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByClassName("todo-ranking");
      litag = list.getElementsByClassName("todo");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        litag[i].parentNode.insertBefore(litag[i+1], litag[i]);
        switching = true;
      }
    }
  }

  function sortDescList() {
    var list, i, switching, b, litag, shouldSwitch;
    list = document.querySelector('.todos');
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByClassName("todo-ranking");
      litag = list.getElementsByClassName("todo");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        litag[i].parentNode.insertBefore(litag[i+1], litag[i]);
        switching = true;
      }
    }
  }
  
  function renderTodos(todos) {
    const listEl = document.querySelector('#todo-app .todos');
    const html = todos.map( (todo,index) => {
      return `
        <li class="todo">
          <span class="name" data-index="${index}">${todo.task}</span>
          <span class="delete" data-index="${index}">X</span>
          <button class="decrease" type="button" data-index="${index}">-</button>
          <span class="todo-ranking" data-index="${index}">${todo.ranking}</span>
          <button class="increase" type="button" data-index="${index}">+</button>
        </li>`;
    }).join("\n");
    listEl.innerHTML = html;
    updateStatus('');
    add.disabled = !toAdd.value;
    disableButtonIfNoInput(); 
    disableDecreaseButton(todos);
    disableIncreaseButton(todos);
    if (curSort === 'asc'){
      sortAscList();
    }
    else if (curSort ==='desc'){
      sortDescList();
    }
  }

  const myTimer = setInterval(refresh, 5000);
  function refresh() {
    const name = toAdd.value;
    performRefresh()
    .then( userInfo => {
      const username = Object.keys(userInfo);
      todos = userInfo[username[0]].todos;
      toAdd.value = name;
      renderTodos(todos);
    })
    .catch( err => {
      updateStatus(errMsgs[err.error] || err.error);
    })
  }
  