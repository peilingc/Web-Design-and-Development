const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));
app.use(cookieParser());

const ulModule = require('./userlist');
const sessionsModule = require('./sessions');

app.get('/session', (req, res) => {
  const sid = req.cookies.sid;
  //if no sid, go login
  if(!sid) {
    res.status(401).json({ error: 'login-required'});
    return;
  }
  //if having sid, go 
  if(sessionsModule.isValidSession(sid) ) {
    res.status(200).json(sessionsModule.sessions[sid]);
    return;
  }
  res.status(403).json({ error: 'login-invalid'});
});

//login
app.post('/session', express.json(), (req, res) => {
  const { username } = req.body;
  //confirm the form of username
  const errors = ulModule.validateUsername(username);
  if( errors ) {
    res.status(400).json({ error: errors[0] });
    return;
  }
  
  //if username doesn't exist, create it with new item list
  if (!ulModule.isValidUsername(username)){
    const itemObj = ulModule.createItemList(username);
    const sid = sessionsModule.createSession(username, itemObj);
    res.cookie('sid', sid);
    res.status(200).json(sessionsModule.sessions[sid]);
  }
  // if username exists, grab current item list
  else {
    const itemObj = ulModule.userlist[username];
    const sid = sessionsModule.createSession(username, itemObj);
    res.cookie('sid', sid);
    res.status(200).json(sessionsModule.sessions[sid]);
  }
});

app.delete('/logout', (req, res) => {
  const sid = req.cookies.sid;
  delete sessionsModule.sessions[sid];
  res.clearCookie('sid');
  res.status(200).json("Successfully logged out. You may re-login now.");
});

//add items
app.post('/item/:name', (req, res) => {
  //grab current username
  const sid = req.cookies.sid;
  const usernameArr = Object.keys(sessionsModule.sessions[sid]);
  //grab item list from userlist
  const todosArr = ulModule.userlist[usernameArr[0]].todos;

  const name = req.params.name;
  if(!name) {
    res.status(400).json({ error: 'missing-item' }); 
    return;
  }

  let duplicate = false;
  for (let index in todosArr) {
    if (todosArr[index].task === name){
      duplicate = true;
      res.status(409).json({ error: 'duplicate' });
      return;
    }
  }
  
  if (duplicate == false){
      const newItem = {
        task: name,
        ranking: 1,
      }
      todosArr.push(newItem);
      sessionsModule.sessions[sid] = {
        [usernameArr[0]] : { todos : todosArr}
      }
      res.status(200).json(sessionsModule.sessions[sid]);
  }
});

//delete items
app.delete('/item/:index', (req, res) => {
  const sid = req.cookies.sid;
  const usernameArr = Object.keys(sessionsModule.sessions[sid]);
  const todosArr = ulModule.userlist[usernameArr[0]].todos;
  const index = req.params.index;
  if(!index) {
    res.status(400).json({ error: 'missing-item' });
    return;
  }
  todosArr.splice(index,1);
  sessionsModule.sessions[sid] = {
    [usernameArr[0]] : { todos : todosArr}
  }
  res.status(200).json(sessionsModule.sessions[sid]);
});

//replace ranking
app.put('/item/:index', express.json(), (req, res) => {
  const sid = req.cookies.sid;
  const usernameArr = Object.keys(sessionsModule.sessions[sid]);
  const todosArr = ulModule.userlist[usernameArr[0]].todos;
  const index = req.params.index;
  
  if(!index) {
    res.status(400).json({ error: 'missing-item' });
    return;
  }

  if (req.body.ranking === 1){
    todosArr[index].ranking++;
  }
  else {
    todosArr[index].ranking--;
  }
  res.status(200).json(sessionsModule.sessions[sid]);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));