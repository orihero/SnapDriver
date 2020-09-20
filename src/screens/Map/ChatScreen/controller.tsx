import React, {useState} from 'react';
import ChatScreenView from "./view";

const ChatScreenController = ({SendPush, newOrder, messages}: any) => {

    const [message, setMessage] = useState('');

    function sendMsg() {
        SendPush({
            user_id: newOrder.user_id,
            title: 'message',
            message
        }, () => {
        });
        setMessage('')
    }

    return (
        <ChatScreenView
            sendMsg={sendMsg}
            message={message}
            setMessage={setMessage}
            messages={messages}
        />
    );
};

export default ChatScreenController;
