import './app.css';
import { useState, useEffect } from 'react';
import { endSession, checkSession } from './services';
import Login from './Login';
import ShowMessages from './ShowMessages';
import ShowUsers from './ShowUsers';
import ShowInput from './ShowInput';

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false, isPending: true });
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo.username,
      });
      setUsers(userinfo.currentUsers);
      setMessages(userinfo.messages);
    })
    .catch( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    });
  }, []); // only run on initial render

  const login = function({username}) {
    setUserState({
      isLoggedIn: true,
      isPending: false,
      username,
    });
  };

  const logout = function() {
    // Inform UI to wait
    setUserState({
      ...userState,
      isPending: true,
    });
    // Begin logout
    endSession()
    .then( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    })
    .catch( () => {
      setUserState({
        ...userState,
        isPending: false,
      });
    });
  };

  if(userState.isPending) {
    return (
      <div className="app">
        Loading...
      </div>
    );
  }

  let content;
  if(userState.isLoggedIn) {
    content = <div>
                <ShowUsers users={users} setUsers={setUsers}/>
                <ShowMessages messages={messages} setMessages={setMessages}/>
                <ShowInput setMessages={setMessages}/>
                <button className="logout" onClick={() => logout()}>Logout</button>
              </div>;
  } else {
    content = <Login onLogin={login} setUsers={setUsers} setMessages={setMessages}/>;
  }

  return (
    <div className="app">
      <h1>Chat Room</h1>
      {content}
    </div>
  );
}

export default App;
