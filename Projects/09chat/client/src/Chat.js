import { useState, useEffect } from "react";
import  ScrollToBottom  from 'react-scroll-to-bottom';

const Chat = ({ socket, userName, room }) => {

  const [currentMsg, setCurrentMsg] = useState(''); 
  const [msgList, setMsgList] = useState([]); 

  // Wait for the message to be send and update the array [currentMsg, setCurrentMsg]
  const sendMsg = async () => {
    if(currentMsg !== '') {
        // Object with data-message we will send to the socket
      const msgData = {
        room: room,
        author: userName,
        msg: currentMsg,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
      };
      await socket.emit('sendMsg', msgData);
      setMsgList((list) => [...list, msgData]);
      setCurrentMsg('');
    }
  };

  useEffect(() => {
    socket.on('receiveMsg', (data) => {
        setMsgList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className='chatWindow'>
      <div className='chatHeader'>
        <p>Live Chat</p>
      </div>
      <div className='chatBody'>
        <ScrollToBottom className='msgContainer'>
        {msgList.map((msgContent) => {
            return <div className='message' id={userName === msgContent.author ? 'you' : 'other'}>
                <div>
                    <div className='msgContent'>
                        <p>{msgContent.msg}</p>
                    </div>
                    <div className='msgMeta'>
                        <p id='time'>{msgContent.time}</p>
                        <p id='author'>{msgContent.author}</p>
                    </div>
                </div>
            </div>
        })}
        </ScrollToBottom>
      </div>
      <div className='chatFooter'>
        <input type='text'  onChange={(event) => {setCurrentMsg(event.target.value)}} onKeyDown={(event) => event.key === 'Enter' && sendMsg()} value={currentMsg}
        />
        <button onClick={sendMsg}>Send</button>
      </div>
    </div>
  );
};

export {
  Chat,
};