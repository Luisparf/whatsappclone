import React from 'react';
import './App.css';
import { DonutLarge } from '@material-ui/icons';
import { Chat } from '@mui/icons-material';
import { MoreVert } from '@material-ui/icons';
import { Search } from '@mui/icons-material';

export default () =>{
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
                ...
              </div>
        </div>
        <div className='contentarea'>
      </div>
    </div>
  );
}
