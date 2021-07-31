import { useState } from 'react';
import { sendMessage } from './services';

const ShowInput = ({setMessages}) => {
    const errMsgs = { 
        'session-required': 'Please log in.',
        'session-invalid' : 'Invalid session.',
        'network-error' : 'There was a problem connecting to the network, try again.',
    };
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const send = () => {
        sendMessage({ text })
        .then( userinfo => {
            setMessages(userinfo.messages);
            setText('');
        })
        .catch( err => {
          setStatus(errMsgs[err] || err); 
          setText('');
        });
    };

    return (
        <div className="input">
            <input className="outgoing" name="text" value={text} onChange={onChange}/>
            <button className="send" onClick={send}>Send</button>
            { status && <div className="status">{status}</div> }
        </div>
    );
  };
export default ShowInput;

