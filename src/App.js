import React, { useState, useEffect} from 'react';
import './App.css';
import { DonutLarge } from '@material-ui/icons';
import { Chat } from '@mui/icons-material';
import { MoreVert } from '@material-ui/icons';
import { Search } from '@mui/icons-material';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () =>{

  const [chatList, setChatlist] = useState([
    {chatId:1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId:2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId:3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId:4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},

    
  ]);
  const [activeChat, setActiveChat] = useState({});
  return(
    <div className='app-window'>
        <div className='sidebar'>

              <header>
                <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt=''></img>
                <div className='headder--buttons'>
                  <div className='header--btn'>
                      <DonutLarge style={{color: '#919191'}} />
                  </div>
                  <div className='header--btn'>
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
                     <input type='search' placeholder='Procurar ou começar uma nova conversa'/> 

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
            <ChatWindow />
          }
           {activeChat.chatId === undefined &&
            <ChatIntro/>
        }
        </div>
    </div>
  );
}
