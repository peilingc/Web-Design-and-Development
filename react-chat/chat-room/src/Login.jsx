import { useState } from 'react';
import { createSession } from './services';

const Login = function({ onLogin, setUsers, setMessages }) {

  const errMsgs = { 
    'username-required': 'Please type username.',
    'username-invalid' : 'Invalid username.',
    'forbidden-username-dog': 'Username should not be dog.',
    'network-error' : 'There was a problem connecting to the network, try again.',
  };

  const [username, setUsername] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    setUsername(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const login = () => {
    setIsPending(true);
    createSession({ username })
    .then( userinfo => {
      setStatus('');
      setIsPending(false);
      onLogin({ username });
      setUsers(userinfo.currentUsers);
      setMessages(userinfo.messages); 

    })
    .catch( err => {
      setStatus(errMsgs[err] || err); 
      setIsPending(false);
    });
  };

  return (
    <div>
      <label>
        Username:
        <input className="username-field" disabled={isPending} onChange={onChange} value={username} />
      </label>
      <button onClick={login} disabled={isDisabled || isPending} >{ isPending ? "..." : "Login"}</button>
      { status && <div className="status">{status}</div>}
    </div>
  );
};
export default Login;
