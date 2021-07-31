import {fetchNewList} from './services';
import {useState} from 'react';

const ShowUsers = ({users,setUsers}) => {
    const [status, setStatus] = useState('');
    const errMsgs = { 
        'session-required': 'Please log in.',
        'session-invalid' : 'Invalid session.',
        'network-error' : 'There was a problem connecting to the network, try again.',
    };

    const getNewList = () => {
        fetchNewList()
        .then( userinfo => {
          setUsers(userinfo.currentUsers);
        })
        .catch( err => {
          setStatus(errMsgs[err] || err); 
        });
    };
    
    return (
        <div>
            <label>Current Users</label>
            <button onClick={getNewList}>Get New User List</button>
            <ul>
            { Object.keys(users).map( key => ( <li key={key}>{users[key]}</li> ) ) }
            </ul>
            { status && <div className="status">{status}</div>}
        </div>
      
    );
  };
export default ShowUsers;