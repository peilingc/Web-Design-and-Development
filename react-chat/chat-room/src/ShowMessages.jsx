import {fetchNewList} from './services';
import {useState} from 'react';
import './showMessages.css';

const ShowMessages = ({messages, setMessages}) => {
  const [status, setStatus] = useState('');
  const errMsgs = { 
    'session-required': 'Please log in.',
    'session-invalid' : 'Invalid session.',
    'network-error' : 'There was a problem connecting to the network, try again.',
  };

  const getNewList = () => {
    fetchNewList()
    .then( userinfo => {
      setMessages(userinfo.messages);
    })
    .catch( err => {
      setStatus(errMsgs[err] || err); 
    });
  };

  const content = messages.map( (message,index) => 
    (
        <li key={index}>
          <div className="message">
            <div className="message-sender">
                <span className="username">{message.sender}</span>
            </div>
            <p className="message-text">{message.text}</p>
            { status && <div className="status">{status}</div>}
	        </div>
        </li>
    )
  )

  return (
    <div>
      <label>Messages</label>
      <button onClick={getNewList}>Get New Message List</button>
      <ol>
      {content}
      </ol>
    </div>
    
  );
};
export default ShowMessages;
