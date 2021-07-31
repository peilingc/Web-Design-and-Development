/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLoginStatus": () => (/* binding */ checkLoginStatus),
/* harmony export */   "performLogin": () => (/* binding */ performLogin),
/* harmony export */   "performLogout": () => (/* binding */ performLogout),
/* harmony export */   "performAdd": () => (/* binding */ performAdd),
/* harmony export */   "performDelete": () => (/* binding */ performDelete),
/* harmony export */   "performIncrease": () => (/* binding */ performIncrease),
/* harmony export */   "performDecrease": () => (/* binding */ performDecrease),
/* harmony export */   "performRefresh": () => (/* binding */ performRefresh)
/* harmony export */ });
var checkLoginStatus = function checkLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performLogin = function performLogin(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performLogout = function performLogout() {
  return fetch('/logout', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performAdd = function performAdd(name) {
  return fetch("/item/".concat(name), {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      name: name
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performDelete = function performDelete(index) {
  return fetch("/item/".concat(index), {
    method: 'DELETE',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      index: index
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performIncrease = function performIncrease(index) {
  return fetch("/item/".concat(index), {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      index: index,
      ranking: 1
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performDecrease = function performDecrease(index) {
  return fetch("/item/".concat(index), {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      index: index,
      ranking: -1
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performRefresh = function performRefresh() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");

var toAdd = document.querySelector('#todo-app .logged-in input');
var add = document.querySelector('#todo-app .add-button');
var list = document.querySelector('#todo-app .todos');
var todos = {};
var curSort = '';
var errMsgs = {
  'login-required': 'Please log in!',
  'login-invalid': 'Invalid login, please try again!',
  'network-error': 'There was a problem connecting to the network, try again!',
  'empty-username': 'Username should not be empty.',
  'disallowed-characters': 'Username should not contain any disallowed characters.',
  'bad-username': 'Username cannot be dog.',
  'duplicate': 'That item already exists.',
  'missing-item': 'Item does not exist.'
};
addLogin();
addLogout();
addItem();
deleteItem();
increaseRanking();
decreaseRanking();
ascSort();
descSort();
(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)().then(function (userInfo) {
  showContent();
  var username = Object.keys(userInfo);
  todos = userInfo[username[0]].todos;
  renderTodos(todos);
})["catch"](function (err) {
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

function updateStatus(message) {
  document.querySelector('#todo-app .status').innerText = message;
}

function addLogin() {
  document.querySelector('#todo-app .login button').addEventListener('click', function () {
    var usernameEl = document.querySelector('#todo-app .login input');
    var username = usernameEl.value; // call service

    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username).then(function (userInfo) {
      showContent();
      todos = userInfo[username].todos;
      renderTodos(todos);
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
}

function addLogout() {
  document.querySelector('#todo-app .logout-button').addEventListener('click', function () {
    document.querySelector('#todo-app .login input').value = "";
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogout)().then(function (info) {
      showLogin();
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
}

function disableButtonIfNoInput() {
  toAdd.addEventListener('input', function () {
    add.disabled = !toAdd.value;
  });
}

function addItem() {
  add.addEventListener('click', function () {
    var name = toAdd.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performAdd)(name).then(function (userInfo) {
      var username = Object.keys(userInfo);
      todos = userInfo[username[0]].todos;
      toAdd.value = '';
      renderTodos(todos);
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
}

function deleteItem() {
  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      var index = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.performDelete)(index).then(function (userInfo) {
        var username = Object.keys(userInfo);
        todos = userInfo[username[0]].todos;
        renderTodos(todos);
      })["catch"](function (err) {
        updateStatus(errMsgs[err.error] || err.error);
      });
    }
  });
}

function increaseRanking() {
  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('increase')) {
      var index = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.performIncrease)(index).then(function (userInfo) {
        var username = Object.keys(userInfo);
        todos = userInfo[username[0]].todos;
        renderTodos(todos);
      })["catch"](function (err) {
        updateStatus(errMsgs[err.error] || err.error);
      });
    }
  });
}

function decreaseRanking() {
  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('decrease')) {
      var index = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.performDecrease)(index).then(function (userInfo) {
        var username = Object.keys(userInfo);
        todos = userInfo[username[0]].todos;
        renderTodos(todos);
      })["catch"](function (err) {
        updateStatus(errMsgs[err.error] || err.error);
      });
    }
  });
}

function disableDecreaseButton(todos) {
  for (var index in todos) {
    if (todos[index].ranking == 1) {
      var decreaseBtnEl = document.querySelector(".decrease[data-index=\"".concat(index, "\"]")); //

      decreaseBtnEl.disabled = true;
    }
  }
}

function disableIncreaseButton(todos) {
  for (var index in todos) {
    if (todos[index].ranking == 5) {
      var increaseBtnEl = document.querySelector(".increase[data-index=\"".concat(index, "\"]")); //

      increaseBtnEl.disabled = true;
    }
  }
}

function ascSort() {
  document.querySelector('#todo-app .asc-sort').addEventListener('click', function () {
    curSort = 'asc';
    sortAscList();
    return true;
  });
}

function descSort(todos) {
  document.querySelector('#todo-app .desc-sort').addEventListener('click', function () {
    curSort = 'desc';
    sortDescList();
    return false;
  });
}

function sortAscList() {
  var list, i, switching, b, litag, shouldSwitch;
  list = document.querySelector('.todos');
  switching = true;

  while (switching) {
    switching = false;
    b = list.getElementsByClassName("todo-ranking");
    litag = list.getElementsByClassName("todo");

    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;

      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      litag[i].parentNode.insertBefore(litag[i + 1], litag[i]);
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

    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;

      if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      litag[i].parentNode.insertBefore(litag[i + 1], litag[i]);
      switching = true;
    }
  }
}

function renderTodos(todos) {
  var listEl = document.querySelector('#todo-app .todos');
  var html = todos.map(function (todo, index) {
    return "\n        <li class=\"todo\">\n          <span class=\"name\" data-index=\"".concat(index, "\">").concat(todo.task, "</span>\n          <span class=\"delete\" data-index=\"").concat(index, "\">X</span>\n          <button class=\"decrease\" type=\"button\" data-index=\"").concat(index, "\">-</button>\n          <span class=\"todo-ranking\" data-index=\"").concat(index, "\">").concat(todo.ranking, "</span>\n          <button class=\"increase\" type=\"button\" data-index=\"").concat(index, "\">+</button>\n        </li>");
  }).join("\n");
  listEl.innerHTML = html;
  updateStatus('');
  add.disabled = !toAdd.value;
  disableButtonIfNoInput();
  disableDecreaseButton(todos);
  disableIncreaseButton(todos);

  if (curSort === 'asc') {
    sortAscList();
  } else if (curSort === 'desc') {
    sortDescList();
  }
}

var myTimer = setInterval(refresh, 5000);

function refresh() {
  var name = toAdd.value;
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.performRefresh)().then(function (userInfo) {
    var username = Object.keys(userInfo);
    todos = userInfo[username[0]].todos;
    toAdd.value = name;
    renderTodos(todos);
  })["catch"](function (err) {
    updateStatus(errMsgs[err.error] || err.error);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=todo.js.map