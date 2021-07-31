const userlist = {};

//if exists or not
const isValidUsername = function(username) {
    return userlist[username];
};

//confirm the form of all username
const validateUsername = function(username) {
    const errors = [];
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    if( clean !== username ) {
      // TODO: should give error codes, not text messages
      errors.push('disallowed-characters');
    }
    if(!username) {
      errors.push('empty-username');
    }
    if(username === "dog"){
      errors.push('bad-username');
    }
    return errors.length ? errors : '';
};

//create item list for new username
const createItemList = function(username) {
    userlist[username] = {
      todos: [
        {
          task: 'item 1',
          ranking: 3,
        },
        {
          task: 'item 2',
          ranking: 2,
        },
        {
          task: 'item 3',
          ranking: 4,
        },
        {
          task: 'item 4',
          ranking: 1,
        },
        {
          task: 'item 5',
          ranking: 5,
        },
      ],
    };
    return userlist[username]; //return value of username
  };

  const ulModule = {
    userlist,
    isValidUsername,
    validateUsername,
    createItemList,
  }

  module.exports = ulModule;