import React from 'react'
import ChatBody from '../chatBody/ChatBody'
import SignOut from '../SignOut/SignOut'
import './chat.css'

function Chat() {
  return (
    <div className='__main'>
        <SignOut/>
        <ChatBody />
        
    </div>
  )
}

export default Chat