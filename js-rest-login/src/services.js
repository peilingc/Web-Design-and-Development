export const checkLoginStatus = function() {
  return fetch('/session', {
    method: 'GET',
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performLogin = function( username ) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performLogout = function() {
  return fetch('/logout', {
    method: 'DELETE',
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performAdd = function( name ) {
  return fetch(`/item/${name}`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ name }),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performDelete = function( index ) {
  return fetch(`/item/${index}`, {
    method: 'DELETE',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ index }),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performIncrease = function( index ) {
  return fetch(`/item/${index}`, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({  index,
                            ranking : 1,}),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performDecrease = function( index ) {
  return fetch(`/item/${index}`, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({  index,
                            ranking : -1,}),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performRefresh = function() {
  return fetch('/session', {
    method: 'GET',
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};


