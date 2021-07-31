const uuid = require('uuid').v4;

const users = {};
const sessions = {};

const isValidUsername = function( username ) {
  if(!username) {
    return false;
  }
  const cleanUsername = username.replace(/[^a-zA-Z0-9_\-]/g, '');
  if(username !== cleanUsername) {
    return false;
  }
  return true;
};

const create = function({ username }) {
  if(!username) {
    return { error: 'username-required' };
  }
  if(!isValidUsername(username)) {
    return { error: 'username-invalid' };
  }
  if(username==="dog"){
    return { error: 'forbidden-username-dog' };
  }
  const sid = uuid();
  // create or load user data
  users[username] = users[username] || username;
  // create session data, link to user
  sessions[sid] = {
    sid,
    username,
  };
  return { sid };
};

const remove = function(sid) {
  delete sessions[sid];
};

const isValid = function(sid) {
  return !!sessions[sid];
};

module.exports = {
  details: sessions,
  create,
  remove,
  isValid,
};
