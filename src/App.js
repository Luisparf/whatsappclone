import React, { useState, useEffect} from 'react';
import './App.css';
import { DonutLarge } from '@material-ui/icons';
import { ApiOutlined, Chat } from '@mui/icons-material';
import { MoreVert } from '@material-ui/icons';
import { Search } from '@mui/icons-material';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';
import Api from './Api';

export default () =>{


  const [chatList, setChatlist] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(()=>{
    if(user !== null){
      let unsub = Api.onChatList(user.id, setChatlist);
      return unsub;
    }
  },[user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    await Api.addUser(newUser);

    setUser(newUser);
  }

  if(user === null){
     return (<Login onReceive={handleLoginData}/>)
  }

  

  return(
    <div className='app-window'>
        <div className='sidebar'>
            <NewChat 
              chatlist={chatList}
              user={user}
              show = {showNewChat}
              setShow = {setShowNewChat}
            />
              <header>
                <img className='header--avatar' src={user.avatar} alt=''></img>
                <div className='headder--buttons'>
                  <div className='header--btn'>
                      <DonutLarge style={{color: '#919191'}} />
                  </div>
                  <div onClick = {handleNewChat} className='header--btn'>
                      < Chat style={{color: '#919191'}} />
                  </div>
                  <div className='header--btn'>
                      <MoreVert style={{color: '#919191'}} />
                  </div>

                </div>
              </header>

              <div className='search'>
                <div className='search--input'>
                     < Search fontSize='small' style={{color: '#919191'}} />
                     <input type='search' placeholder='Procurar ou come??ar uma nova conversa'/> 

                </div>
              </div>

              <div className='chatlist'>
                {chatList.map((item, key) =>
                  <ChatListItem 
                      key={key}
                      data={item}
                      active={activeChat.chatId === chatList[key].chatId}
                      onClick={()=>setActiveChat(chatList[key])}
                  />
                )}
              </div>
        </div>
        <div className='contentarea'>
          {activeChat.chatId !== undefined &&
            <ChatWindow 
              user={user}
              data={activeChat}
            />
          }
           {activeChat.chatId === undefined &&
            <ChatIntro/>
        }
        </div>
    </div>
  );
}
