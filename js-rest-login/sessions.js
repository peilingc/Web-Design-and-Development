const uuid = require('uuid').v4;
const sessions = {};

const isValidSession = function(sid) {
  return sessions[sid];
};

//input username object that has todos
const createSession = function(username, itemObj) {
  const sid = uuid();
  sessions[sid] = {
    [username]: itemObj,
  };
  return sid;
};

const sessionsModule = {
    sessions,
    isValidSession,
    createSession,
}

module.exports = sessionsModule;