import './App.css';
import io from 'socket.io-client';
import { useState  } from 'react';
import { Chat } from './Chat';

const socket = io.connect('http://localhost:3001');

function App() {

  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if(userName !== '' && room !== '') {
      socket.emit('joinRoom', room)
      setShowChat(true);
    }
  };

  return (
    <div className='app'>
      <div className='joinChatContainer'>
        <h3>Join the Chat</h3>
        <input type='text' placeholder='Pollie' onChange={(event) => {setUserName(event.target.value)}}/>
        <input type='text' placeholder='Room ID... ' onChange={(event) => {setRoom(event.target.value)}}/>
        <button onClick={joinRoom}>Join A Room</button>
      </div>
      {showChat &&
      <Chat socket={socket} userName={userName} room={room}/>
      }
    </div>
  );
}

export default App;
