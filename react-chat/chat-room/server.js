const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000; 
const session = require('./session');
const chat = require('./src/chat');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./build'));

app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  res.json({
    session: session.details[sid], 
    currentUsers: chat.currentUsers,
    messages: chat.messages});
});

app.post('/api/session', (req, res) => {
  const username = req.body.username;
  const { sid, error } = session.create({ username });
  if(error) {
    res.status(400).json(error);
    return;
  }
  chat.addUser(username);
  res.cookie('sid', sid);
  res.json({
    session: session.details[sid], 
    currentUsers: chat.currentUsers,
    messages: chat.messages});
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  
  const username = session.details[sid].username;
  chat.removeUser(username);
  session.remove(sid);
  res.clearCookie('sid');
  res.json({ sid, status: 'removed' });
});

app.post('/api/chat', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }

  const sender = session.details[sid].username;
  const text = req.body.text;
  chat.addMessage({sender,text});
  res.json({
    session: session.details[sid], 
    currentUsers: chat.currentUsers,
    messages: chat.messages});
});

app.put('/api/chat', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }

  res.json({
    session: session.details[sid], 
    currentUsers: chat.currentUsers,
    messages: chat.messages});
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

